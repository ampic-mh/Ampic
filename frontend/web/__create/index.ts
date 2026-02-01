import { AsyncLocalStorage } from 'node:async_hooks';
import nodeConsole from 'node:console';
import { Hono } from 'hono';
import { contextStorage } from 'hono/context-storage';
import { cors } from 'hono/cors';
import { proxy } from 'hono/proxy';
import { bodyLimit } from 'hono/body-limit';
import { requestId } from 'hono/request-id';
import { createHonoServer } from 'react-router-hono-server/node';
import { serializeError } from 'serialize-error';
import { getHTMLForErrorPage } from './get-html-for-error-page';

const als = new AsyncLocalStorage<{ requestId: string }>();

for (const method of ['log', 'info', 'warn', 'error', 'debug'] as const) {
  const original = nodeConsole[method].bind(console);
  (console as Record<string, unknown>)[method] = (...args: unknown[]) => {
    const rid = als.getStore()?.requestId;
    if (rid) {
      original(`[traceId:${rid}]`, ...args);
    } else {
      original(...args);
    }
  };
}

const app = new Hono();

app.use('*', requestId());

app.use('*', (c, next) => {
  const rid = c.get('requestId');
  return als.run({ requestId: rid }, () => next());
});

app.use(contextStorage());

app.onError((err, c) => {
  if (c.req.method !== 'GET') {
    return c.json(
      {
        error: 'An error occurred in your app',
        details: serializeError(err),
      },
      500
    );
  }
  return c.html(getHTMLForErrorPage(err), 200);
});

if (process.env.CORS_ORIGINS) {
  app.use(
    '/*',
    cors({
      origin: process.env.CORS_ORIGINS.split(',').map((o) => o.trim()),
    })
  );
}

for (const method of ['post', 'put', 'patch'] as const) {
  app[method](
    '*',
    bodyLimit({
      maxSize: 4.5 * 1024 * 1024,
      onError: (c) => c.json({ error: 'Payload too large' }, 413),
    })
  );
}

app.all('/integrations/:path{.+}', async (c, next) => {
  const queryParams = c.req.query();
  const base = process.env.NEXT_PUBLIC_CREATE_BASE_URL ?? 'https://www.create.xyz';
  const path = c.req.param('path');
  const url = `${base}/integrations/${path}${Object.keys(queryParams).length > 0 ? `?${new URLSearchParams(queryParams).toString()}` : ''}`;
  return proxy(url, {
    method: c.req.method,
    body: c.req.raw.body ?? null,
    duplex: 'half',
    redirect: 'manual',
    headers: {
      ...Object.fromEntries(c.req.raw.headers),
      'X-Forwarded-For': process.env.NEXT_PUBLIC_CREATE_HOST ?? '',
      'x-createxyz-host': process.env.NEXT_PUBLIC_CREATE_HOST ?? '',
      Host: process.env.NEXT_PUBLIC_CREATE_HOST ?? '',
      'x-createxyz-project-group-id': process.env.NEXT_PUBLIC_PROJECT_GROUP_ID ?? '',
    },
  });
});

export default await createHonoServer({
  app,
  defaultLogger: false,
});
