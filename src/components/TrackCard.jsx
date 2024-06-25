import { BtnContainer } from "./TrackBtns";

const TrackCard = ({ title = "title", artist = "artist" }) => {
  return (
    <div className="track-card">
      <h3>
        {title} by <span>{artist}</span>
      </h3>

      <BtnContainer />
    </div>
  );
};
export default TrackCard;
