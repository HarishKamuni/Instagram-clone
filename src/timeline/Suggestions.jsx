import React from 'react'
import "./Suggestions.css"
const Suggestions = ({img,username}) => {
  return (
      
      <div className="suggestions_usernames">
        <div className="suggestion_username">
          <div className="usename_left">
            {/* <span className='avatar'>
              <RxAvatar/>
            </span> */}
            <img src={img} alt="" />
            <div className="username_info">
              <span className="username">{username}</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className='follow_button'>follow</button>
        </div>
      </div>

  )
}

export default Suggestions