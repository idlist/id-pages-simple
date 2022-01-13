import m from 'mithril'
import './header.sass'
import image_idlist from '@assets/idlist.png'
import icon_email from '@assets/icons/email.svg'
import icon_blog from '@assets/icons/blog.svg'
import icon_twitter from '@assets/icons/twitter.svg'
import icon_github from '@assets/icons/github.svg'
import icon_soundcloud from '@assets/icons/soundcloud.svg'

interface ContactListItemAttrs {
  name: string
  icon: string
  id: string
  link: string
  color: string
  external?: boolean
}

const ContactListItem: m.ClosureComponent<ContactListItemAttrs> = () => {
  return {
    view({ attrs }) {
      return [
        m('a', {
          class: 'contact-list-item',
          href: attrs.link,
          target: 'external' in attrs ? (attrs.external ? '_blank' : '_self') : '_blank',
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
          m('div', {
            class: 'item-name',
            style: { backgroundColor: attrs.color }
          }, attrs.name),
          m('div', { class: 'item-id' }, attrs.id)
        ])
      ]
    }
  }
}

const ContactListContents: ContactListItemAttrs[] = [
  {
    name: 'Email',
    icon: icon_email,
    id: 'me@idl.ist',
    link: 'mailto:me@idl.ist',
    color: '#3A8FB7',
    external: false
  },
  {
    name: 'Blog',
    icon: icon_blog,
    color: '#00887d',
    id: 'Reinventing the Wheel',
    link: 'https://blog.idl.ist/'
  }
]

const SocialMediaContents: ContactListItemAttrs[] = [
  {
    name: 'Twitter',
    icon: icon_twitter,
    id: '@i_dlist',
    color: '#58B2DC',
    link: 'https://twitter.com/i_dlist'
  },
  {
    name: 'GitHub',
    icon: icon_github,
    color: '#66327C',
    id: 'i\'DLisT',
    link: 'https://github.com/idlist'
  },
  {
    name: 'SoundCloud',
    icon: icon_soundcloud,
    id: 'i\'DLisT',
    color: '#ED784A',
    link: 'https://soundcloud.com/idlist'
  }
]

const Header: m.ClosureComponent = () => {
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
          m('div', { class: 'contact-list' }, [
            ...ContactListContents.map(item => [
              m(ContactListItem, { ...item })
            ]),
            m('hr', { class: 'contact-list-divider' }),
            ...SocialMediaContents.map(item => [
              m(ContactListItem, { ...item })
            ])
          ])
        ])
      ]
    }
  }
}

export default Header