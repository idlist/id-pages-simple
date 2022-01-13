import m from 'mithril'
import './root-layout.sass'
import Header from './header'
import PanelSelector from './panel-selector'
import MasteryTree from './mastery-tree'

type Panel = 'MasteryTree' | 'Timeline' | 'Projects'

const RootLayout: m.ClosureComponent = () => {
  // Should be changed to 'let' define later on.
  const selectedPanel: Panel = 'MasteryTree'

  const displayPanel = (panel: Panel) => {
    switch (panel) {
      case 'MasteryTree':
      default:
        return MasteryTree
    }
  }

  return {
    view() {
      return [
        m('div', { class: 'container' }, [
          m(Header),
          m(PanelSelector),
          m(displayPanel(selectedPanel))
        ])
      ]
    }
  }
}

export default RootLayout