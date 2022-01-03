import React from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from './../../features/appSlice';
import { ChatContainer, Header, HeaderLeft, HeaderRight, ChatMessages, ChatInput } from './style';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


const Chat = ( ) => {
  const ChatInput = useSelector(selectRoomId);
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
        <ChatInput
          //ChannelName
          channelId={roomId}
         />
      </>
    </ChatContainer>
  )
}

export default Chat;
