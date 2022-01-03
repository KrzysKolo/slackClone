import React from 'react';
import { HeaderContainer, HeaderLeft, HeaderAvatar, HeaderSearch, HeaderRight } from './style';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';


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
        <input placeholder='Search...' />
      </HeaderSearch>
      {/*  Header Right */}
      <HeaderRight>

      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;
