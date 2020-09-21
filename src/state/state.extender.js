import { initAppState } from "./extenders/app.state";
import { initAuthState } from "./extenders/auth.state";

export const stateExtender = (state) => {
  initAppState(state);
  initAuthState(state);
};
