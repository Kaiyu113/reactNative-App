import axios from "axios";

const API_URL = "http://192.168.10.122:5000/api/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

// get user
const me = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "me", config);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  return response.data;
};

//update user
const update = async (token, formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch(API_URL + "update", formData, config);

  return response.data;
};

const authService = {
  register,
  update,
  login,
  me,
};

export default authService;
