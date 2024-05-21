import axios from "axios";

export const taskService = {
  createTask: async (task) => {
    return axios
      .post("http://localhost:9121/task/create", task)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  },
  getTasksByUserId: async (userId) => {
    return axios
      .get(`http://localhost:9121/task/getAll?userId=${userId}`)
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
  updateTask: async (taskId, days, isReset) => {
    return axios
      .post(
        `http://localhost:9121/task/update?task_id=${taskId}&days=${days}&isReset=${isReset}`
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
  deleteTask: async (taskId) => {
    return axios
      .delete(`http://localhost:9121/task/delete/${taskId}`)
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
