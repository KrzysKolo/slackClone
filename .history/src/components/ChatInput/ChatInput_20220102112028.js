import React, { useRef} from 'react';
import { ChatInputContainer } from './style';
import { Button } from '@material-ui/core';
import db from '../../firebase/config';

function ChatInput({channelName, channelId}) {

  const inputRef = useRef(null);
  const sendMessage = e => {
    e.preventDefault();
    if (channelId) {
      return false;
    }

    db.collection('rooms')

  };

  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} placeholder={`Message #${channelName}`} />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput
