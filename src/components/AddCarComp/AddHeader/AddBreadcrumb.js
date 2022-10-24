import "./AddBreadCrumb.css"

import { Link } from "react-router-dom"

const AddBreadCrumb = () => {
    return (
        <section className="add-breadcrumb">
            <div className="add-breadcrumb-container">
                <p>Cars</p>
                <i className="uil uil-angle-right-b"></i>
                <div className="link">
                <Link to="/dashboard/cars">List Car</Link>
                </div>
                <i className="uil uil-angle-right-b"></i>
                <div className="add-link">
                <Link to="#">Add New Car</Link>
                </div>
            </div>
        </section>
    )
}

export default AddBreadCrumb;