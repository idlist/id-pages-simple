import m from 'mithril'
import './skill-wishlist.sass'
import SectionTitle from './section-title'

interface WishlistItem {
  name: string
  icon?: string
  link?: string
}

const WishlistContent: WishlistItem[] = [
  {
    name: 'rust',
    link: 'https://www.rust-lang.org/'
  },
  {
    name: 'dart',
    link: 'https://dart.dev/'
  }
]

const SkillWishlist: m.ClosureComponent = () => {
  return {
    view() {
      return [
        m(SectionTitle, { title: 'Skill Wishlist' }),
        m('div', { class: 'skill-wishlist' }, [

        ])
      ]
    }
  }
}

export default SkillWishlist