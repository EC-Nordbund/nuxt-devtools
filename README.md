# Nuxt-Devtools

## Install

1. Install 2 packges
```sh
yarn global add @vue/devtools
yarn add @ec-nordbund/nuxt-devtools -D
```
2. Add this to your nuxt.config.json:

```js
export default {
  buildModules: ["@ec-nordbund/nuxt-devtools"],
};
```

## Startup
After running `nuxt` command start the vue-devtools with `vue-devtools` in an extra Terminal Window.
