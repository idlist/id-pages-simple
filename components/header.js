import m from 'mithril'
import './header.sass'
import image_idlist from './assets/idlist.png'
import icon_twitter from './assets/icons/twitter.svg'

const ContactListItem = () => {
  return {
    view({ attrs }) {
      return [
        m('a', {
          class: 'contact-list-item',
          href: attrs.link,
          target: '_blank',
          noreferer: true,
          noopener: true
        }, [
          m('div', { class: 'item-icon' }, [
            m('img', {
              class: 'item-icon-image',
              src: attrs.icon,
              alt: attrs.name
            })
          ]),
          m('div', { class: 'item-name' }, attrs.name),
          m('div', { class: 'item-dash' }, '-'),
          m('div', { class: 'item-id' }, attrs.id)
        ])
      ]
    }
  }
}

const ContactListContents = [
  {
    name: 'Twitter',
    icon: icon_twitter,
    id: '@i_dlist',
    link: 'https://twitter.com/i_dlist'
  }
]

const Header = () => {
  return {
    view() {
      return [
        m('header', { class: 'header' }, [
          m('div', { class: 'header-icon' }, [
            m('img', {
              class: 'header-icon-image',
              src: image_idlist,
              alt: 'idlist-icon'
            })
          ]),
          m('div', { class: 'contact-list' }, ContactListContents.map(item => [
            m(ContactListItem, { ...item })
          ]))
        ])
      ]
    }
  }
}

export default Header