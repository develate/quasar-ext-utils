/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 */

import { defineIndexScript } from "#q-app";

// can be async
export default defineIndexScript(api => {
  api.extendQuasarConf(() => ({
    boot: [
      "~@develate/quasar-app-extension-quasar-ext-utils/src/runtime/boot.register.ts"
    ]
  }));
});
