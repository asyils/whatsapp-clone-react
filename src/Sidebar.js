import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from "./SidebarChat";

function Sidebar(){
    return (
    <div className="sidebar">
        <div className="sidebar__header">
            <Avatar  src="https://pbs.twimg.com/profile_images/1109508227027238912/Ps1gHKIU_400x400.jpg"/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />  
                    <input placeholder="Search or start a new chat" type="text"/>
            </div>
        </div>
        <div className="sidebar__chats"> 
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
    )
}


export default Sidebar;