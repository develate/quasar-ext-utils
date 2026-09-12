/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 */

import os from "node:os";
import { defineIndexScript } from "#q-app";

function getLocalIp() {
  const addresses = Object.values(os.networkInterfaces())
    .flatMap(networkInterface => networkInterface ?? [])
    .filter(addr => addr.family === "IPv4" && !addr.internal);

  // Prefer actual LAN/private addresses over VPNs such as Tailscale.
  const lan = addresses.find(
    ({ address }) =>
      address.startsWith("10.") ||
      address.startsWith("192.168.") ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(address)
  );

  return lan?.address ?? addresses[0]?.address ?? "localhost";
}

// can be async
export default defineIndexScript(api => {
  api.extendQuasarConf(() => ({
    boot: [
      "~@develate/quasar-app-extension-quasar-ext-utils/src/runtime/boot.register.ts"
    ]
  }));

  api.extendQuasarConf((_, extensionApi) => {
    if (!extensionApi.ctx.dev || !process.argv.includes("--ni")) {
      return;
    }

    return {
      devServer: {
        host: getLocalIp()
      }
    };
  });
});
