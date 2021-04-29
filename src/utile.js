export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};

export const setSongActive = (currentSong, songs) => {
  return songs.map((s) => {
    if (s.id === currentSong.id) {
      return {
        ...s,
        active: true,
      };
    } else {
      return {
        ...s,
        active: false,
      };
    }
  });
};
