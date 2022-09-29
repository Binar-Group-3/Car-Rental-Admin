import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

// components
import EditCarButton from "./EditForm/EditCarButton"
import EditCarForm from "./EditForm/EditCarForm"

// functions
import { getCar } from "../../redux/actions/carAction"

const EditCarComp = () => {
  // state
  const [carName, setCarName] = useState("")
  const [carPrice, setCarPrice] = useState("")
  const [carImage, setCarImage] = useState("")
  const [carCategory, setCarCategory] = useState("")

  // hook
  const dispatch = useDispatch()
  const param = useParams()

  useEffect(() => {
    const id = param.id
    dispatch(getCar(id))
  }, [dispatch, param.id])

  const props = {
    setCarName,
    setCarPrice,
    setCarImage,
    setCarCategory,
    carName,
    carPrice,
    carImage,
    carCategory,
  }

  return (
    <section className="edit-car-comp">
      <main className="edit-car-comp__container">
        <div className="edit-car-comp__form">
          <EditCarForm {...props} />
          <EditCarButton {...props} />
        </div>
      </main>
    </section>
  )
}

export default EditCarComp
