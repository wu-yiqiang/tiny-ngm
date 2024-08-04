import '../../assets/styles/logs.scss'
import { Tabs, Typography } from '@arco-design/web-react'
const TabPane = Tabs.TabPane
function Logs() {
  return (
    <div className="Logs">
      <Tabs defaultActiveTab="1">
        <TabPane key="1" title="访问日志">
          <Typography.Paragraph >Content of Tab Panel 1</Typography.Paragraph>
        </TabPane>
        <TabPane key="2" title="错误日志">
          <Typography.Paragraph>Content of Tab Panel 2</Typography.Paragraph>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Logs
