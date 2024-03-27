export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as BaseCard } from '../..\\components\\base\\BaseCard.vue'
export { default as LayoutHeader } from '../..\\components\\layout\\LayoutHeader.vue'
export { default as TasksSectionsTaskActions } from '../..\\components\\tasks\\sections\\TaskActions.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
