import React from 'react';
import { SidebarContainer, SidebarHead, SidebarInfo } from './style';
import { SidebarOption } from './../';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

import { useCollection } from 'react-firebase-hooks/firestore';
import db from "../../firebase/config";




const Sidebar = () => {
  const [channells, loading, error] = useCollection(db.collection("rooms"));

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
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels" />

      {channels?.docs.map(doc => (
        <SidebarOption
          key={doc.id}
          id={doc.id}
          addChannelOption
          title={doc.data().name} />

      ))}
    </SidebarContainer>
  )
}

export default Sidebar;
