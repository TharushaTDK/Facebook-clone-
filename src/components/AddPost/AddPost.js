import React from 'react'
import "./AddPost.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className='AddPost'>
        <div className='AddPostContainer'>
            <div className='AddPostTop'>
                <img src="/images/img1.jpg" className='addPostPic'></img>
                <input placeholder="What's in your mind" type='text' className='AddPostInput'></input>
            </div>
            <hr className='addPostHr'></hr>
            <div className='AddPostBottom'>
                <div className='AddPostOptions'>
                    <div className='AddPostOption'>
                      <InsertPhotoIcon htmlColor='orange' className='addPhoto'/>
                      <span className='addPostOptionText'>Add photo/video</span>
                    </div>
                    <div className='AddPostOption'>
                      <AddLocationAltIcon htmlColor='red' className='addPhoto'/>
                      <span className='addPostOptionText'>Add Location</span>
                    </div>
                    <div className='AddPostOption'>
                      <LocalOfferIcon htmlColor='blue' className='addPhoto'/>
                      <span className='addPostOptionText'>Add Tag</span>
                    </div>
                    <div className='AddPostOption'>
                      <LiveTvIcon htmlColor='tomato' className='addPhoto'/>
                      <span className='addPostOptionText'>Go Live</span>
                    </div>
                </div>
                <button className='PostButton'>Post</button>

            </div>
        </div>
    </div>
  )
}
