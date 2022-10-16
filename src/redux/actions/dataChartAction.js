import moment from "moment/moment";
import TYPES from "../types";
import axios from "axios";

export const getDataChart = (value) => (dispatch) => {
    axios
        .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/order", {
            headers: {
                "Content-Type": "application/json",
                "accept": "Application/json",
                "access_token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTY3MDcxM30.pu-ESe4QOfLirSYImxk-Fncw-vbr6PqbpQ4fJZ6bZhE",
            },
        })
        .then((res) => {
            const dateData = res.data.orders.map(
                (item) => moment(item.start_rent_at).format("D MMM")
            );
            const dataFilter = dateData.filter((item) => item.includes(value));
            const dataDaily = dataFilter.map((item) =>
                moment(item, "D MMM").format("D")
            );
            dispatch({
                type: TYPES.GET_CHART_DATA_ORDER,
                payload: dataDaily,
            });
        })
        .catch((err) => console.log(err));
};