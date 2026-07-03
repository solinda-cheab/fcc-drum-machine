import { useEffect, useState } from "react";
import DrumPad from "./DrumPad";
import { sounds } from "../data/sounds";

export default function DrumMachine() {
  const [display, setDisplay] = useState("Press a Drum Pad");

  const playSound = (sound) => {
    const audio = document.getElementById(sound.key);

    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplay(sound.id);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();

      const sound = sounds.find((item) => item.key === key);

      if (sound) {
        playSound(sound);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div className="machine-header">
        <div>
          <h2>Drum Machine</h2>
          <p className="machine-subtitle">Tap a pad or press a key to play</p>
        </div>
      </div>



      <div className="pads">
        {sounds.map((sound) => (
          <DrumPad
            key={sound.key}
            sound={sound}
            playSound={playSound}
          />
        ))}
      </div>
    </div>
  );
}