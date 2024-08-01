import {useState} from 'react';
import {Greet} from "../wailsjs/go/main/App";
import { Button } from '@arco-design/web-react'
import Panel from './pages/layout/panel'
function App() {
    return (
      <div id="App">
        <Panel />
      </div>
    )
}

export default App
