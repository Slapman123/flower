import { initAppAPI } from "./initializers/app.api";
import { initAuthAPI } from "./initializers/auth.api";

export const apiInitializer = (state) => {
  initAppAPI(state);  
  initAuthAPI(state);  
};
