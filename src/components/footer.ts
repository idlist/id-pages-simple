import m from 'mithril'
import './footer.sass'
import SectionTitle from './section-title'

const Footer: m.ClosureComponent = () => {
  return {
    view() {
      return [
        m(SectionTitle, { title: 'About' }),
        m('footer', { class: 'footer' }, [
          m('div', 'sample text')
        ])
      ]
    }
  }
}

export default Footer