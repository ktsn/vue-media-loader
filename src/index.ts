import * as loaderUtils from 'loader-utils'
import { loader } from 'webpack'

const vueMediaLoader: loader.Loader = function vueMediaLoader(code) {
  if (!this.resourceQuery) return code

  const options = loaderUtils.parseQuery(this.resourceQuery)

  // Ignore it if it does not come from Vue SFC or not have `media` attribute.
  if (!options.vue || !options.media) {
    return code
  }

  const str = String(code)
  const matched = str.match(/^\s*@charset\s*('.*'|".*")\s*;\s*/)
  const charset = matched ? matched[0] : ''
  const body = str.replace(charset, '')

  return `${charset}@media ${options.media} {\n${body}\n}`
}
export = vueMediaLoader
