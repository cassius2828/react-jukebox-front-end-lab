import TrackCard from "./TrackCard";

const TrackList = () => {
  const tempArr = [1, 2, 3, 4, 5];
  return (
    <div className="track-list-container">
        <h2>Song List</h2>
      <ul className="track-list">
        {tempArr.map((track) => {
          return <TrackCard key={track} />;
        })}
      </ul>
    </div>
  );
};
export default TrackList;
