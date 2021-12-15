import m from 'mithril'
import './mastery-list.sass'

const MasteryList = () => {
  return {
    view() {
      return [
        m('div', { class: 'mastery-list' })
      ]
    }
  }
}

export default MasteryList