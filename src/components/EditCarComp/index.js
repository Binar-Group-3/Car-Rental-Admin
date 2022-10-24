import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

// style
import "./index.css"

// components
import EditCarButton from "./EditForm/EditCarButton"
import EditCarForm from "./EditForm/EditCarForm"
import EditHeader from "./EditHeader"

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
    window.scroll(0, 0)
  }, [dispatch, param.id])

  const onImageUpload = (e) => {
    const file = e.target.files[0]
    setCarImage(file)
  }

  const props = {
    setCarName,
    setCarPrice,
    onImageUpload,
    setCarCategory,
    carName,
    carPrice,
    carImage,
    carCategory,
  }

  return (
    <section className="edit-car-comp">
      <main className="edit-car-comp__container">
        <EditHeader />
        <div className="edit-car-comp__form">
          <EditCarForm {...props} />
          <EditCarButton {...props} />
        </div>
      </main>
    </section>
  )
}

export default EditCarComp
