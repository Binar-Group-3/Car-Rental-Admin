// style
import "./EditCarButton.css"

import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

// fetch
import { fetchEditCar } from "../fetchEditCar"

const EditCarButton = (props) => {
  const { carName, carPrice, carImage, carCategory } = props

  //   func
  const navigate = useNavigate()
  const param = useParams()
  const handleGoBack = () => {
    navigate(-1)
  }
  const handleEditCar = () => {
    const id = param.id
    const data = new FormData()
    data.append("name", carName)
    data.append("category", carCategory)
    data.append("price", carPrice)
    data.append("image", carImage)
    fetchEditCar(data, navigate, id)
  }

  return (
    <section className="edit-car-button">
      <div className="edit-car-button-cancel">
        <button onClick={handleGoBack}>Cancel</button>
      </div>
      <div className="edit-car-button-save">
        <button onClick={handleEditCar}>Save</button>
      </div>
    </section>
  )
}

export default EditCarButton
