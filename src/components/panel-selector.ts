import m from 'mithril'
import './panel-selector.sass'

const PanelSelector: m.ClosureComponent = () => {
  return {
    view() {
      return [
        m('div', { class: 'panel-selector' })
      ]
    }
  }
}

export default PanelSelector