import React from 'react'
import "./HomePage.css"
import SideNav from './navigation/SideNav'
import TimeLine from './timeline/TimeLine'

const HomePage = () => {
  return (
    <div className='homepage'>
        <div className="homepage_nav">
            <SideNav/>
        </div>
        <div className="homepage_timeline">
            <TimeLine/>
        </div>
    </div>
  )
}

export default HomePage