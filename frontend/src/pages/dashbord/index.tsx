import { useState } from 'react'
import '../../assets/styles/dashbord.scss'
import IconSvg from '../../components/IconSvg'
import { IconPoweroff, IconSync, IconRecordStop } from '@arco-design/web-react/icon'
function Dashbord() {
  const [status, setStatus] = useState('stop')
  const [memory, setMemory] = useState('0MB')
  const [version, setVersion] = useState('0.0.0')
  const handleReload = () => {

  }
  const handleStop = () => { }
  const handleStart = () => {}
  return (
    <div className="Dashbord">
      <div className="topbox">
        <div className="title">
          状态：{status == 'running' ? '运行中' : '已停止'}
          <div className="btns">
            {status == 'stop' ? <IconPoweroff onClick={handleStart} /> : null}
            {status == 'running' ? (
              <>
                <IconRecordStop onClick={handleStop} />
                <IconSync onClick={handleReload} />
              </>
            ) : null}
          </div>
        </div>
        <div className="title">版本：{version}</div>
        <div className="menmntroy">内存消耗: {memory}</div>
        <div className="menmntroy">CPU消耗: {memory}</div>
        <div className="menmntroy">磁盘消耗: {memory}</div>
      </div>
    </div>
  )
}

export default Dashbord
