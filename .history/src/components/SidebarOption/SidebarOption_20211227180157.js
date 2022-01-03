import React from 'react';
import {SidebarOptionContainer, SidebarOptionChanel} from './style';

const SidebarOption = ({ Icon, title, addChannelOption }) => {

  const addChannel = () => {
    const channelName = prompt('Please enter the channel Name ')
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
