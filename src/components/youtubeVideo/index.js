import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';

import "./styles.css"

function YoutubeVideo (props) {
  
  const [isMobile, setMobile] = useState(3);
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    console.log('video', props);
    setShow(false);
    let type = 1;
    if (window.innerWidth >= 920) {
      type = 2;
    }
    if (window.innerWidth >= 1280) {
      type = 3;
    }
    setMobile(type);
    setShow(true);
  }, [window.innerWidth]);
  
  const opts = {
    height: isMobile === 1 ? 320 : 200,
    width: '100%',
    playerVars: {
      modestbranding: 1,
    },
  };
  
  const videoId = props.videoId;

  return(
      <div className={`content col-12 ${props.className}`}>
        <YouTube videoId={videoId} opts={opts}/>
        <div className="texts">
          <strong>{props.title}</strong><br />
        </div>
      </div>
  );

}

export default YoutubeVideo;

