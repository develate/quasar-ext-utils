/**
 * Quasar App Extension install script
 * https://quasar.dev/app-extensions/development-guide/install-api
 */

import { defineInstallScript } from "#q-app";

// can be async
export default defineInstallScript(api => {
  api.extendPackageJson({
    scripts: {
      pull: "git pull --rebase --autostash && npm run setup",
      setup: "npm install && npm install --prefix src-capacitor",
      "build-ios": "quasar build -m capacitor -T ios --ide",
      "dev-ios": "quasar dev -m capacitor -T ios"
    }
  });
});
