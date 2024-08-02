import { useState } from 'react'
import { Button } from '@arco-design/web-react'
import '../../assets/styles/topbar.scss'
import { IconList } from '@arco-design/web-react/icon';
function Topbar(props: any) {
  const {handleFullMenu} = props
  return (
    <section className='Topbar'>
      <div className="left-box"> 
        <div className="menu">
          <IconList onClick={handleFullMenu}/>
        </div>
      </div>
      <div className="right-box">
        assad1
      </div>
    </section>
  )
}

export default Topbar;
