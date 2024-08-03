import { useState } from 'react'
import { Button } from '@arco-design/web-react'
import '../../assets/styles/index.scss'
import Panel from './panel'
import Topbar from './topbar'
import Contents from './contents'
function Layout() {
  const [fullMenu, setFullMenu] = useState(false)
  const handleFullMenu = () => {
    setFullMenu(!fullMenu)
  }
  return (
    <>
      <Topbar handleFullMenu={handleFullMenu} />
      <div className="main">
        <Panel fullMenu={fullMenu} />
        <Contents />
      </div>
    </>
  )
}

export default Layout
