import React from 'react';
import {SidebarOptionContainer, SidebarOptionChanel} from './style';
import { db } from '../../firebase/firebase';

const SidebarOption = ({ Icon, title, addChannelOption }) => {

  const addChannel = () => {
    const channelName = prompt('Please enter the channel Name ');
    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      })
    }
  };
  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      { Icon && <Icon style={{ fontSize: 15, margin: 10}}/> }
      {Icon ?
      (
        <h3>{title}</h3>
      )
      : (
        <SidebarOptionChanel>
          <span>#</span> {title}
        </SidebarOptionChanel>
      )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption;
