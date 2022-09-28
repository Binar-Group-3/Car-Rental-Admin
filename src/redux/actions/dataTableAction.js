import TYPES from "../types";
import axios from "axios";

export const getDataOrder = () => (dispatch) => {
  axios
    .get("https://bootcamp-rent-car.herokuapp.com/admin/order")
    .then((res) => {
      dispatch({
        type: TYPES.GET_TABLE_DATA_ORDER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
