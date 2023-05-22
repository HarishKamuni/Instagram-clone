import React from 'react'
import "./TimeLine.css"
import Suggestions from './Suggestions'
import Post from './post/Post'
import PostData from "../PostData"
const TimeLine = () => {
  console.log(PostData)
  return (
      <div className='container timeline'>
        <div className="timeline_left">
            <div className="timeline_post">
              {PostData.map(items=><Post key={items.id} date={items.date} like={items.like} photo={items.photo} username={items.username} image={items.image}/>)}
            </div>
        </div>
        <div className="timeline_right">
          <div className='suggestions'>
            <div className="suggestion_title">suggestions for you</div>
          
              {PostData.map(items=><Suggestions key={items.id} date={items.date} like={items.like} photo={items.photo} username={items.username} img={items.image}/>)}
          </div>
        </div>  
      </div>
  )
}

export default TimeLine