import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import { db } from "../../lib/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { CircularProgress } from "@mui/material";
import Chat from "./chat/chat"


export default function Chats() {


  return (
    <div>
        <Chat
        name="Sam Dees"
        message = "Wassup nigga"
        timestamp= "32 min ago"
        profilePic = "https://th.bing.com/th/id/OIP._v8L6lEHhtps1FB-kjY0qAHaKz?pid=ImgDet&rs=1" 
        />
                <Chat
        name="Sara"
        message = "Wassup nigga"
        timestamp= "32 min ago"
        profilePic = "https://th.bing.com/th/id/OIP._v8L6lEHhtps1FB-kjY0qAHaKz?pid=ImgDet&rs=1" 
        />
    </div>
  );
}
