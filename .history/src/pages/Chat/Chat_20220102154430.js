import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from './../../features/appSlice';
import { ChatContainer, Header, HeaderLeft, HeaderRight, ChatMessages, ChatBottom } from './style';
import { ChatInput, Message } from '../../components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import db from '../../firebase/config';

const Chat = ( ) => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
    db
      .collection('rooms')
      .doc(roomId)
      .collection('message')
      .orderBy('timestamp', 'asc')

  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView();
  }, [roomId, loading])

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
          <ChatBottom ref={chatRef} />
        </ChatMessages>
        <ChatInput
          chatRef
          channelName={roomDetails?.data().name}
          channelId={roomId}
         />
      </>
    </ChatContainer>
  )
}

export default Chat;