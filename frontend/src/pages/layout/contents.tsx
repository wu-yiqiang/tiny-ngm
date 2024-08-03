import { Outlet } from 'react-router-dom'
import '../../assets/styles/contents.scss'
function Contents(props: any) {
  return <section className="Contents">
    <Outlet />
  </section>
}

export default Contents
