import m from 'mithril'
import './mastery-tree.sass'

interface TreeItem {
  item: string
  level: number
  icon?: string
  new?: boolean
  fav?: boolean
  link?: string
}

interface TreeNode {
  title: string
  color?: string,
  level?: number
  new?: boolean
  contents: TreeItem[]
}

const TreeList: TreeNode[] = [
  {
    title: 'Language',
    contents: [
      {
        item: 'Chinese (native language)',
        level: 5
      },
      {
        item: 'English',
        level: 4
      },
      {
        item: 'Japanese',
        level: 3
      }
    ]
  },
  {
    title: 'JS / Node.js',
    level: 4.5,
    contents: [
      {
        item: 'Mithril.js',
        level: 4.5,
        fav: true,
        link: 'https://mithril.js.org/'
      },
      {
        item: 'React',
        level: 3,
        link: 'https://reactjs.org/'
      },
      {
        item: 'Vue.js',
        level: 1,
        link: 'https://v3.vuejs.org/'
      },
      {
        item: 'Vite',
        level: 3,
        link: 'https://vitejs.dev/'
      },
      {
        item: 'Koishi.js',
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
        item: 'Godot',
        level: 1,
        new: true,
        fav: true,
        link: 'https://godotengine.org/'
      }
    ]
  },
  {
    title: 'Drawing & Graphics',
    level: 3,
    contents: [
      {
        item: 'Digital Art',
        level: 1,
        fav: true
      },
      {
        item: 'UI',
        level: 3,
        fav: true
      },
      {
        item: 'Vector Graphics',
        level: 2
      }
    ]
  },
  {
    title: 'Desktop Music',
    level: 2,
    contents: [
      {
        item: 'Ableton Live',
        level: 2,
        link: 'https://www.ableton.com/en/live/'
      }
    ]
  }
]

const MasteryTree: m.ClosureComponent = () => {
  return {
    view() {
      return [
        m('div', { class: 'mastery-list' })
      ]
    }
  }
}

export default MasteryTree