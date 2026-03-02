/**
 * Finds a free port and runs react-router-serve so the server always starts
 * even when common ports (3000, 4000, 5000) are in use.
 */
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const serverPath = join(rootDir, "build/server/index.js");

function findFreePort(startPort = 3000) {
  return new Promise((resolvePort, reject) => {
    const server = createServer();
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        findFreePort(startPort + 1).then(resolvePort);
      } else {
        reject(err);
      }
    });
    server.listen(startPort, "127.0.0.1", () => {
      const { port } = server.address();
      server.close(() => resolvePort(port));
    });
  });
}

async function main() {
  const port = await findFreePort(parseInt(process.env.PORT, 10) || 3000);
  console.log(`[serve] Using port ${port} (set PORT to force a specific port)\n`);

  const child = spawn(
    "npx",
    ["react-router-serve", serverPath],
    {
      stdio: "inherit",
      env: { ...process.env, PORT: String(port) },
      cwd: rootDir,
      shell: true,
    }
  );

  child.on("exit", (code) => process.exit(code ?? 0));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
