const NowPlaying = ({
  showForm,
  setShowForm,
  setIsEditing,
  playTrack,
  setPlayTrack,
}) => {
  return (
    <div className="now-playing-container">
      <div className="now-playing">
        <h2>Now Playing</h2>
        <h2>Title: {playTrack?.title}</h2>
        <h2>Artist: {playTrack?.artist}</h2>
      </div>
      {!showForm && (
        <button
          onClick={() => {
            setShowForm(true);
            setIsEditing(false);
            setPlayTrack(null);
          }}
          id="add-new-track-btn"
        >
          Add a track
        </button>
      )}
    </div>
  );
};
export default NowPlaying;
