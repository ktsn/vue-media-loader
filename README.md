# vue-media-loader

Enable `media` attribute on Vue SFC styles.

## Requirements

- vue-loader >= 15

## Installation

```sh
$ npm i -D vue-media-loader
```

## Usage

Add `vue-loader` and `vue-media-loader` in your webpack config. Note that you need to insert `vue-media-loader` between any CSS preprocessors and `css-loader`.

```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // ... Other configs goes here ...

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'vue-media-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [new VueLoaderPlugin()]
}
```

Then you can write `media` attribute on `<style>` block in your `.vue` files.

```vue
<template>
  <p class="message">This text color will be changed if you change the window width.</p>
</template>

<style>
.message {
  color: #333;
}
</style>

<style media="(max-width: 767px)">
.message {
  color: #33a;
}
</style>

<style media="(max-width: 320px)">
.message {
  color: #a33;
}
</style>
```

The above code is equivalent with the following:

```vue
<template>
  <p class="message">This text color will be changed if you change the window width.</p>
</template>

<style>
.message {
  color: #333;
}

@media (max-width: 767px) {
  .message {
    color: #33a;
  }
}

@media (max-width: 320px) {
  .message {
    color: #a33;
  }
}
</style>
```

## License

MIT
