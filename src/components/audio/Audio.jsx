import { useRef, useState } from 'react';
import '../../styles/Layout/audio.scss';


function Audio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} loop>
        <source src="./audio/harrypotter.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <button onClick={toggleMusic}>
        {isPlaying ? '⏸️ Pausar Música' : '▶️ Reproducir Música'}
      </button>
    </div>
  );
}

export default Audio;