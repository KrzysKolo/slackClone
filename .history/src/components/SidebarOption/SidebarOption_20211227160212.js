import React from 'react';
import {SidebarOptionContainer} from './style';

const SidebarOption = ({ Icon, title }) => {
  return (
    <SidebarOptionContainer>
      { Icon && <Icon style={{ padding: 10 }}/> }
    </SidebarOptionContainer>
  )
}

export default SidebarOption;
