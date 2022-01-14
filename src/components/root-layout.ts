import m from 'mithril'
import './root-layout.sass'
import Header from './header'
import MasteryTree from './mastery-tree'
import About from './about'

const RootLayout: m.ClosureComponent = () => {
  return {
    view() {
      return [
        m('div', { class: 'container' }, [
          m(Header),
          m(MasteryTree),
          m(About)
        ])
      ]
    }
  }
}

export default RootLayout