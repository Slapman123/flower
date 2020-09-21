import { action } from "mobx";
import axios from "axios";

export const initAppAPI = (state) => {
  const { actions } = state;

  actions.app = {
    openDialog: action("openDialog", () => {
      state.app.isDialogOpen = true;
    }),
    closeDialog: action("closeDialog", () => {
      state.app.isDialogOpen = false;
    }),
    openConfirmationDialog: action("openConfirmationDialog", (user) => {
      state.app.selectedUser = user;
      state.app.isConfirmationDialogOpen = true;
      console.log(user);
    }),
    closeConfirmationDialog: action("closeConfirmationDialog", () => {
      state.app.isConfirmationDialogOpen = false;
    }),
    setSelectedUser: action("setSelectedUser", (user) => {
      state.app.selectedUser = user;
      actions.app.openDialog();
      console.log(user);
    }),
    handleChange: action("handleChange", (e) => {
      state.app[e.target.name] = e.target.value;
    }),
    increasePage: action("increasePage", (page) => {
      page = page + 1;
    }),
    decreasePage: action("decreasePage", (e) => {
      state.app.currentPage = state.app.currentPage - 1;
    }),
    handleSelectedUserChange: action("handleChange", (e) => {
      state.app.selectedUser[e.target.name] = e.target.value;
    }),
    delete: action("delete", (route, id) => {
      axios
        .delete(`/api/admin/users/${id}`)
        .then(() => {
          console.log(`api/admin/${route}/${id}`);
          actions.app.closeConfirmationDialog();
          actions[route].fetchData();
        });
    }),
    sortUsers: action("sortUsers", (route, e) => {
      state[route].sortFilter = e.currentTarget.getAttribute("data-id");
      console.log(e.currentTarget.getAttribute("data-id"));
    }),
  };
};
