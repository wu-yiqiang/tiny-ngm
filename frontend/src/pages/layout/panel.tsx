import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@arco-design/web-react'
import { allRouters } from '../../router/index'
import { IconPlus, IconDragDot, IconDashboard, IconDesktop } from '@arco-design/web-react/icon'
import '../../assets/styles/panel.scss'
function Panel(props: any) {
  const { fullMenu } = props
  const navigate = useNavigate()
  const navigateTo = (path: string) => {
    navigate(path)
  }
  return (
    <section className="Panel">
      {allRouters.map((item) => {
        if (!fullMenu)
          return (
            <div className="item" onClick={() => navigateTo(item.path)}>
              <div className="item-icon">{item.icon}</div>
            </div>
          )
        return (
          <div className="item" onClick={() => navigateTo(item.path)}>
            <div className="item-icon">{item.icon}</div>
            <div className="item-title">{item.label}</div>
          </div>
        )
      })}
    </section>
  )
}

export default Panel;
