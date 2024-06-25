const TrackForm = () => {
  return (
    <div className="form-container">
      <legend>Add a New Track</legend>
      <form action="">
        <div className="input-group">
          <label htmlFor="title">title</label>
          <input name="title" id="title" type="text" />
        </div>
        <div className="input-group">
          <label htmlFor="artist">artist</label>
          <input name="artist" id="artist" type="text" />
        </div>
        <button className="btn cancel-btn">Cancel</button>
        <button type="submit">Add Track</button>
      </form>
    </div>
  );
};
export default TrackForm;
