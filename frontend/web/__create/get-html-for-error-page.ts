import { serializeError } from 'serialize-error';

export function getHTMLForErrorPage(err: unknown): string {
  const details = serializeError(err);
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Erreur</title>
</head>
<body>
  <h1>Une erreur s'est produite</h1>
  <pre>${typeof details === 'string' ? details : JSON.stringify(details, null, 2)}</pre>
</body>
</html>`;
}
