import React, { useState, useEffect, useRef } from 'react';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function AudioPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', handleProgress);

    return () => {
      audio.removeEventListener('timeupdate', handleProgress);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <div>
        <button onClick={togglePlayPause}>
          {isPlaying ?(

          <PauseCircleIcon  sx={{
            height:"108px",width:"182px",background:"transparent"
          }}/>
          
          )
          
          : 
          
         ( 

<PlayCircleIcon
          sx={{
            height:"108px",width:"182px"
          }}
          />
        
          
          )}
        </button>
      </div>
     
    </div>
  );
}

export default AudioPlayer;
