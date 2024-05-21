import axios from "axios";

export const userService = {
  getUserData: async (email, password) => {
    return axios
      .get(
        `http://localhost:9121/user/getByEmailAndPassword?email=${email}&password=${password}`
      )
      .then((res) => {
        if (res.data) {
          return res.data;
        }
        return null;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  },
};
