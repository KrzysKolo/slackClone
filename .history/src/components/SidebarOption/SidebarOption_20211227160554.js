import React from 'react';
import {SidebarOptionContainer} from './style';

const SidebarOption = ({ Icon, title }) => {
  return (
    <SidebarOptionContainer>
      { Icon && <Icon style={{ padding: 10 }}/> }
      {Icon ?
      (
        <h3>{title}</h3>
      )
      : (
        <h3>sdsdsdsds</h3>
      )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption;
