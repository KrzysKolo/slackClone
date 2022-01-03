import React from 'react';
import { ChatContainer, Header, HeaderLeft, HeaderRight } from './style';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


const Chat = ( ) => {
  return (
    <ChatContainer>
      <Header>
        <Header>
          <HeaderLeft>
            <h4><strong># Room-name</strong></h4>
            <StarBorderIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlinedIcon />
            </p>
          </HeaderRight>
        </Header>
      </Header>

    </ChatContainer>
  )
}

export default Chat;
