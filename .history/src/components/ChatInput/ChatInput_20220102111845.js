import React, { useRef} from 'react';
import { ChatInputContainer } from './style';
import { Button } from '@material-ui/core';

function ChatInput({channelName, channelId}) {

  const inputRef = useRef(null);
  const sendMessage = e => {
    e.preventDefault();
    if (channelId) {
      return false;
    }

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
