import React from 'react';
import { ChatInputContainer } from './style';
import { Button } from '@material-ui/core';

function ChatInput({channelName, channelId}) {
  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Message #${channelName}`} />
        <Button>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput
