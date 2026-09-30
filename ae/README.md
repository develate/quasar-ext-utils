# `@develate/quasar-app-extension-quasar-ext-utils`

A Quasar App Extension with shared Quasar/Vue utilities and development helpers.

## Install

```bash
quasar ext add @develate/quasar-app-extension-quasar-ext-utils
```

Installation creates `.env.dev` and `.env.build` in the app root. If `.env` already exists, its values are copied into both files and `.env` is removed. Existing mode-specific values take precedence. Quasar loads `.env.dev` for `quasar dev` and `.env.build` for `quasar build`.

## Uninstall

```bash
quasar ext remove @develate/quasar-app-extension-quasar-ext-utils
```

## Local network development

Pass `--ni` to a development run to bind Quasar to the current local IPv4
address. The extra `--` is required because Quasar does not accept extension
specific top-level options:

```bash
quasar dev -- --ni
```

The extension prefers private LAN addresses (`10.x.x.x`, `192.168.x.x`, or
`172.16.x.x` through `172.31.x.x`) and falls back to another non-internal IPv4
address or `localhost`.

## Donate

If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
