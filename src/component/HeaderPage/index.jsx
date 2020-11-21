import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './index.less'
const headers = [
  {
    name: '首页',
    path: '/',
    icon: ''
  },
  {
    name: '项目',
    path: '/recommend',
    icon: ''
  },
  {
    name: '博客',
    path: '/blog',
    icon: ''
  },
  {
    name: '关于我',
    path: '/me',
    icon: ''
  },
]
const HeaderPage = () => {
  return (
    <div className="header">
      <Router>
        {
          headers.map(item => <Link key={item.path} to={item.path}>{ item.name }</Link> )
        }
      </Router>
    </div>
  )
}

export default HeaderPage
