import { useState } from "react";
import ModalDelete from "./ModalDelete";

const ButtonDelete = ({carId}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open)
        console.log("id yg dipilih", carId)
    };
    const handleClose = () => setOpen(false);
    
    return (
        <div>
        <button onClick={handleOpen} type="button" className="button-delete">
            <p>Delete</p>
        </button>
        {open && <ModalDelete open = {open}carId = {carId} handleOpen = {handleOpen} handleClose = {handleClose}/>}
        </div>
    )
}

export default ButtonDelete;