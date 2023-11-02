import React from 'react'
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from '../Images/live-chat_512px.png'
import { IconButton } from "@mui/material";
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from "framer-motion"
function Groups() {
  const lightTheme = useSelector((state) => state.themeKey)
  return (
    <AnimatePresence>

    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{
      ease:"anticipate",
      duration: "0.3",
    }}
     className="list-container">
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
        <motion.div
         whileHover={{scale:1.01}}
         whileTap={{scale:0.98}}
         className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className="con-icon">T</p>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Groups</p>
        </motion.div>
        <motion.div
         whileHover={{scale:1.01}}
         whileTap={{scale:0.98}}
         className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className="con-icon">T</p>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Groups</p>
        </motion.div><motion.div
         whileHover={{scale:1.01}}
         whileTap={{scale:0.98}}
         className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className="con-icon">T</p>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Groups</p>
        </motion.div><motion.div
         whileHover={{scale:1.01}}
         whileTap={{scale:0.98}}
         className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className="con-icon">T</p>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Groups</p>
        </motion.div>
     </div>
    </motion.div>
    </AnimatePresence>
  );
}

export default Groups
