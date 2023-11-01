import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';

function ChatArea() {
    const lightTheme = useSelector((state) => state.themeKey);
    const [conversations, setConversations] = useState([
        {
            name: "Test#1",
            lastMessage:"Last Message #1",
            timeStamp: "today",
        },
        {
            name: "Test#2",
            lastMessage:"Last Message #2",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage:"Last Message #3",
            timeStamp: "today",
        },
    ]);
    var props = conversations[0];
  return (
    <div className='chatArea-container'>
        <div className={"chatArea-header" + (lightTheme? "" : " dark")}>
            <p className="con-icon">{props.name[0]}</p>
            <div className="header-text">
                <p className={"con-title" + (lightTheme? "" : " dark")}>{props.name}</p>
                <p className={"con-timeStamp" + (lightTheme? "" : " dark")}>{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteIcon className={"" + (lightTheme? "" : " dark")}/>
            </IconButton>

        </div>
        <div className={"messages-container" + (lightTheme? "" : " dark")}>
            <MessageOthers/>
            <MessageSelf/><MessageOthers/>
            <MessageSelf/><MessageOthers/>
            <MessageOthers/>
            <MessageOthers/>
            <MessageOthers/>
            <MessageSelf/>
        </div>
        <div className={"text-input-area" + (lightTheme? "" : " dark")}>
            <input type="text" placeholder='Type a Message' className={"search-box" + (lightTheme? "" : " dark")} />
            <IconButton>
                <SendIcon className={"" + (lightTheme? "" : " dark")}/>
            </IconButton>
        </div>
      
    </div>
  )
}

export default ChatArea
