import {defineDesktopConfig} from "@owdproject/core/runtime/utils/utilDesktop"

export default defineDesktopConfig({
    apps: [
        '@owdproject/app-about',
        '@owdproject/app-atproto',
        '@owdproject/app-debug',
        '@owdproject/app-terminal',
        '@owdproject/app-todo',
        '@owdproject/app-wasmboy',
    ],
    modules: [
        '@owdproject/module-atproto',
        "@owdproject/module-pinia-atproto"
    ],
    theme: '@owdproject/theme-win95',
})