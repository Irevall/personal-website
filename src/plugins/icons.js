import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faArrowAltCircleUp,
  faArrowUp,
  faCookie,
  faPlus,
  faCheckCircle,
  faSignOutAlt,
  faSmile,
  faGrinBeamSweat,
  faSync,
  faCaretUp,
  faBox,
  faTimes,
  faExclamationTriangle,
  faExclamation,
  faVolumeMute,
  faVolumeUp,
  faEdit,
  faAngleUp,
  faAngleDoubleUp,
  faSearch,
  faSpinner,
  faGripLines,
  faLock,
  faInfo,
  faUser,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'

import {
  faEnvelope,
  faEnvelopeOpen,
  faClock,
  faHourglass,
  faWindowClose,
  faSquare,
  faCheckSquare
} from '@fortawesome/free-regular-svg-icons'

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faGoogle,
  faSteamSymbol
} from '@fortawesome/free-brands-svg-icons'

const icons = [
  // fas
  faArrowAltCircleUp,
  faArrowUp,
  faCookie,
  faPlus,
  faCheckCircle,
  faSignOutAlt,
  faSmile,
  faGrinBeamSweat,
  faSync,
  faCaretUp,
  faBox,
  faTimes,
  faExclamationTriangle,
  faExclamation,
  faVolumeMute,
  faVolumeUp,
  faEdit,
  faAngleUp,
  faAngleDoubleUp,
  faSearch,
  faSpinner,
  faGripLines,
  faLock,
  faInfo,
  faUser,
  faChevronDown,

  // far
  faEnvelope,
  faEnvelopeOpen,
  faClock,
  faHourglass,
  faWindowClose,
  faSquare,
  faCheckSquare,

  // fab
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faGoogle,
  faSteamSymbol
]

library.add(...icons)

export default {
  install (Vue) {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
  }
}
