// src/App.jsx

import NowPlaying from "./components/NowPlaying";
import TrackForm from "./components/TrackForm";
import TrackList from "./components/TrackList";

const App = () => {
  return <div className="main-container">
    <TrackForm/>
    <NowPlaying/>
    <TrackList/>
    
  </div>;
};

export default App;
