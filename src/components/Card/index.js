import React from "react"
import { Link } from "react-router-dom"
import { NoImage } from "../../assets"
import ButtonDelete from "./ButtonDelete"
import {Button} from "react-bootstrap";
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(faEdit);

const Card = ({ item, handleDelete }) => {
  const formatCurrency = (number) => {
    let fNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return !!fNumber ? "Rp. " + fNumber : "Harga tidak tersedia"
  }

  return (
    <>
      <div className="card" style={{ width: '100%', maxwidth: 351, height: 'auto' }} >
        <img className="card-image-top" src={item.image ? item.image : NoImage} alt="car" style={{ width: '100%' }} />
        <div className="card-body" style={{ height: 'auto' }}>
          <h5 class="card-title">{item.name}</h5>
          <h6 class="card-subtitle mb-2">{`${formatCurrency(
            item.price
          )} / hari`}</h6>
          <p class="card-text">{item.category}</p>
          <p class="card-text">Updated at {moment(item.updatedAt).format("D MMM YYYY, HH.mm")}</p>
            <div className="row w-100">
                <div className="col-6">
                    <Link to={`/dashboard/cars/edit-car/${item.id}`}>
                        <Button variant = "success" size = "lg" className="w-100">
                          <FontAwesomeIcon icon="edit" /> Edit
                        </Button>
                    </Link>
                </div>
                <div className="col-6">
                    <ButtonDelete carId={item.id} onClick={handleDelete} />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
