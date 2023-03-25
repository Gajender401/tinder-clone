import React from "react";
import { Avatar } from "@mui/material";
import "../styles.css"
export default function Chat({ name, message, timestamp, profilePic }) {
  return (
    <div className="chat">
      <Avatar src={profilePic} alt={name} className="chat_image" />
      <div className="chat_info" >
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chat_timestamp" > {timestamp} </p>
    </div>
  );
}
