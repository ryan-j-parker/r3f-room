import { Html } from '@react-three/drei';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const useAudio = (url) => {
  const [audio] = useState(new Audio({ url: '/BleepingDemo.mp3' }));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default function AudioPlayer() {
  //   const audioRef = useRef();

  //   const audio = useState(new Audio('/BleepingDemo.mp3'));

  //   const handlePlay = () => {
  //     audioRef.current.play();
  //   };

  //   function togglePlay(audio, e) {
  //     if (audio.paused) {
  //       audio.play();
  //     } else {
  //       audio.pause();
  //       e.stopPropagation();
  //     }
  //   }

  //   useEffect(() => {
  //     audioRef.current.play();
  //   }, []);

  //   return (
  //     <>
  //       <Html>
  //         <button onClick={(e) => togglePlay(audio, e)}>Play</button>
  //       </Html>
  //       {/* <audio ref={audioRef} src="p/BleepingDemo.mp3" /> */}
  //     </>
  //   );
  // }

  const [playing, toggle] = useAudio('url');

  return (
    <Html position={[0, -20, 0]}>
      <audio src="/BleepingDemo.mp3" />
      <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
    </Html>
  );
}
