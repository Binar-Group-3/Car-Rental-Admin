import "./AddCarButton.css"
import {useNavigate} from "react-router-dom";

import { postAddCar } from "../postAddCar";

const AddCarButton = (props) => {

    const { carName, carPrice, carImage, carCategory } = props
    const navigate = useNavigate()

    // func
    const handleGoBack = () => {
        navigate("/dashboard/cars")
    }

    const handleAddCar = () => {
        const data = new FormData()
        data.append("name", carName)
        data.append("category", carCategory)
        data.append("price", carPrice)
        data.append("image", carImage)
        postAddCar(data, navigate)
    }

    return (
        <section className="add-car-button">
            <div className="add-car-button-cancel">
                <button onClick={handleGoBack}>Cancel</button>
            </div>
            <div className="add-car-button-save">
                <button onClick={() => handleAddCar()}>Add</button>
            </div>
        </section>
    )
}

export default AddCarButton