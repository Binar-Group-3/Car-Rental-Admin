import axios from "axios";
import swal from "sweetalert";

export const postAddCar = (data, navigate) => {
    axios
    .post(`https://bootcamp-rent-cars.herokuapp.com/admin/car`, data, {
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbHNhQHNhbHNhLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTY3MDM3N30.iR-2vyAeAZX11u7AOKXCgNJYey-_eg58E8zZVgu4Z7Y",
      },
    })
    .then((res) => {
      if (res.status === 201) {
        swal({
          title: "Saved!",
          text: "Berhasil Menambah Data",
          icon: "success",
          timer: 2000,
        })
        navigate("/dashboard/cars")
      }
    })
    .catch((err) => console.log(err.message))
}