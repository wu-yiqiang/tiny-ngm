import {useState} from 'react';
import {Greet} from "../wailsjs/go/main/App";
import { Button } from '@arco-design/web-react'
import './assets/styles/app.scss'
import Panel from './pages/layout/panel'
import Topbar from './pages/layout/topbar'
import Contents from './pages/layout/contents'
function App() {
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

export default App
