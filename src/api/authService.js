import axiosClient from "./axiosClient";

const authService = {
  login: async (email, password) => {
    const response = await axiosClient.post("/users/login", { email, password });
    return response.data;
  },

  signup: async (name, email, password) => {
    const response = await axiosClient.post("/users/register", { name, email, password });
    return response.data;
  },

  logout: async (token) => {
    return await axiosClient.post(
      "/users/logout",
      {},
      {
        headers: {
          Authorization: token,
        },
      },
    );
  },
};

export default authService;
