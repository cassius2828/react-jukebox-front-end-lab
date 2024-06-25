export const DeleteBtn = () => {
  return <button className="btn delete-btn">Delete</button>;
};

export const EditBtn = () => {
  return <button className="btn edit-btn">Edit</button>;
};
export const PlayBtn = () => {
  return <button className="btn play-btn">Play</button>;
};

export const BtnContainer = () => {
  return (
    <div className="btn-container">
      <PlayBtn />
      <EditBtn />
      <DeleteBtn />
    </div>
  );
};
