import axios from "axios"
import swal from "sweetalert"

export const fetchEditCar = (data, navigate, id) => {
  axios
    .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, data, {
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbHNhQHNhbHNhLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTY3MDM3N30.iR-2vyAeAZX11u7AOKXCgNJYey-_eg58E8zZVgu4Z7Y",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        swal({
          title: "Saved!",
          text: "Berhasil Mengubah Data",
          icon: "success",
          timer: 2000,
        })
        navigate(-1)
      }
    })
    .catch((err) => console.log(err.message))
}
