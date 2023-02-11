import React from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
const Feed = () => {
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        

        {/* TweetBox */}
        <TweetBox/>


        {/* Posts */}
    </div>
  )
}

export default Feed