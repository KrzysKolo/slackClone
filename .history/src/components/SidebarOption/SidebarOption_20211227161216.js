import React from 'react';
import {SidebarOptionContainer, SidebarOptionChanel} from './style';

const SidebarOption = ({ Icon, title }) => {
  return (
    <SidebarOptionContainer>
      { Icon && <Icon fontSize='small' style={{ padding: 10 }}/> }
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
