import React from 'react';
import { ChatInputContainer } from './style'

function ChatInput({channelName}) {
  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Message #${channelName}`}
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput
