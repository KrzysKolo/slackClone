import React from 'react';
import { HeaderContainer, HeaderLeft, HeaderAvatar } from './style'
import { Avatar } from '@material-ui/core';

const Header = () => {
  return (
    <HeaderContainer>
      {/*  Header Left */}
      <HeaderLeft>
        <Avatar />
      </HeaderLeft>
      {/*  Header Search */}
      {/*  Header Right */}
    </HeaderContainer>
  )
}

export default Header;
