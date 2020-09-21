import { extendObservable } from "mobx";

export const initAuthState = (state) => {
  const { helpers } = state;  

  let cookie = document.cookie;
  
  
// console.log(document.cookie);
  extendObservable(state, {
    auth: {
      isLoggedIn: !!localStorage.getItem("isLoggedIn"),
      error: ""
    },
  });
  if (cookie) {
    console.log("zzz");
    // setTimeout(() => {
      state.auth.isLoggedIn = true;
    // }, 50);
  }
  
  extendObservable(helpers, {
    auth: {
      get isLoggedIn() {
        return state.auth.isLoggedIn;
      },        
    },
  });
};
