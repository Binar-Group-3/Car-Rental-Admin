import axios from "axios"
import TYPES from "../types"

export const getData = () => (dispatch) => {
  axios
    .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car",{
      headers: {
        "Content-Type": "Application/json",
        "accept": "Application/json",
        "access_token": 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbHNhQHNhbHNhLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTY3MDM3N30.iR-2vyAeAZX11u7AOKXCgNJYey-_eg58E8zZVgu4Z7Y"
      }})
    .then((res) => {
      console.log(res);
      dispatch({
        type: TYPES.FETCH_DATA,
        payload: res.data.cars,
      })
    })
    .catch((err) => console.log(err))
}

export const getMockData = () => (dispatch) => {
  axios
    .get("http://localhost:3001/admin/car")
    .then((res) => {
      dispatch({
        type: TYPES.FETCH_DATA,
        payload: res.data,
      })
      console.log(res.data)
    })
    .catch((err) => console.log(err))
}
