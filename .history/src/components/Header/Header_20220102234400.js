import React from 'react';
import { HeaderContainer, HeaderLeft, HeaderAvatar, HeaderSearch, HeaderRight } from './style';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase/config';


const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
      {/*  Header Left */}
      <HeaderLeft>
        <HeaderAvatar onClick={() => auth.signOut()} alt={user?.displayName} src={user?.photoURL} />
         <AccessTimeIcon />
      </HeaderLeft>
      {/*  Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search...' />
      </HeaderSearch>
      {/*  Header Right */}
      <HeaderRight>
        <HelpIcon />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;
