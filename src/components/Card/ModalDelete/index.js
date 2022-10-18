import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalImg } from '../../../assets';
import axios from "axios";
import swal from "sweetalert";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ModalDelete = (props) => {
    const { handleOpen, handleClose, carId, open} = props

    const handleDelete = (id) => {
        console.log("Id yg terhapus", carId);
        axios
        .delete(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
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
        <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx = {style}>
                <img src = {ModalImg} alt = "car" />
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        Menghapus data mobil
                    </Typography>
                    <p>Setelah dihapus, data mobil tidak dapat dikembalikan, Yakin ingin
                    menghapus?</p>
                <button onClick={() => handleDelete(carId)}>Ya</button>
                <button onClick={handleOpen}>Tidak</button>
            </Box>
        </Modal>
    )
}

export default ModalDelete;