import m from 'mithril'
import './mastery-tree.sass'

const TechnologyTree: m.ClosureComponent = () => {
  return {
    view() {
      return [
        m('div', { class: 'mastery-list' })
      ]
    }
  }
}

export default TechnologyTree