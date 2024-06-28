// src/App.jsx

import { useEffect, useState } from "react";
import NowPlaying from "./components/Tracks/NowPlaying";
import TrackForm from "./components/Tracks/TrackForm";
import TrackList from "./components/Tracks/TrackList";
import { create, index, remove, show, update } from "./services/trackService";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";

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



  return (
    <div className="main-container">
      <Navbar />
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
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/sign-in" element={<SignIn />} />{" "}
        <Route
          path="/tracks"
          element={
            <TrackList
              handleRemoveTrack={handleRemoveTrack}
              selectTrackToPlay={selectTrackToPlay}
              setIsEditing={setIsEditing}
              setShowForm={setShowForm}
              tracks={tracks}
              fetchTracks={fetchTracks}
            />
          }
        />
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
        />{" "}
        <Route path="/" element={<h1>HOme</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
};

export default App;
