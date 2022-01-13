import m from 'mithril'
import './mastery-tree.sass'
import svg_star from '@assets/skill-bar/star.svg'
import svg_heart from '@assets/skill-bar/heart.svg'

interface TreeItem {
  name: string
  level: number
  icon?: string
  new?: boolean
  fav?: boolean
  link?: string
}

interface TreeAspect {
  title: string
  color?: string,
  level?: number
  new?: boolean
  contents: TreeItem[]
}

const TreeList: TreeAspect[] = [
  {
    title: 'Language',
    contents: [
      {
        name: 'Chinese (native)',
        level: 5
      },
      {
        name: 'English',
        level: 4
      },
      {
        name: 'Japanese',
        level: 3
      }
    ]
  },
  {
    title: 'JS / Node.js',
    level: 4.5,
    contents: [
      {
        name: 'Mithril.js',
        level: 4,
        fav: true,
        link: 'https://mithril.js.org/'
      },
      {
        name: 'React',
        level: 3,
        link: 'https://reactjs.org/'
      },
      {
        name: 'Vue.js',
        level: 1,
        link: 'https://v3.vuejs.org/'
      },
      {
        name: 'Vite',
        level: 3,
        link: 'https://vitejs.dev/'
      },
      {
        name: 'Koishi.js',
        level: 4.5,
        fav: true,
        link: 'https://koishi.js.org/'
      }
    ]
  },
  {
    title: 'C#',
    level: 1,
    new: true,
    contents: [
      {
        name: 'Godot',
        level: 0.8,
        new: true,
        fav: true,
        link: 'https://godotengine.org/'
      }
    ]
  },
  {
    title: 'Graphics',
    level: 3,
    contents: [
      {
        name: 'Digital Art',
        level: 1,
        fav: true
      },
      {
        name: 'UI',
        level: 3,
        fav: true
      },
      {
        name: 'Vector Graphics',
        level: 2
      }
    ]
  },
  {
    title: 'Desktop Music',
    level: 2,
    contents: [
      {
        name: 'Ableton Live',
        level: 2,
        link: 'https://www.ableton.com/en/live/'
      }
    ]
  }
]

interface SkillLevelAttrs {
  level: number
  fav?: boolean
  width?: number
}

const SkillBar: m.ClosureComponent<SkillLevelAttrs> = () => {
  return {
    view({ attrs }) {
      const width = attrs.width ?? 160
      const height = 24
      const margin = 12
      const length = width - 2 * margin

      const styleLine = { stroke: '#ccc', strokeWidth: 2 }
      const stylePoint = { fill: '#ccc' }

      return [
        m('svg', {
          width: width, height: height,
          class: 'skill-bar'
        }, [
          m('line', {
            x1: margin, y1: margin,
            x2: width - margin, y2: margin,
            style: styleLine
          }),
          ...[0, 1].map(i => {
            const lx = Math.round(margin + length * i)

            return [
              m('line', {
                x1: lx, y1: 6,
                x2: lx, y2: 18,
                style: styleLine
              })
            ]
          }),
          ...[1, 2, 3, 4].map(i => {
            const size = 5
            const px = Math.round(margin + length / 5 * i)
            const py = height / 2

            return [
              m('rect', {
                x: px - size / 2,
                y: py - size / 2,
                width: size,
                height: size,
                style: stylePoint,
                transform: `rotate(45, ${px}, ${py})`
              })
            ]
          }),
          m('image', {
            x: margin + length / 5 * attrs.level - 8, y: 4,
            width: 16, height: 16,
            href: attrs.fav ? svg_heart : svg_star
          })
        ])
      ]
    }
  }
}

type MasteryItemNameAttrs = TreeItem

const MasteryItemName: m.ClosureComponent<MasteryItemNameAttrs> = () => {
  return {
    view({ attrs }) {
      return [
        m('div', attrs.name),
        attrs.new && [
          m('div', { class: 'item-new' }, 'NEW')
        ]
      ]
    }
  }
}

type MasteryItemAttrs = TreeItem

const MasteryItem: m.ClosureComponent<MasteryItemAttrs> = () => {
  return {
    view({ attrs }) {
      return [
        m('div', { class: 'item' }, [
          attrs.link
            ? [
              m('a', {
                class: 'item-link',
                href: attrs.link,
                target: '_blank',
                noreferer: true,
                noopener: true
              }, [
                m(MasteryItemName, { ...attrs })
              ])
            ]
            : [
              m('div', { class: 'item-info' }, [
                m(MasteryItemName, { ...attrs })
              ])
            ]
          ,
          m(SkillBar, {
            level: attrs.level,
            fav: attrs.fav
          })
        ])
      ]
    }
  }
}

type MasteryTreeAspectAttrs = TreeAspect

const MasteryTreeAspect: m.ClosureComponent<MasteryTreeAspectAttrs> = () => {
  return {
    view({ attrs }) {
      return [
        m('div', { class: 'aspect' }, [
          m('div', {
            class: 'aspect-container',
            style: { backgroundColor: attrs.color }
          }, [
            m('div', { class: 'aspect-info' }, [
              m('div', { class: 'aspect-title' }, attrs.title),
              attrs.new && [
                m('div', { class: 'aspect-new' }, 'NEW')
              ]
            ]),
            attrs.level && [
              m(SkillBar, { level: attrs.level })
            ]
          ]),
          m('div', { class: 'aspect-content' }, [
            ...attrs.contents.map(item => m(MasteryItem, { ...item }))
          ])
        ])
      ]
    }
  }
}

const MasteryTree: m.ClosureComponent = () => {
  return {
    view() {
      return [
        m('div', { class: 'mastery-tree' }, [
          ...TreeList.map(aspect => m(MasteryTreeAspect, { ...aspect }))
        ])
      ]
    }
  }
}

export default MasteryTree