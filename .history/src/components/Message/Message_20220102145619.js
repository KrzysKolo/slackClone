import React from 'react';
import {MessageContainer, MessageInfo} from './style';

const Message = ({message, timestamp, user, userImage}) => {

  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        {user}{' '}
        <span>
          {new Date(timestamp?.toDate()).toUTCString()}
        </span>
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message;
