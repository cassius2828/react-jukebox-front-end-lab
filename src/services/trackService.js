const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;
console.log(BASE_URL);

////////////////////
// Options for GET requests
////////////////////
const getOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

////////////////////
// Fetch all tracks
////////////////////
export const index = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tracks`, getOptions);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Could not fetch tracks");
    }
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

////////////////////
// Fetch a single track by ID
////////////////////
export const show = async (trackId) => {
  try {
    const response = await fetch(`${BASE_URL}/tracks/${trackId}`, getOptions);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error("Could not fetch the track");
    }
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

////////////////////
// Create a new track
////////////////////
export const create = async (formData) => {
  const params = formData;
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  };
  try {
    const response = await fetch(`${BASE_URL}/tracks`, postOptions);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error("Could not create the track");
    }
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

////////////////////
// Update a track by ID
////////////////////
export const update = async (formData, trackId) => {
  const params = formData;
  const updateOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  };
  try {
    const response = await fetch(`${BASE_URL}/tracks/${trackId}`, updateOptions);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error("Could not update the track");
    }
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

////////////////////
// Delete a track by ID
////////////////////
export const remove = async (trackId) => {
  const deleteOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/tracks/${trackId}`, deleteOptions);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error("Could not delete the track");
    }
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
