import React from 'react'
import './index.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import {FiberManualRecordIcon} from '@material-ui/icons';
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Test Workspace</h2>
          <h3><FiberManualRecordIcon />
         Sadia Chowdhury
        </h3>
        </div>
        <CreateIcon />
      </div>
    </div>
  )
}

export default Sidebar
