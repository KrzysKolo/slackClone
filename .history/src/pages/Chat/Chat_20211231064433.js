import React from 'react';
import { ChatContainer, Header, HeaderLeft, HeaderRight, ChatMessages } from './style';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


const Chat = ( ) => {
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4><strong># Room-name</strong></h4>
            <StarBorderIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
  ``          <InfoOutlinedIcon /> Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages>
          {/* List out the message */}
        </ChatMessages>
        <ChatInput />
      </>
    </ChatContainer>
  )
}

export default Chat;
