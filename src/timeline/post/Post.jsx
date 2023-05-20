import React, { useState } from 'react'
import { MdMoreHoriz ,MdFavoriteBorder,MdBookmarkBorder,MdChatBubbleOutline,MdFavorite,MdBookmark} from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import "./Post.css"
const Post = ({like,photo,date,username,img}) => {
    const [liked,setLiked] = useState(false);
    const [bookMark,setBookMark] = useState(false);
    const [likeCount,setLikeCount] = useState(like)
    const handleLike = ()=>{
       
        setLiked(!liked)
        setLikeCount(liked?likeCount-1:likeCount+1)
    }
    const handleBookMark = ()=>{
        setBookMark(!bookMark)
    }
  return (
    <>
    <div className='post'>
        <div className="post_header">
            <div className="post_header_left">
                <img src={img} className='user_img' alt="user_img" />
                {/* <RxAvatar className='avatar'>R</RxAvatar> */}
                <div className='username'>{username}</div> . <span>{date}</span>
            </div>
            <div className="post_header_right">
                <MdMoreHoriz className='post_icon'/>
            </div>
        </div>
        <div className="post_image">
            <img src={photo} alt="img" />
        </div>
        <div className="post_footer">
            <div className="footer_icons">
                <div className="footer_main_icons">
                    {liked?<MdFavorite onClick={handleLike} className='post_icon'/>:<MdFavoriteBorder onClick={handleLike} className='post_icon'/>}
                    <MdChatBubbleOutline className='post_icon'/>
                    <FaTelegramPlane className='post_icon'/>
                </div>
                <div className="footer_save_icon">
                    {bookMark?<MdBookmark onClick={handleBookMark} className='post_icon'/>:<MdBookmarkBorder onClick={handleBookMark} className='post_icon'/>}
                </div>
            </div>
            <span>Liked by {likeCount} peoples</span>
        </div>
    </div>

    </>
    

  )
}

export default Post