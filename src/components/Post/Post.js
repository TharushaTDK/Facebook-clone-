import React from 'react';
import './Post.css';

export default function Post() {
  return (
    <div className="post">
      <div className="container">
        <div className="PostTop">
          <img src="/images/img1.jpg" alt="Profile" className="PostImage" />
           <div className='postTopLeft'>
           <span className="postUserName">Tharusha Theekshana</span>
           <span className="PostTime">5 minutes ago</span>
          </div>
        </div>
        <div className="PostCenter">
          <div className="postCaption">
            Hello, I am Batman... Do you understand? I'm Batman!
          </div>
          <img src="/images/img1.jpg" alt="Posted content" className="postedImage" />
        </div>
        <div className="PostBottom">
          <div className="postBottomleft">
            <img src="/images/likeReact.png" alt="Like" className="reactionPic" />
            <img src="/images/love.jpg" alt="Love" className="reactionPic" />
            <img src="/images/care.jpg" alt="Care" className="reactionPic" />
            <span className="likecount">Batman +1.4k</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount">1k comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
