import React from 'react'
import '../css/main.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'


const Main = () => {
  return (
    <div className="main">
    <Header/>
    <div className="main-content">
        <Sidebar/>
        <Feed/>
        <Widget/>
    </div>
  </div>
  )
}

export default Main
