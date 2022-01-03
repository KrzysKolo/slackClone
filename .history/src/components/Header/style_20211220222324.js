import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

export const HeaderContainer = styled.div`
  display: flex;
`;

export const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
`;
