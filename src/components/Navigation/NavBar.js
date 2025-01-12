import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./NavBar.css"


export default function NavBar() {
  return (
    <div className="navBarBox">

    <div className="navBarLeft">
        <span className='logo'>facebook</span>
    </div>

    <div className="navBarCenter">
        <div className='searchBarBox'>
            <SearchIcon className='searchIcon'/>
            <input type="text" placeholder='search for your friend' className='searchInput'></input>

        </div>
    </div>

    <div className="navBarRight">
        <div className='navbarLinks'>
            <span className='navBarlink'>HomePage</span>
            <span className='navBarLink'>profile</span>
        </div>
        <div className='navBarIcons'>
            <div className="navBarIcon">
                <PersonIcon/>
                <span className='iconTag'>3</span>
            </div>
            <div className="navBarIcon">
                <MessageIcon/>
                <span className='iconTag'>5</span>
            </div>
            <div className="navBarIcon">
                <SettingsIcon/>
                <span className='iconTag'>2</span>
            </div>
        </div>
        <div className='Pic'>
            <img src="/images/img1.jpg" className='profilePicImg'></img>

        </div>
    </div>
    </div>
  )
}
