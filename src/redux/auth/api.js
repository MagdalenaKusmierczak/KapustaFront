import axios from "axios";
axios.defaults.baseURL = "https://kapusta-backend-fq38.onrender.com";

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerAPI = async (user) => {
  try {
    const { data } = await axios.post("/auth/register", user);
    return data;
  } catch (error) {
    if (error.response.status === 409) {
      alert(`User ${user.email} is existing`);
    }
  }
};

export const loginAPI = async (user) => {
  const { data } = await axios.post("/auth/login", user);
  setAuthHeader(data.accessToken);
  return data;
};

export const logoutAPI = async () => {
  const { data } = await axios.post("/auth/logout");
  clearAuthHeader();
  return data;
};

// export const googleLoginAPI = async () => {
//   const response = await axios.get("/auth/google", {
//     headers: {
//       accept: "*/*",
//     },
//   });
//   return response;
// };

export const fullUserInfoAPI = async () => {
  const { data } = await axios.get("/user");
  return data;
};

export const refreshTokenApi = async (sid, refreshToken) => {
  const { data } = await axios.post(
    "/auth/refresh",
    { sid },
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );
  setAuthHeader(data.newAccessToken);
  return data;
};
