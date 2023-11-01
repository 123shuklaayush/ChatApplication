import React from 'react'
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from '../Images/live-chat_512px.png'
import { IconButton } from "@mui/material";
import { useSelector } from 'react-redux';
function User() {
  const lightTheme = useSelector((state) => state.themeKey)
  return (
    <div className="list-container">
     <div className={"ug-header" + (lightTheme ? "" : " dark")}>

        <img src={logo}
        style={{height:"2rem", width:"2rem"}} />
        <p className={"ug-title" + (lightTheme ? "" : " dark")}>Online Users</p>
     </div>
     <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
        <SearchIcon className={"" + (lightTheme ? "" : " dark")}/>
        </IconButton>
        <input type="text" className={"search-box" + (lightTheme ? "" : " dark")}placeholder="Search"/>
     </div>
     <div>
        <div className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className="con-icon">T</p>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Users</p>
        </div>
        <div className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className="con-icon">T</p> 
            <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Users</p>
        </div>
        <div className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className="con-icon">T</p>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Users</p>
        </div>
        <div className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className="con-icon">T</p>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Users</p>
        </div>
     </div>
    </div>
  );
}

export default User
