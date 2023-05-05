import React from 'react'
import "./SideNav.css"
import instagram from "../images/instagram1.webp"
import { AiFillHome,AiOutlineSearch,AiOutlineWechat} from "react-icons/ai";
import { MdExplore,MdSlideshow,MdFavoriteBorder} from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
const SideNav = () => {
    // const insta = "https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png";
  return (
    <div className='container sidenav'>
        <img className='sidenav_logo' src={instagram} alt="instragram" />
        
        <div className="sidenav_buttons">
            <button className="sidenav_button">
                <AiFillHome className='icons'/>
                <span>Home</span>
            </button>

            <button className="sidenav_button">
                <AiOutlineSearch className='icons'/>
                <span>Search</span>
            </button>

            <button className="sidenav_button">
                <MdExplore className='icons'/>
                <span>Explore</span>
            </button>

            <button className="sidenav_button">
                <MdSlideshow className='icons'/>
                <span>Reels</span>
            </button>

            <button className="sidenav_button">
                <AiOutlineWechat className='icons'/>
                <span>Massages</span>
            </button>

            <button className="sidenav_button">
                <MdFavoriteBorder className='icons'/>
                <span>Notificattions</span>
            </button>

            <button className="sidenav_button">
                <IoIosAddCircle className='icons'/>
                <span>Create</span>
            </button>
        </div>
        <div className="sidenav_more">
        <button className="sidenav_button">
                <FiMenu className='icons'/>
                <span>More</span>
            </button>
        </div>
    </div>
    
  )
}

export default SideNav