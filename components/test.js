import m from 'mithril'
import idlist from './assets/idlist.png'

const Test = () => {
  return {
    view() {
      return m('img', { src: idlist })
    }
  }
}

export default Test