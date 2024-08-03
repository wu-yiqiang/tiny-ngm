import { useState } from 'react'
import { Button } from '@arco-design/web-react'
import { IconPlus, IconSettings } from '@arco-design/web-react/icon'
import '../../assets/styles/panel.scss'
function Panel(props: any) {
  const { fullMenu } = props
  const menuLists = [
    { icon: <IconPlus />, title: 'Dashbord' },
    { icon: <IconPlus />, title: 'Dashbord' },
    { icon: <IconPlus />, title: 'Dashbord' },
    { icon: <IconPlus />, title: 'Dashbord' },
    { icon: <IconPlus />, title: 'Dashbord' },
    { icon: <IconPlus />, title: 'Dashbord' },
    { icon: <IconPlus />, title: 'Dashbord' },
    { icon: <IconPlus />, title: 'Dashbord' }
  ]
  return (
    <section className="Panel">
      {menuLists.map((item) => {
        if (!fullMenu) return <div className="item"><div className="item-icon">{item.icon}</div> </div>
        return (
          <div className="item">
            <div className="item-icon">{item.icon}</div>
            <div className="item-title">{item.title}</div>
          </div>
        )
      })}
    </section>
  )
}

export default Panel;
