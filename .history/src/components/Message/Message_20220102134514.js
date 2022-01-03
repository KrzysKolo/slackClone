import React from 'react';
import {MessageContainer} from './style';

const Message = ({message, timestamp, user, userImage}) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="KK" />
    </MessageContainer>
  )
}

export default Message;
