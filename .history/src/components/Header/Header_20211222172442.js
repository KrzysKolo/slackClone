import React from 'react';
import { HeaderContainer, HeaderLeft, HeaderAvatar, HeaderSearch } from './style';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search ';

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
      <HeaderSearch>
        <SearchIcon />
      </HeaderSearch>
      {/*  Header Right */}
    </HeaderContainer>
  )
}

export default Header;
