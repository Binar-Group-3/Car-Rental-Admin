// style
import "./EditBreadcrumb.css"

import { Link } from "react-router-dom"

const EditBreadcrumb = () => {
  return (
    <section className="edit-breadcrumb">
      <div className="edit-breadcrumb-container">
        <p>Cars</p>
        <i className="uil uil-angle-right-b"></i>
        <div className="link">
          <Link to="/dashboard/cars">List Car</Link>
        </div>
        <i className="uil uil-angle-right-b"></i>
        <div className="edit-link">
          <Link to="#">Edit Car</Link>
        </div>
      </div>
    </section>
  )
}

export default EditBreadcrumb
