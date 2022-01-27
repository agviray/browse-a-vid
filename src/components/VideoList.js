import React from 'react';

const VideoList = (props) => {
  return(
    <div>You have retrieved {props.videos.length} videos.</div>
  );
}

export default VideoList;