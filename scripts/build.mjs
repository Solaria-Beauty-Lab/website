import { cp, mkdtemp, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const qwikCli = join(root, "node_modules/@builder.io/qwik/qwik-cli.cjs");
let buildRoot = root;

// Qwik's Vercel adapter renames dist. OneDrive directories can reject that
// operation on Windows, even when every file can be read and written.
if (process.platform === "win32") {
  buildRoot = await mkdtemp(join(tmpdir(), "solaria-build-"));
  const inputs = [
    "src",
    "public",
    "adapters",
    "scripts",
    "package.json",
    "pnpm-lock.yaml",
    "tsconfig.json",
    "qwik.env.d.ts",
    "vite.config.ts",
    "eslint.config.js",
  ];
  await Promise.all(
    inputs.map((input) =>
      cp(join(root, input), join(buildRoot, input), { recursive: true }),
    ),
  );
  await symlink(
    join(root, "node_modules"),
    join(buildRoot, "node_modules"),
    "junction",
  );
  console.log(`Build Windows fuori dalla cartella sincronizzata: ${buildRoot}`);
}

const result = spawnSync(process.execPath, [qwikCli, "build"], {
  cwd: buildRoot,
  stdio: "inherit",
  // The isolated Windows copy deliberately shares installed dependencies.
  // Report dependency drift without reinstalling into the source junction.
  env:
    buildRoot === root
      ? process.env
      : { ...process.env, pnpm_config_verify_deps_before_run: "warn" },
});
if (result.error) throw result.error;
if (result.status !== 0) {
  console.error(
    `Build non completata. File diagnostici conservati in ${buildRoot}`,
  );
  process.exit(result.status ?? 1);
}

if (buildRoot !== root) {
  // Replace only generated deployment output after a successful build.
  const output = join(root, ".vercel/output");
  await rm(output, { recursive: true, force: true });
  await cp(join(buildRoot, ".vercel/output"), output, { recursive: true });
  // The isolated build is retained for inspection; node_modules is a junction.
  console.log(`Output Vercel pronto in ${output}`);
}
