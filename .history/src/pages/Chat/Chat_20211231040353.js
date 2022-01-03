import React from 'react';
import { ChatContainer, Header, HeaderLeft, HeaderRight } from './style';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Chat = ( ) => {
  return (
    <ChatContainer>
      <Header>
        <Header>
          <HeaderLeft>
            <h4><strong># Room-name</strong></h4>
          </HeaderLeft>
          <HeaderRight>
            <p>

            </p>
          </HeaderRight>
        </Header>
      </Header>

    </ChatContainer>
  )
}

export default Chat;
