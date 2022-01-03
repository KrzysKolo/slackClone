import React from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from './../../features/appSlice';
import { ChatContainer, Header, HeaderLeft, HeaderRight, ChatMessages } from './style';
import { ChatInput } from '../../components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import db from '../../firebase/config';

const Chat = ( ) => {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );
  const [roomMessages] = useCollection(
    roomId &&
    db
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  );
  console.log(roomDetails?.data());
  console.log(roomDetails)

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
          ChannelName={roomDetails?.data().name}
          channelId={roomId}
         />
      </>
    </ChatContainer>
  )
}

export default Chat;
