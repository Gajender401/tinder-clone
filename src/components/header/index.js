import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import "./styles.css";
import logo from "../../asstets/tinder-icon.svg";
import { IconButton } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { Link, useNavigate, useLocation } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div className="header">
      {location.pathname!=="/" ? (
        <Link to="/" >
                <IconButton onClick={() => navigate(-1) }>
          <ArrowBackIos fontSize="large" />
        </IconButton>
        </Link>

      ) : (
        <IconButton >
          <PersonIcon fontSize="large" />
        </IconButton>
      )}
        <Link to="/" >
        <img className="header_logo" src={logo} alt="tinder" />
        </Link>

        <Link to="/chats" >
        <IconButton >
        <ForumIcon fontSize="large" />
      </IconButton>
        </Link>

    </div>
  );
}
