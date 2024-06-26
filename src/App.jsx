// src/App.jsx

import { useEffect, useState } from "react";
import NowPlaying from "./components/NowPlaying";
import TrackForm from "./components/TrackForm";
import TrackList from "./components/TrackList";
import { create, index, remove, show, update } from "./services/trackService";
import { Route, Routes } from "react-router-dom";

////////////////////
// App Component
////////////////////
const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [playTrack, setPlayTrack] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  ////////////////////
  // Fetch tracks function
  ////////////////////
  const fetchTracks = async () => {
    const data = await index();
    setTracks(data);
    setIsEditing(false);
    setShowForm(false);
    console.log(tracks);
  };

  ////////////////////
  // Get the track to display in NowPlaying from db
  ////////////////////
  const selectTrackToPlay = async (trackId) => {
    const trackToPlay = await show(trackId);
    setPlayTrack(trackToPlay);
  };

  ////////////////////
  // Handle adding a track
  ////////////////////
  const handleAddTrack = async (formData) => {
    await create(formData);
    fetchTracks();
  };

  ////////////////////
  // Handle updating a track
  ////////////////////
  const handleUpdateTrack = async (formData, trackId) => {
    await update(formData, trackId);
    fetchTracks();
  };

  ////////////////////
  // Handle removing a track
  ////////////////////
  const handleRemoveTrack = async (trackId) => {
    await remove(trackId);
    fetchTracks();
  };

  ////////////////////
  // Get songs from db
  ////////////////////
  useEffect(() => {
    fetchTracks();
  }, []);

  return (
    <div className="main-container">
      {showForm && (
        <TrackForm
          handleAddTrack={handleAddTrack}
          handleUpdateTrack={handleUpdateTrack}
          isEditing={isEditing}
          playTrack={playTrack}
          selectTrackToPlay={selectTrackToPlay}
          setIsEditing={setIsEditing}
          setShowForm={setShowForm}
          showForm={showForm}
        />
      )}
      <Routes>
        <Route
          path="/tracks/:tracksId"
          element={
            <NowPlaying
              playTrack={playTrack}
              setIsEditing={setIsEditing}
              setPlayTrack={setPlayTrack}
              setShowForm={setShowForm}
              showForm={showForm}
            />
          }
        />
      </Routes>
      <TrackList
        handleRemoveTrack={handleRemoveTrack}
        selectTrackToPlay={selectTrackToPlay}
        setIsEditing={setIsEditing}
        setShowForm={setShowForm}
        tracks={tracks}
      />
    </div>
  );
};

export default App;
