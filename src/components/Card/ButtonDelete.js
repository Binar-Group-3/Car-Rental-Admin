import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"

const ButtonDelete = ({ carId, onClick }) => {
  return (
    <Button
      onClick={() => {
        onClick(carId)
      }}
      variant="outline-danger"
      size="md"
      className="w-100"
    >
      <FontAwesomeIcon icon={faTrashAlt} /> Delete
    </Button>
  )
}

export default ButtonDelete
