import { Replay,Close,StarRate,Favorite,FlashOn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import "./styles.css"

import React from 'react'

export default function BottomBar() {
  return (
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
  )
}
