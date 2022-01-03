import React from 'react';
import {MessageContainer, MessageInfo} from './style';

const Message = ({message, timestamp, user, userImage}) => {
  console.log(userImage)
  return (
    <MessageContainer>
      <img src={userImage} alt="KK" />
      <MessageInfo>

      </MessageInfo>
    </MessageContainer>
  )
}

export default Message;
