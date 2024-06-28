const AUTH_BASE_URL = "http://localhost:3001/auth";

export const signup = async (formData) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  try {
    const response = await fetch(AUTH_BASE_URL + "/signup", options);
    const data = await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const signin = async (formData) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };


  try {
    const response = await fetch(AUTH_BASE_URL + "/signin", options);

    if (!response.ok) {
      // Check if the response status is not OK (2xx)
      const errorData = await response.json(); // Parse error response body
      throw new Error(
        `Error ${response.status}: ${response.statusText} - ${JSON.stringify(
          errorData
        )}`
      );
    }

    const data = await response.json();
    console.log(data); // Handle successful response

    // Store the token for future authenticated requests
    localStorage.setItem("authToken", data.token);
  } catch (err) {
    console.error("Detailed Error:", err.message); // Log detailed error message
  }
};
