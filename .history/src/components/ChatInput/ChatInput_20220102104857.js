import React from 'react';
import { ChatInputContainer } from './style';
import { Button } from '@material-ui/core';

function ChatInput({channelName, channelId}) {

  const sendMessage = e => {
    e.preventDefault();
  };

  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Message #${channelName}`} />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput
