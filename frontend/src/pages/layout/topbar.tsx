import { useState } from 'react'
import { Button } from '@arco-design/web-react'
import '../../assets/styles/topbar.scss'
import { IconSun, IconSettings, IconMoon } from '@arco-design/web-react/icon'
import { IconList } from '@arco-design/web-react/icon';
function Topbar(props: any) {
  const {handleFullMenu} = props
  return (
    <section className="Topbar">
      <div className="left-box">
        <div className="menu">
          <IconList onClick={handleFullMenu} />
        </div>
      </div>
      <div className="right-box">
        <div className="item-box">
          <IconSun />
          {/* <IconMoon /> */}
        </div>
        <div className="item-box">
          <IconSettings />
        </div>
      </div>
    </section>
  )
}

export default Topbar;
