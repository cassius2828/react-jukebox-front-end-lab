import { useEffect, useState } from "react";


const TrackForm = ({
  setShowForm,
  isEditing,
  setIsEditing,
  playTrack,
  handleAddTrack,
  handleUpdateTrack,
}) => {

  const [formData, setFormData] = useState({
    title: "",
    artist: "",
  });

  ////////////////////
  // Syncs current track with form for updating
  ////////////////////
  useEffect(() => {
    if (playTrack) {
      setFormData({
        title: playTrack.title,
        artist: playTrack.artist,
      });
    }
  }, [playTrack]);

  ////////////////////
  // Cancel form
  ////////////////////
  const handleCancelForm = (e) => {
    e.preventDefault();
    setShowForm(false);
    setIsEditing(false);
  };

  ////////////////////
  // Handle input change
  ////////////////////
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
    console.log(value);
  };

  ////////////////////
  // Handle submit
  ////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      handleUpdateTrack(formData, playTrack._id);
    } else {
      handleAddTrack(formData);
    }

    setFormData({
      title: "",
      artist: "",
    });
  };

  return (
    <>
      {isEditing ? (
        <div className="form-container">
          <legend>
            Edit <span>{playTrack?.title}</span>
          </legend>
          <form action="">
            <div className="input-group">
              <label htmlFor="title">title</label>
              <input
                onChange={(e) => handleInputChange(e)}
                value={formData.title}
                name="title"
                id="title"
                type="text"
              />
            </div>
            <div className="input-group">
              <label htmlFor="artist">artist</label>
              <input
                onChange={(e) => handleInputChange(e)}
                value={formData.artist}
                name="artist"
                id="artist"
                type="text"
              />
            </div>
            <button
              onClick={(e) => handleCancelForm(e)}
              className="btn cancel-btn"
            >
              Cancel
            </button>

            <button onClick={handleSubmit} type="submit">
              Edit Track
            </button>
          </form>
        </div>
      ) : (
        <div className="form-container">
          <legend>Add a New Track</legend>
          <form action="">
            <div className="input-group">
              <label htmlFor="title">title</label>
              <input
                onChange={(e) => handleInputChange(e)}
                value={formData.title}
                name="title"
                id="title"
                type="text"
              />
            </div>
            <div className="input-group">
              <label htmlFor="artist">artist</label>
              <input
                onChange={(e) => handleInputChange(e)}
                value={formData.artist}
                name="artist"
                id="artist"
                type="text"
              />
            </div>
            <button
              onClick={(e) => handleCancelForm(e)}
              className="btn cancel-btn"
            >
              Cancel
            </button>

            <button onClick={handleSubmit} type="submit">
              Add Track
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default TrackForm;
