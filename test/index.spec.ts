import * as loader from '../src/index'

function load(code: string, request: string): string {
  const [path, query] = request.split('?')

  return loader.call(
    {
      resourcePath: path,
      resourceQuery: '?' + query
    },
    code
  )
}

describe('vue-media-loader', () => {
  it('wraps the style with media query', () => {
    const code = '.foo { color: red; }'
    const media = '(max-width: 480px)'
    const res = load(code, './Test.vue?vue&media=' + encodeURIComponent(media))
    expect(res).toBe(`@media ${media} {\n${code}\n}`)
  })

  it('does nothing if media query is not specified', () => {
    const code = '.foo { color: red; }'
    const res = load(code, './Test.vue?vue')
    expect(res).toBe(code)
  })

  it('does nothing if not come from Vue SFC', () => {
    const code = '.foo { color: red; }'
    const res = load(
      code,
      './Test.vue?media=' + encodeURIComponent('(max-width: 480px)')
    )
    expect(res).toBe(code)
  })
})
