import React from 'react';
import { SidebarContainer, SidebarHead, SidebarInfo } from './style';
import { SidebarOptional } from './../';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';



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
