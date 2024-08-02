import { useState } from 'react'
import { Button } from '@arco-design/web-react'
import { IconPlus, IconDelete } from '@arco-design/web-react/icon';
import '../../assets/styles/panel.scss'
function Panel(props: any) {
  const { fullMenu } = props
  const menuLists = [{ icon: <IconPlus />, title: "Dashbord" }, { icon: <IconPlus />, title: "Dashbord" }, { icon: <IconPlus />, title: "Dashbord" },
    {icon: <IconPlus />, title: "Dashbord"}
  ]
  return (
    <section className='Panel'>
      <div className="left-box">
        {menuLists.map(item => {
          return (
            <div className="item-icon">{ item.icon }</div>
          )
        })}
      </div>
      <div className="right-box">
        {fullMenu ? menuLists.map(item => {
          return (
            <div className="item-title">{item.title}</div>
          )
        }) : null}
      </div>
    </section>
  )
}

export default Panel;
