import React from 'react';
import {SidebarOptionContainer, SidebarOptionChannel} from './style';
import { useDispatch } from 'react-redux';
import { enterRoom } from './../../features/appSlice';
import db from '../../firebase/config';

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
 const dispatch  = useDispatch();

  const addChannel = () => {
    console.log("add")
    const channelName = prompt('Please enter the channel Name ');
    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      })
    }
  };
  const selectChannel = () => {
    console.log("select")
    if (id) {
      dispatch(enterRoom({
        roomId: id,
      }))
    }
  };

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
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption;
