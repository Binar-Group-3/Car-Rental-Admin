import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

//# comp
import EditCarComp from "../../components/EditCarComp"

const EditPage = () => {
  //   const user = localStorage.getItem("token")
  //   const { showNav } = useSelector((state) => state.showNav)

  return (
    <>
      <main>
        {/* <Header /> */}
        {/* <Sidebar /> */}
        <section className="edit-car-page">
          <EditCarComp />
        </section>
      </main>
    </>
  )
}

export default EditPage
