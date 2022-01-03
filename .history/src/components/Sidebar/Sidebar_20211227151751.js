import React from 'react';
import { SidebarContainer, SidebarHead, SidebarInfo } from './style';
import { SidebarOptional } from './../';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';


const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHead>
        <SidebarInfo>
          <h2>PAPA FUN HQ</h2>
          <h3>
            <FiberManualRecordIcon  />
            Krzysztofa Kołodziejczak
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHead>
      <SidebarOptional />
    </SidebarContainer>
  )
}

export default Sidebar;
