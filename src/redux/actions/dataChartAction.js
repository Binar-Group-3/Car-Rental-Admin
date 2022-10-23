import moment from "moment/moment";
import TYPES from "../types";
import axios from "axios";

export const getDataChart = (value) => (dispatch) => {
    axios
        .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?pageSize=1000", {
            headers: {
                "Content-Type": "application/json",
                "accept": "Application/json",
                "access_token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTY3MDcxM30.pu-ESe4QOfLirSYImxk-Fncw-vbr6PqbpQ4fJZ6bZhE",
            },
        })
        .then((res) => {
            const dateData = res.data.orders.map(
                (item) => moment(item.start_rent_at).format("D MMM YYYY")
            );
            const dataFilter = dateData.filter((item) => item.includes(value));
            const dateOnly = dataFilter.map((item) =>
                item
            );
            dispatch({
                type: TYPES.GET_CHART_DATA_ORDER,
                payload: dateOnly,
            });
        })
        .catch((err) => console.log(err));
};