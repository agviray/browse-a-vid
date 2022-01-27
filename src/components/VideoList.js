import React from 'react';

const VideoList = ({ videos }) => {
  return(
    <div>You have retrieved {videos.length} videos.</div>
  );
}

export default VideoList;