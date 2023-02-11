import { Avatar, Button } from '@mui/material'
import React from 'react'
import './Tweetbox.css';
const TweetBox = () => {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlcifhXRJiT0RoN2Fjk_Logo_roundbackground_black'></Avatar>
                <input placeholder="What's appening?" type="text" />
                {/* <input placeholder="Enter Image" ></input> */}
                
            </div>
            <Button>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox