import * as loaderUtils from 'loader-utils'
import { loader } from 'webpack'

const vueMediaLoader: loader.Loader = function vueMediaLoader(code) {
  const options = loaderUtils.parseQuery(this.resourceQuery)

  // Ignore it if it does not come from Vue SFC or not have `media` attribute.
  if (!options.vue || !options.media) {
    return code
  }

  return `@media ${options.media} {\n${code}\n}`
}
export = vueMediaLoader
