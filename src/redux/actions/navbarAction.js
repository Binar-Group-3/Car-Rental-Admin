export const toggleDrawerHandler = (payload) => (dispatch) => {
    dispatch({
      type: "toggleDrawerHandler",
      payload: !payload,
    });
  };
  