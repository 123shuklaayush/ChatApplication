import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
function CreateGroups() {
  const lightTheme = useSelector((state) => state.themeKey)
  return (
    <div className={"createGroups-container" + (lightTheme ? "" : " dark")}>
        <input type="text" className={"search-box" + (lightTheme ? "" : " dark")} placeholder="Enter Group Name"/>
        <IconButton>
            <DoneOutlineIcon className={"" + (lightTheme? "" : " dark")}/>
        </IconButton>
    </div>
  )
}

export default CreateGroups
