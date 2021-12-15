import m from 'mithril'
import './root-layout.sass'
import Header from './header'
import MasteryList from './mastery-list'

const RootLayout = () => {
  return {
    view() {
      return [
        m('div', { class: 'container' }, [
          m(Header),
          m(MasteryList)
        ])
      ]
    }
  }
}

export default RootLayout