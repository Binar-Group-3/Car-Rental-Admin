import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getData } from "../../redux/actions/dataAction"
import { NoImage } from "../../assets"
import { Link } from "react-router-dom"
import ButtonDelete from "./ButtonDelete"

const Card = () => {
  const dispatch = useDispatch()
  const { dataUser } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getData())
  }, [])

  const formatCurrency = (number) => {
    let fNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return !!fNumber ? "Rp. " + fNumber : "Harga tidak tersedia"
  }

  return (
    <div className="car-card_container">
      {dataUser.data.map((item) => (
        <>
          <div className="car-card__body">
            <div className="car-card__image">
              <img src = {item.image ? item.image : NoImage} alt="car"/>
            </div>
            <div className="car-card__content">
              <p>{item.name}</p>
              <h4>{`${formatCurrency(item.price)} / hari`}</h4>
              <div className="car-category">
                <p>{item.category}</p>
              </div>
              <div className="car-updated">
                  Updated at {item.updatedAt}
              </div>
              <div className="car-card__button">
                  <ButtonDelete carId = {item.id} />
                  <Link to={`edit-car/${item.id}`}>
                    <button>Edit</button>
                  </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default Card