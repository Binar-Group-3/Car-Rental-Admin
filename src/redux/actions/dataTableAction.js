import TYPES from "../types";
import axios from "axios";

export const getDataOrder = () => (dispatch) => {
  axios
    .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?pageSize=1000", {
      headers: {
        "Content-Type": "Application/json",
        "accept": "Application/json",
        "access_token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTY3MDcxM30.pu-ESe4QOfLirSYImxk-Fncw-vbr6PqbpQ4fJZ6bZhE",
      },
    })
    .then((res) => {
      dispatch({
        type: TYPES.GET_TABLE_DATA_ORDER,
        payload: res.data.orders,
      });
    })
    .catch((err) => console.log(err));
};