import React from 'react';
import {MessageContainer, MessageInfo} from './style';

const Message = ({message, timestamp, user, userImage}) => {

  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>

      </MessageInfo>
    </MessageContainer>
  )
}

export default Message;
