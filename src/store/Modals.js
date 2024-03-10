export default {
  state() {
    return {
      loadingOverlay: false,
    };
  },
  mutations: {
    SET_LOADING_OVERLAY(state, value) {
      state.loadingOverlay = value;
    },
  },
};
