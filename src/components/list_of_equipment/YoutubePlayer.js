import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = (props) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 5000); // 10 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      start: 0,
    }
  };

  return (
    <div>
      {showVideo && <YouTube videoId={props.videoId} opts={opts} />}
    </div>
  );
};

export default YouTubePlayer;
