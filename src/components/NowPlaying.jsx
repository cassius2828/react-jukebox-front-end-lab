const NowPlaying = ({title,artist}) => {
  return (
    <div className="now-playing-container">
        <div className="now-playing">
        <h2>Now Playing</h2>
        <h2>Title: {title}</h2>
        <h2>Artist: {artist}</h2>
    </div>
    <button id="add-new-track-btn">Add a track</button>
    </div>

  )
}
export default NowPlaying