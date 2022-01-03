import React, { useRef, useState} from 'react';
import { ChatInputContainer } from './style';
import { Button } from '@material-ui/core';
import db from '../../firebase/config';
import firebase from 'firebase/compat/app';

function ChatInput({channelName, channelId}) {

  const [input, setInput] = useState('');

  const sendMessage = e => {
    e.preventDefault();

    if (channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('message').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Krzysztofa Kołodziejczak',
      userImage: 'data:image/jpeg;base64,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'
    });
    setInput('');
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={`Message #${channelName}`} />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput
