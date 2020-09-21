import { action } from "mobx";
import axios from "axios";

export const initAuthAPI = (state) => {
  const { actions, helpers } = state;

  actions.auth = {
    setToken: action("setToken", (token) => {
      state.auth.token = token;
      if (token) {
        localStorage.setItem("token", token);
        state.auth.isLoggedIn = true;
      } else {
        localStorage.removeItem("token");
      }
    }),

    fetchUser: action("fetchUser", () => {
      axios
        .get(`/api/user/me`, {
          withCredentials: true,
          crossDomain: true,
        })
        .then((response) => {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("user", response.data);
          console.log(response);
        });
    }),

    logout: action("logout", () => {
      axios.post(`/api/auth/logout`).then((response) => {
        console.log(response);
        localStorage.clear();
        state.auth.isLoggedIn = false;
      });
    }),

    submitLoginForm: action("submitLoginForm", (e) => {
      e.preventDefault();
      axios.post(`/api/auth/login/`, helpers.login.user).then(
        (response) => {
          console.log(response);
          axios.get(`/api/user/me`, {}).then(
            (response) => {
              // state.app.user = response.data;
              // state.auth.isLoggedIn = true;
              localStorage.setItem("isLoggedIn", true);
              localStorage.setItem("user", response.data.first_name);
              console.log(response);
              window.location.pathname = "/welcome";
            },
            (error) => {
              console.log(error.response);
            }
          );
          // state.auth.isLoggedIn = response.data.logged;
          // actions.auth.setToken(res.data.token);
          // window.location.replace("/");
        },
        (error) => {
          console.log(error.response);
        }
      );
    }),
  };
};
