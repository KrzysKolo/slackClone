import React from 'react';
import {SidebarOptionContainer, SidebarOptionChanel} from './style';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../../firebase/config';

const SidebarOption = ({ Icon, title, addChannelOption }) => {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  console.log(channels)
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
