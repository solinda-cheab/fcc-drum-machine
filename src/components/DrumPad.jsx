export default function DrumPad({ sound, playSound }) {
  return (
    <button
      className="drum-pad"
      id={sound.id}
      onClick={() => playSound(sound)}
    >
      {sound.key}

      <audio
        className="clip"
        id={sound.key}
        src={sound.src}
      ></audio>
    </button>
  );
}