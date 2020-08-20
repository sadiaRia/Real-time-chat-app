import React from 'react';
import './index.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* avatar for logged in user
          time icon */}
        <Avatar className="header__avater"
        // alt={user?.displayName}
        // src={user?.AvataphotoURL} 
        />

        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* search icon */}
        <SearchIcon />
        {/* input */}
        <input placeholder="Search workspace" />
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header
