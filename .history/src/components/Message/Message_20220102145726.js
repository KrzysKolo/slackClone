import React from 'react';
import {MessageContainer, MessageInfo} from './style';

const Message = ({message, timestamp, user, userImage}) => {

  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}{' '}
          <span>
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message;
