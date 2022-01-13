import m from 'mithril'
import './footer'
import SectionTitle from './section-title'

const Footer: m.ClosureComponent = () => {
  return {
    view() {
      return [
        m(SectionTitle, { title: 'About' }),
        m('footer', { class: 'footer' }, [

        ])
      ]
    }
  }
}

export default Footer