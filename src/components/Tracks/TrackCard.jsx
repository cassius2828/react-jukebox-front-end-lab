import { BtnContainer } from "./TrackBtns";

const TrackCard = ({
  handleRemoveTrack,
  setIsEditing,
  title = "title",
  artist = "artist",
  selectTrackToPlay,
  id,
  setShowForm,
}) => {
  return (
    <div className="track-card">
      <h3>
        {title} by <span>{artist}</span>
      </h3>

      <BtnContainer
        handleRemoveTrack={handleRemoveTrack}
        setIsEditing={setIsEditing}
        setShowForm={setShowForm}
        id={id}
        selectTrackToPlay={selectTrackToPlay}
      />
    </div>
  );
};
export default TrackCard;
