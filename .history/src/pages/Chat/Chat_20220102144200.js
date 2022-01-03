import React from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from './../../features/appSlice';
import { ChatContainer, Header, HeaderLeft, HeaderRight, ChatMessages } from './style';
import { ChatInput, Message } from '../../components'
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
      .collection('message')
      .orderBy('timestamp', 'asc')

  );
  console.log(roomDetails?.data());
  console.log(roomMessages)

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4><strong>#{roomDetails?.data().name}</strong></h4>
            <StarBorderIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
  ``          <InfoOutlinedIcon /> Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages>

          {roomMessages?.docs.map(doc => {
            const {message, timestamp, user, userImage} = doc.data();
           return (
              <Message
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
              />
            )
          })}
        </ChatMessages>
        <ChatInput
          channelName={roomDetails?.data().name}
          channelId={roomId}
         />
      </>
    </ChatContainer>
  )
}

export default Chat;
