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

## Extend your desktop

Thanks to Tailwind and PrimeVue, you can create custom themes from scratch and ensure a consistent look across all apps. Each theme defines its own style, making your desktop both cohesive and uniquely yours.

[Applications](https://github.com/topics/owd-apps) · [Modules](https://github.com/topics/owd-modules) · [Themes](https://github.com/topics/owd-themes)

### 🧩 Install an application

You can discover new apps by searching for the [owd-apps](https://github.com/topics/owd-apps) tag on GitHub.

For example, to install the To-do app:

```bash
nx run desktop:install-app --name=@owdproject/app-todo
```

This will install the package and automatically register it in your desktop configuration.

### 🧩 Install a module

You can discover new modules by searching for the [owd-modules](https://github.com/topics/owd-modules) tag on GitHub.

For example, to install the session persistence module:

```bash
nx run desktop:install-module --name=@owdproject/module-pinia-localforage
```

### 🖥️ Themes

Themes are full desktop environments that style all UI components independently using [PrimeVue](https://primevue.org/).  
Each theme provides a unique look and feel while maintaining consistent functionality across all applications.

You can discover new themes by searching for the [owd-themes](https://github.com/topics/owd-themes) tag on GitHub.

```bash
nx run desktop:install-theme --name=@owdproject/theme-gnome
```

## Supporting
Open Web Desktop may become a vast project, the code has been entirely rewritten and is now actively being developed. Your support is crucial to keep it moving forward. If you like to see more, please consider donating.

[Become a sponsor](https://github.com/sponsors/owdproject)

## License
atprotoOS is released under the [GNU General Public License v3](LICENSE).
