import React from "react"
import CarFilter from "./CarFilter"
import CarListTitle from "./CarListTitle"

const ListHeader = (props) => {
  return (
    <>
      <CarListTitle />
      <CarFilter {...props} />
    </>
  )
}

export default ListHeader
