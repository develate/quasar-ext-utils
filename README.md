# @develate/quasar-ext-utils

A Quasar App Extension workspace for shared Quasar/Vue utilities and development helpers.

The extension currently includes:

- a boot script that registers the demo `<my-component>` component globally;
- an opt-in `--ni` development flag that binds Quasar to a private local-network IPv4 address; and
- install-time helper scripts for pulling, setting up, and developing/building a Capacitor iOS target.

The extension itself lives in [`ae/`](ae/). [`playground/`](playground/) is a Quasar app used to develop and manually exercise it.

## Requirements

- Node.js 22.12+, 24, or 26+
- pnpm 11+
- A Quasar CLI Vite project when consuming the published extension

## Install the extension

From a Quasar application, install the published package with:

```bash
quasar ext add @develate/quasar-app-extension-quasar-ext-utils
```

After installation, start the application as usual:

```bash
quasar dev
```

The extension registers `<my-component>` during boot. Its current implementation is a scaffold intended to be replaced or extended as the utility package grows.

### Use the local network development option

Pass `--ni` after the Quasar command to bind the dev server to a private LAN address. This is useful when testing from another device on the same network:

```bash
quasar dev -- --ni
```

The extension prefers addresses in `10.0.0.0/8`, `172.16.0.0/12`, and `192.168.0.0/16`, then falls back to another non-internal IPv4 address or `localhost`.

## Develop locally

Install dependencies from the repository root:

```bash
pnpm install
```

Run the playground:

```bash
pnpm run dev
```

Useful workspace commands:

```bash
# Check formatting, linting, and types
pnpm run lint:check
pnpm run typecheck

# Apply formatting and lint fixes
pnpm run lint

# Invoke the local extension in the playground
pnpm run invoke

# Remove and invoke the extension again
pnpm run cycle
```

Use `pnpm run invoke` after changing extension install, prompt, or uninstall scripts. Use `pnpm run cycle` when you need to exercise the full uninstall/reinstall flow.

The main extension entry points are:

- [`ae/src/index.ts`](ae/src/index.ts) — extends the Quasar configuration and dev server settings;
- [`ae/src/install.ts`](ae/src/install.ts) — adds helper scripts to the host application;
- [`ae/src/prompts.ts`](ae/src/prompts.ts) — handles extension-install prompts; and
- [`ae/src/runtime/`](ae/src/runtime/) — contains runtime boot code and components.

## Publish

The publishable package is the `ae` workspace. Update [`ae/README.md`](ae/README.md) alongside any public API changes, then publish from that directory:

```bash
cd ae
pnpm login
pnpm publish
```

## License

This project is licensed under the MIT License.

If you appreciate the work that went into this App Extension, consider [donating to Quasar](https://donate.quasar.dev).
