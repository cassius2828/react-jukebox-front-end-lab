import TrackCard from "./TrackCard";

const TrackList = ({
  tracks,
  selectTrackToPlay,
  setShowForm,
  setIsEditing,
  handleRemoveTrack,
}) => {
  return (
    <div className="track-list-container">
      <h2>Song List</h2>
      <ul className="track-list">
        {tracks ? (
          tracks.map((track) => {
            return (
              <TrackCard
                handleRemoveTrack={handleRemoveTrack}
                setIsEditing={setIsEditing}
                setShowForm={setShowForm}
                id={track._id}
                selectTrackToPlay={selectTrackToPlay}
                key={track}
                title={track.title}
                artist={track.artist}
              />
            );
          })
        ) : (
          <h1>no tracks</h1>
        )}
      </ul>
    </div>
  );
};
export default TrackList;
