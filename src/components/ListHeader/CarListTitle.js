import React from "react";
import {Button} from "react-bootstrap";
import CarBreadcrumb from "./CarBreadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"

const CarListTitle = () => {
    return (
        <div className="row w-100">
                <CarBreadcrumb />
            <div id = "list-car" className="col-6">
                <h1 className='mx-3 my-3'>List Car</h1>
            </div>
            <div className="col-6">
                <Link to = {`/dashboard/cars/add`}>
                    <Button variant = "default" size="md" style = {{ color: "white", background: "#0D28A6" }} className="position-absolute top-20 end-0 mx-3 my-4">
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: 10 }} />Add New Car
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CarListTitle;