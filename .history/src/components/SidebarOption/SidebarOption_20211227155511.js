import React from 'react';
import {SidebarOptionContainer} from './style';

const SidebarOption = ({ Icon, title }) => {
  return (
    <SidebarOptionContainer>
      { Icon && <Icon fontSize='small'/> }
    </SidebarOptionContainer>
  )
}

export default SidebarOption;
