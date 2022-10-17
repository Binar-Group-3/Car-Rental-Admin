import { ModalImg } from '../../../assets';
import axios from "axios";
import swal from "sweetalert";

const ModalDelete = (props) => {
    const { handleOpen, handleClose, carId, open} = props

    const handleDelete = (id) => {
        console.log("Id yg terhapus", carId);
        axios
        .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,{
            headers: {
              "Content-Type": "Application/json",
              "accept": "Application/json",
              "access_token": 
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbHNhQHNhbHNhLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTY3MDM3N30.iR-2vyAeAZX11u7AOKXCgNJYey-_eg58E8zZVgu4Z7Y"
            }})
        .then((res)=> {
            console.log(res.status);
            console.log(res);
            if (res.status === 200) {
                swal({
                    title: "Deleted!",
                    text: "Data berhasil dihapus",
                    icon: "success",
                    timer: 2000,
                })
                handleClose()
            }
        })
        .catch((err) => console.log(err.message))
    }

    return (
        <div className="modal-delete__backdrop">
            <div className="modal">
                <div className="modal-content">
                    <img src = {ModalImg} alt="car"/>
                    <h3>Menghapus Data Mobil?</h3>
                    <p>
                    Setelah dihapus, data mobil tidak dapat dikembalikan, Yakin ingin menghapus?
                    </p>
                <div className="modal-button">
                    <button onClick={() => handleDelete(carId)}>
                        Ya
                    </button>
                    <button onClick={handleOpen}>
                        Tidak
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete;