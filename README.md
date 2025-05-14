<p align="center">
  <img width="160" height="160" src="https://avatars.githubusercontent.com/u/201536780?s=160&v=4" />
</p>
<h1 align="center">atproto OS</h1>
<h3 align="center">
    Open Web Desktop + AT Protocol
</h3>

## Overview
Open Web Desktop (OWD) is a framework designed to provide a simple environment for building web-based desktop experiences. It's built with Vue.js & TypeScript, and it leverages the extensible Nuxt.js architecture.

[atproto OS](https://github.com/atproto-os) is providing a set of modules to kickstart your Open Web Desktop on the AT Protocol.

## Features
- Open-source web desktop bundled with AT Protocol modules
- Seamlessly login via Bluesky and keep your app states synced
- Fully extendable through themes, applications, and modules
- Store data of any application simply by extending its Pinia store
- Style your apps with PrimeVue and Tailwind for a consistent UI
- Showcase your AT Protocol project in a web-based desktop

## Starter Template

This starter template is decked with some basic applications and dedicated AT Protocol modules.

#### Generic Applications
- [@owdproject/app-about](https://github.com/owdproject/app-about)
- [@owdproject/app-debug](https://github.com/owdproject/app-debug)
- [@owdproject/app-terminal](https://github.com/owdproject/app-terminal)
- [@owdproject/app-todo](https://github.com/owdproject/app-todo)
- [@owdproject/app-wasmboy](https://github.com/owdproject/app-wasmboy)

#### AT Protocol Modules
- [@owdproject/app-atproto](https://github.com/atproto-os/app-atproto)
- [@owdproject/module-atproto](https://github.com/atproto-os/module-atproto)
- [@owdproject/module-pinia-atproto](https://github.com/atproto-os/module-pinia-atproto)

## Getting started

Fork the project and clone it with something like:
```bash
git clone https://github.com/<username>/atproto-os.git
```

Once ready, you can start the development server:
```bash
# Run the dev server + hot-reload with npm
npm install
npm run dev

# Or use pnpm for a faster experience
pnpm install
pnpm run dev
```

### Configuring atprotoOS
atprotoOS works out-of-the-box, but if you are going to deploy it somewhere, you will need to accordingly update your `atproto` configuration in `nuxt.config.ts` for the AT Protocol auth to work correctly.

```js
atproto: {
    serviceEndpoint: {
        private: 'https://bsky.social',
        public: 'https://public.api.bsky.app'
    },
    oauth: {
        clientMetadata: {
            // url of your remote client_metadata.json, leave the field empty
            // to let `nuxt-atproto` generate a local /public/client_metadata.json
            remote: '',
            // configuration for the local client_metadata.json
            local: {
                client_id: "http://127.0.0.1/client-metadata.json",
                client_name: "nuxt-atproto",
                client_uri: "http://127.0.0.1",
                logo_uri: "http://127.0.0.1/logo.png",
                tos_uri: "http://127.0.0.1",
                policy_uri: "http://127.0.0.1",
                redirect_uris: ["http://127.0.0.1"],
                scope: "atproto", // use "atproto transition:generic" in production
                grant_types: ["authorization_code", "refresh_token"],
                response_types: ["code"],
                token_endpoint_auth_method: "none",
                application_type: "web",
                dpop_bound_access_tokens: true
            }
        },
        signInOptions: {
            state: "",
            prompt: "login",
            scope: "atproto", // use "atproto transition:generic" in production
            ui_locales: "en",
        },
    },
    debug: true,
}
```

## Modules
Open Web Desktop projects can be extended with [themes, modules, and applications](https://github.com/topics/owd-modules).

### Install a new app
You can install an application with `pnpm install @owdproject/app-todo`.  
Then, simply define it in the configuration:

```typescript
// owd.config.ts
export default defineDesktopConfig({
    theme: "@owdproject/theme-win95",
    apps: [
        "@owdproject/app-about",
        "@owdproject/app-todo", // define here the app you just installed
    ]
})
```

### Create a new app
Documentation is under development, please take a look at the source code of already existing applications and [join our Discord](https://discord.gg/zPNaN2HAaA) if you would like to explore them together. You may like the new [Open Web Desktop client](https://github.com/owdproject/client) implemented in a Nx monorepo, if you want a more structured development environment.

## Themes
You can install a [new theme](https://github.com/topics/owd-themes) the same way.  

```bash
pnpm install @owdproject/theme-gnome
```

Define the theme in `owd.config.ts`:

```typescript
// owd.config.ts
import {defineDesktopConfig} from "@owdproject/core/runtime/utils/utilDesktop"

export default defineDesktopConfig({
    theme: '@owdproject/theme-gnome', // define here the theme you just installed
```

## Supporting
Open Web Desktop may become a vast project, the code has been entirely rewritten and is now actively being developed. Your support is crucial to keep it moving forward. If you like to see more, please consider donating.

[Become a sponsor](https://github.com/sponsors/owdproject)

## License
atprotoOS is released under the [GNU General Public License v3](LICENSE).
