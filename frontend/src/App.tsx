import {useState} from 'react';
import {Greet} from "../wailsjs/go/main/App";
import { Button } from '@arco-design/web-react'
import Panel from './pages/layout/panel'
import Topbar from './pages/layout/topbar'
function App() {
  const [fullMenu, setFullMenu] = useState(false)
  const handleFullMenu = () => {
    setFullMenu(!fullMenu)
  }
    return (
      <div id="App">
        <Topbar handleFullMenu={ handleFullMenu } />
        <Panel fullMenu={fullMenu} />
      </div>
    )
}

export default App
