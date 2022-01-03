import React, {  useState} from 'react';
import { ChatInputContainer } from './style';
import { Button } from '@material-ui/core';
import db, { auth } from '../../firebase/config';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';


function ChatInput({channelName, channelId, chatRef}) {

  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);

  const sendMessage = e => {
    e.preventDefault();
    console.log(channelId)
    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('message').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
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
