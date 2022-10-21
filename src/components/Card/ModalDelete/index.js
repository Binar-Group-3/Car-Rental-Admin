import { ModalImg } from '../../../assets';
import axios from "axios";
import swal from "sweetalert";
import { Modal, Button } from "react-bootstrap"

const ModalDelete = ({show, handleClose, carId}) => {

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
        <Modal show={show} onHide={handleClose}>
            <Modal.Body className="d-flex justify-content-center align-items-center flex-column p-5">
                <img src={ModalImg} alt="car" />
                <h3>Menghapus Data Mobil?</h3>
                <p>
                Setelah dihapus, data mobil tidak dapat dikembalikan, Yakin ingin menghapus?
                </p>
                <div className="modal-button">
                <Button onClick={() => handleDelete(carId)} className="mx-2">
                    Ya
                </Button>
                <Button onClick={handleClose} variant="outline-primary" className="mx-2">
                    Tidak
                </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalDelete;