import m from 'mithril'
import './root-layout.sass'
import Header from './header'
import MasteryTree from './mastery-tree'

const RootLayout: m.ClosureComponent = () => {
  return {
    view() {
      return [
        m('div', { class: 'container' }, [
          m(Header),
          m(MasteryTree)
        ])
      ]
    }
  }
}

export default RootLayout