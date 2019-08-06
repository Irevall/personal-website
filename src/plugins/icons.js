import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faHome,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

const icons = [
  // fas
  faHome,
  faChevronDown,
]

library.add(...icons)

export default {
  install (Vue) {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
  }
}
