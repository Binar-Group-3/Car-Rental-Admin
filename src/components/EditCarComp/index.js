import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

// func

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
    // dispatch(handleCar(id))
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
      <main className="edit-car-comp"></main>
    </section>
  )
}
