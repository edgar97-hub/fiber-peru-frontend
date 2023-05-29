//import { menuItems } from '../../../menuItems'
import { dataItems } from './dataItems'

import MenuItems from './MenuItems'
import './navbar.scss'


const Navbar = ({ click, handleclick }) => {
  return (
    <nav>
      <ul
        className="menus"
        onClick={handleclick}
        style={{
          left: click ? 0 : '-100%',
        }}
      >
        {dataItems.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        })}{' '}
      </ul>
    </nav>
  )
}

export default Navbar
