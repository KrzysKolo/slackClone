import React from 'react';
import { HeaderContainer, HeaderLeft, HeaderAvatar } from './style'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  return (
    <HeaderContainer>
      {/*  Header Left */}
      <HeaderLeft>
        <HeaderAvatar

         />
         <AccessTimeIcon />
      </HeaderLeft>
      {/*  Header Search */}
      {/*  Header Right */}
    </HeaderContainer>
  )
}

export default Header;
