import { Link } from "react-router-dom";

////////////////////
// Delete Button Component
////////////////////
export const DeleteBtn = ({ handleRemoveTrack, id }) => {
  return (
    <button onClick={() => handleRemoveTrack(id)} className="btn delete-btn">
      Delete
    </button>
  );
};

////////////////////
// Edit Button Component
////////////////////
export const EditBtn = ({ setShowForm, setIsEditing, selectTrackToPlay, id }) => {
  return (
    <button
      onClick={() => {
        selectTrackToPlay(id);
        setShowForm((prev) => !prev);
        setIsEditing(true);
      }}
      className="btn edit-btn"
    >
      Edit
    </button>
  );
};

////////////////////
// Play Button Component
////////////////////
export const PlayBtn = ({ id, selectTrackToPlay }) => {
  return (
    <Link to={`/tracks/${id}`}>
      <button onClick={() => selectTrackToPlay(id)} className="btn play-btn">
        Play
      </button>
    </Link>
  );
};

////////////////////
// Button Container Component
////////////////////
export const BtnContainer = ({
  handleRemoveTrack,
  id,
  selectTrackToPlay,
  setShowForm,
  setIsEditing,
}) => {
  return (
    <div className="btn-container">
      <PlayBtn id={id} selectTrackToPlay={selectTrackToPlay} />
      <EditBtn
        setIsEditing={setIsEditing}
        setShowForm={setShowForm}
        id={id}
        selectTrackToPlay={selectTrackToPlay}
      />
      <DeleteBtn
        handleRemoveTrack={handleRemoveTrack}
        id={id}
        selectTrackToPlay={selectTrackToPlay}
      />
    </div>
  );
};
