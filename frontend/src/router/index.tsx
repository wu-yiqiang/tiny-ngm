import { createBrowserRouter, Navigate, redirect, RouteObject } from 'react-router-dom'
import Layout from '../pages/layout/index'
import Dashbord from '../pages/dashbord'
import BaseParams from '../pages/base-params/index'
import Proxy from '../pages/proxy/index'
import LoadBalance from '../pages/load-balance'
import Statics from '../pages/statics'
import Certificate from '../pages/certificate'
import Logs from '../pages/logs'
import { IconDragDot, IconDashboard, IconDesktop } from '@arco-design/web-react/icon'
export const allRouters: Array<any> = [
  {
    path: '/',
    key: 'dashbord',
    label: '仪表盘',
    icon: <IconDashboard />,
    parentkey: '',
    element: <Dashbord />
  },
  {
    path: '/base-params',
    key: 'base-params',
    label: '配置管理',
    icon: <IconDragDot />,
    parentkey: '',
    element: <BaseParams />
  },
  {
    path: '/proxy',
    key: 'proxy',
    label: '反向代理',
    icon: <IconDesktop />,
    parentkey: '',
    element: <Proxy />
  },
  {
    path: '/load-balance',
    key: 'load-balance',
    label: '负载均衡',
    icon: <IconDesktop />,
    parentkey: '',
    element: <LoadBalance />
  },
  {
    path: '/statics',
    key: 'statics',
    label: '静态文件',
    icon: <IconDesktop />,
    parentkey: '',
    element: <Statics />
  },
  {
    path: '/certificate',
    key: 'certificate',
    label: '证书管理',
    icon: <IconDesktop />,
    parentkey: '',
    element: <Certificate />
  },
  {
    path: '/logs',
    key: 'logs',
    label: '日志解析',
    icon: <IconDesktop />,
    parentkey: '',
    element: <Logs />
  }
]

const routerConfig: RouteObject[] = [
  {
    path: '/',
    errorElement: <div>make error</div>,
    element: <Layout />,
    children: allRouters
  }
]



export const routes = createBrowserRouter([...routerConfig])
