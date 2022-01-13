import m from 'mithril'
import './root-layout.sass'
import Header from './header'
import MasteryTree from './mastery-tree'
import Footer from './footer'

const RootLayout: m.ClosureComponent = () => {
  return {
    view() {
      return [
        m('div', { class: 'container' }, [
          m(Header),
          m(MasteryTree),
          m(Footer)
        ])
      ]
    }
  }
}

export default RootLayout