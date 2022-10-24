const initState = {
  toggleDrawer: false,
};

const navbarReducer = (state = initState, action) => {
  switch (action.type) {
    case "toggleDrawerHandler":
      return {
        ...state,
        navbar: {
          ...state.navbar,
          toggleDrawer: action.payload,
        },
      };
    default:
      return state;
  }
};

export default navbarReducer;
