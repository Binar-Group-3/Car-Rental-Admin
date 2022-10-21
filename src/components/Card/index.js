import React from "react"
import { Link } from "react-router-dom"
import { NoImage } from "../../assets"
import ButtonDelete from "./ButtonDelete"
import ButtonEdit from "./ButtonEdit"

const Card = ({item, handleDelete}) => {

  const formatCurrency = (number) => {
    let fNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return !!fNumber ? "Rp. " + fNumber : "Harga tidak tersedia"
  }

  return (
    <>
      <div className="card" style={{ width: '100%', height: 'auto' }} >
        <img className="card-image-top" src={item.image ? item.image : NoImage} alt="car" style={{ width: '100%' }} />
        <div className="card-body" style={{ height: 'auto' }}>
          <h5 class="card-title">{item.name}</h5>
          <h6 class="card-subtitle mb-2">{`${formatCurrency(item.price)} / hari`}</h6>
          <p class="card-text">{item.category}</p>
          <p class="card-text">Updated at {item.updatedAt}</p>
          <div class="d-flex justify-content-between">
            <ButtonDelete carId={item.id} onClick={handleDelete} />
            <Link to={`/dashboard/cars/edit-car/${item.id}`}>
              <ButtonEdit />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card