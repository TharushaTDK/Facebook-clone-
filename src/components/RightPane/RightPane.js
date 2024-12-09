import React from 'react'
import "./RightPane.css"

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className='rightPaneContainer'>
        <div className='addContainer'>
          <span className='sponsored'>Sponsored</span>
          <img src='./images/add.jpg' alt='' className='addImage'></img>
          <span className='adText'>Come on! you have a cock! chill with cocacola! the new Cocacola will refresh you. Be real you with Cocacola</span>
        </div>
      </div>
      <div className='birthdayContainer'>
        <img src="/images/birthday.jpg" alt='' className='birthdayImage'></img>
        <span className='birthdayText'><b>Tharusha theekshana</b> and <b>2 others</b> having birthday today</span>
      </div>
      <div className='friendlist'>
        <li className='onlineFriend'>
          <div className='onlineFriendImgContainer'>
           <img className='onlineFriendImg'alt='' src='/images/friendlist.jpg'></img>
           <span className='OnlineStatus'></span>
          </div>
          <span className='OnlineFriendName'>Friend 1</span>
        </li>
        <li className='onlineFriend'>
          <div className='onlineFriendImgContainer'>
           <img className='onlineFriendImg'alt='' src='/images/friendlist.jpg'></img>
           <span className='OnlineStatus'></span>
          </div>
          <span className='OnlineFriendName'>Friend 2</span>
        </li>
        <li className='onlineFriend'>
          <div className='onlineFriendImgContainer'>
           <img className='onlineFriendImg'alt='' src='/images/friendlist.jpg'></img>
           <span className='OnlineStatus'></span>
          </div>
          <span className='OnlineFriendName'>Friend 3</span>
        </li>
        <li className='onlineFriend'>
          <div className='onlineFriendImgContainer'>
           <img className='onlineFriendImg'alt='' src='/images/friendlist.jpg'></img>
           <span className='OnlineStatus'></span>
          </div>
          <span className='OnlineFriendName'>Friend 4</span>
        </li>
        <li className='onlineFriend'>
          <div className='onlineFriendImgContainer'>
           <img className='onlineFriendImg'alt='' src='/images/friendlist.jpg'></img>
           <span className='OnlineStatus'></span>
          </div>
          <span className='OnlineFriendName'>Friend 5</span>
        </li>
        <li className='onlineFriend'>
          <div className='onlineFriendImgContainer'>
           <img className='onlineFriendImg'alt='' src='/images/friendlist.jpg'></img>
           <span className='OnlineStatus'></span>
          </div>
          <span className='OnlineFriendName'>Friend 6</span>
        </li>
      </div>
    </div>
  )
}
