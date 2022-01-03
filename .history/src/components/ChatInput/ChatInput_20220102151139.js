import React, {  useState} from 'react';
import { ChatInputContainer } from './style';
import { Button } from '@material-ui/core';
import db from '../../firebase/config';
import firebase from 'firebase/compat/app';

function ChatInput({channelName, channelId}) {

  const [input, setInput] = useState('');

  const sendMessage = e => {
    e.preventDefault();
    console.log(channelId)
    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('message').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Krzysztofa Kołodziejczak',
      userImage: 'https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959__340.jpg'
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
