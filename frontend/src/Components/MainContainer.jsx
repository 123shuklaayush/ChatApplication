import React, {useState}  from 'react'
import "./myStyles.css";
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_Groups from './Users';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MainContainer() {
  
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"main-container" + (lightTheme? "" : " back-dark")}>
    <Sidebar />
    <Outlet/> 
    {/* used within the parent route element to indicate where a child route element should be rendered. */}
    {/* <Welcome/> */}
    {/* <CreateGroups/> */}
    {/* <ChatArea props={conversations[0]}/> */}
    {/* <Users_Groups/> */}
      </div>
  )
}

export default MainContainer;