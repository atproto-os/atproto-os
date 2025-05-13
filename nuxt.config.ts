export default defineNuxtConfig({
    ssr: false,

    compatibilityDate: '2025-05-13',

    devServer: {
        host: "127.0.0.1",
    },

    srcDir: 'desktop',

    modules: [
        '@owdproject/core',
    ],

    css: [
        './desktop/assets/styles/index.scss',
    ],

    i18n: {
        strategy: 'no_prefix',
    },

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
                    client_id: 'http://127.0.0.1/client-metadata.json',
                    client_name: 'nuxt-atproto',
                    client_uri: 'http://127.0.0.1',
                    logo_uri: 'http://127.0.0.1/logo.png',
                    tos_uri: 'http://127.0.0.1',
                    policy_uri: 'http://127.0.0.1',
                    redirect_uris: ['http://127.0.0.1'],
                    scope: "atproto",
                    grant_types: ["authorization_code", "refresh_token"],
                    response_types: ["code"],
                    token_endpoint_auth_method: 'none',
                    application_type: 'web',
                    dpop_bound_access_tokens: true
                }
            },
            signInOptions: {
                state: '',
                prompt: 'login',
                scope: 'atproto',
                ui_locales: 'en',
            },
        },
        debug: true,
    },

    future: {
        compatibilityVersion: 4,
    },

    devtools: {
        enabled: false,
    }
})
