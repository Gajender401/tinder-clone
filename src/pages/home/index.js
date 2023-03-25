import React from "react";
import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./styles.css";
import { db } from "../../lib/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { CircularProgress } from "@mui/material";
import { Replay,Close,StarRate,Favorite,FlashOn } from '@mui/icons-material'
import { IconButton } from '@mui/material'

export default function Home() {
  const [profiles, setprofiles] = useState(null);

  const fetch = async () => {
    const querySnapshot = await getDocs(query(collection(db, "users")));
    var list = [];
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    setprofiles(list);
  };

  useEffect(() => {
    fetch();
  }, []);


  return (
    <div>
        {profiles === null 
        ? <div style={{ position: "absolute", top: "40vh", left: "45vw" }}>
        <CircularProgress />
      </div> 
        : <div className="container">
        {profiles.map((data) => (
          <TinderCard
            className="swip"
            key={data.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{
                background: `url(${data.url})`,
                backgroundSize: "cover",
              }}
            >
              <h3> {data.name} </h3>
            </div>
          </TinderCard>
        ))}
      </div> }

      <div className='btn_container' >
        <IconButton className='Icon_replay' >
        <Replay fontSize='large' />
        </IconButton>
        <IconButton className='Icon_close' >
        <Close fontSize='large' />
        </IconButton>
        <IconButton className='Icon_star_rate' >
        <StarRate fontSize='large' />
        </IconButton>
        <IconButton className='Icon_fav' >
        <Favorite fontSize='large' />
        </IconButton>
        <IconButton className='Icon_falsh_on' >
        <FlashOn fontSize='large' />
        </IconButton>

    </div>
    </div>
  );
}
