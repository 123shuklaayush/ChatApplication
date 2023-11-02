import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";


function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);

  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme? "" : " dark")}>
        <div>
          <IconButton>
            <AccountCircleIcon className={"other-icons" + (lightTheme? "" : " dark")} />
          </IconButton>
        </div>

        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddIcon className={"other-icons" + (lightTheme? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className={"other-icons" + (lightTheme? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon className={"other-icons" + (lightTheme? "" : " dark")} />
          </IconButton>

          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {lightTheme && (
              <NightlightIcon
                className={"other-icons" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeIcon className={"other-icons" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>

        </div>
      </div>
      <div className={"sb-search"  + (lightTheme? "" : " dark")}>
        <IconButton className={""  + (lightTheme? "" : " dark")}>
          <SearchIcon />
        </IconButton>
        <input type="text" className={"search-box"  + (lightTheme? "" : " dark")} placeholder="Search" />
      </div>
      <div className={"sb-conversations"  + (lightTheme? "" : " dark")}>
        {conversations.map((conversation) => {
          return (
            <ConversationsItem
              props={conversation}
              key={conversation.name}
              onClick={() => navigate("chat")}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
