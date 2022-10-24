import React from "react"
import { Link } from "react-router-dom"
import { NoImage } from "../../assets"
import ButtonDelete from "./ButtonDelete"
import { Button } from "react-bootstrap"
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faUser, faClockFour } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import "./CardContent.css"

library.add(faEdit, faUser)

const Card = ({ item, handleDelete }) => {
  const formatCurrency = new Intl.NumberFormat ('en-Us', {
    style: 'currency',
    currency: 'IDR'
  })

  return (
    <>
      <div
        className="card shadow m-3"
        style={{ width: "100%", maxWidth: 351, height: "auto" }}
      >
        <div className="d-flex justify-content-center w-100 p-2">
          <img
            className="image-car"
            src={item.image ? item.image : NoImage}
            alt="car"
            style={{ maxHeight: 300, width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="card-body" style={{ height: "auto" }}>
          <h5 className="car-name" style={{ fontSize: 14 }}>
            {item.name ? item.name : "Nama tidak tersedia"}
          </h5>
          <strong>
            <p
              className="car-prize"
              style={{ fontSize: 16 }}
            >{`${formatCurrency.format(item.price)} / hari`}</p>
          </strong>
          <p className="car-category" style={{ fontSize: 14 }}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: 10 }} />{" "}
            {item.category ? item.category : "Kategori tidak tersedia"}
          </p>
          <p className="car-updated" style={{ fontSize: 14 }}>
            <FontAwesomeIcon icon={faClockFour} style={{ marginRight: 10 }} />{" "}
            Updated at {moment(item.updatedAt).format("D MMM YYYY, HH.mm")}
          </p>
          <div className="row gx-2">
            <div className="col-6">
              <ButtonDelete carId={item.id} onClick={handleDelete} />
            </div>
            <div className="col-6">
              <Link to={`/dashboard/cars/edit-car/${item.id}`}>
                <Button variant="success" size="md" className="w-100">
                  <FontAwesomeIcon icon="edit" /> Edit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
