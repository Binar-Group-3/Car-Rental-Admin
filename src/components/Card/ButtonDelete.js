import {Button} from "react-bootstrap";

const ButtonDelete = ({carId, onClick}) => {
    
    return (
            <Button onClick={() => { onClick(carId) }} type="button" variant="outline-danger" size="lg" className="w-100">
                Delete
            </Button>
    )
}

export default ButtonDelete;