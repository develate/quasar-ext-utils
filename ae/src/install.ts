/**
 * Quasar App Extension install script
 * https://quasar.dev/app-extensions/development-guide/install-api
 */

import { defineInstallScript } from "#q-app";
import {
  existsSync,
  readFileSync,
  statSync,
  unlinkSync,
  writeFileSync
} from "node:fs";

const envFiles = [".env.dev", ".env.build"];

// can be async
export default defineInstallScript(api => {
  const originalEnv = api.resolve.app(".env");

  if (existsSync(originalEnv)) {
    const sharedValues = readFileSync(originalEnv, "utf8");
    const mode = statSync(originalEnv).mode;

    for (const file of envFiles) {
      const target = api.resolve.app(file);
      const currentValues = existsSync(target)
        ? readFileSync(target, "utf8")
        : "";
      const separator =
        sharedValues && currentValues && !sharedValues.endsWith("\n")
          ? "\n"
          : "";

      // Keep mode-specific values last so they override values from the old .env.
      writeFileSync(target, sharedValues + separator + currentValues, { mode });
    }

    unlinkSync(originalEnv);
  } else {
    for (const file of envFiles) {
      const target = api.resolve.app(file);
      if (!existsSync(target)) {
        writeFileSync(target, "");
      }
    }
  }

  api.extendPackageJson({
    scripts: {
      pull: "git pull --rebase --autostash && npm run setup",
      setup: "npm install && npm install --prefix src-capacitor",
      "build-ios": "quasar build -m capacitor -T ios --ide",
      "dev-ios": "quasar dev -m capacitor -T ios"
    }
  });
});
