import { extendObservable } from "mobx";

export const initAppState = (state) => {
  const { helpers } = state;

  extendObservable(state, {
    app: {
      testValue: 40,
      isModalOpen: false,
      isConfirmationDialogOpen: false,
      isSplash: true,
      showNav: false,
      isDialogOpen: false,
      selectedUser: "",
      tableFilter: "",
      searchValue: "",      
      currentPage: 1,
      isAjaxInProgress: false,
      user: localStorage.getItem("user") || {},
    },
  });

  extendObservable(helpers, {
    app: {
      get testValue() {
        return state.app.testValue;
      },
      get isModalOpen() {
        return state.app.isModalOpen;
      },
      get isConfirmationDialogOpen() {
        return state.app.isConfirmationDialogOpen;
      },
      get isSplash() {
        return state.app.isSplash;
      },
      get showNav() {
        return state.app.showNav;
      },
      get isDialogOpen() {
        return state.app.isDialogOpen;
      },
      get selectedUser() {
        return state.app.selectedUser;
      },
      get tableFilter() {
        return state.app.tableFilter;
      },
      get searchValue() {
        return state.app.searchValue;
      },
      get currentPage() {
        return state.app.currentPage;
      },
      get isAjaxInProgress() {
        return state.app.isAjaxInProgress;
      },
      get search() {
        return state.app.search;
      },
      get user() {
        return state.app.user;
      },
    },
  });
  
};