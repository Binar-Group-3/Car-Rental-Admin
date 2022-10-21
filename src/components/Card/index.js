import React from "react"
import { Link } from "react-router-dom"
import { NoImage } from "../../assets"
import ButtonDelete from "./ButtonDelete"
import ButtonEdit from "./ButtonEdit"

const Card = ({item}) => {

  const formatCurrency = (number) => {
    let fNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return !!fNumber ? "Rp. " + fNumber : "Harga tidak tersedia"
  }

  return (
    <div className="card-list-container">
        <>
          <div className="card">
            <div className="card-image">
              <img src = {item.image ? item.image : NoImage} alt="car"/>
            </div>
            <div className="card-content">
              <p>{item.name}</p>
              <h4>{`${formatCurrency(item.price)} / hari`}</h4>
              <div className="card-category">
                <p>{item.category}</p>
              </div>
              <div className="card-updated">
                  Updated at {item.updatedAt}
              </div>
              <div className="card-button">
                  <ButtonDelete carId = {item.id} />
                  <Link to={`edit-car/${item.id}`}>
                  <ButtonEdit />
                  </Link>
              </div>
            </div>
          </div>
        </>
    </div>
  )
}

export default Card