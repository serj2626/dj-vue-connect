import type { App } from 'vue'
import UIButton from './UI/UIButton.vue'
import UIInput from './UI/UIInput.vue'
import Trends from '../Trends.vue'
import PeopleYouMayKnow from '../PeopleYouMayKnow.vue'
import UIAcceptButton from './UI/UIAcceptButton.vue'
import UIRejectButton from './UI/UIRejectButton.vue'

const components = [
  { name: 'UIButton', component: UIButton },
  { name: 'Trends', component: Trends },
  { name: 'PeopleYouMayKnow', component: PeopleYouMayKnow },
  { name: 'UIAcceptButton', component: UIAcceptButton },
  { name: 'UIRejectButton', component: UIRejectButton },
  { name: 'UIInput', component: UIInput },
]

export default {
  install(app: App) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  },
}
