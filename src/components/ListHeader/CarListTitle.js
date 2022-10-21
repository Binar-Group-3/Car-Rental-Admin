import React from "react";
import {Button} from "react-bootstrap";
import CarBreadcrumb from "./CarBreadcrumb";

const CarListTitle = () => {
    return (
        <div className="row w-100">
                <CarBreadcrumb />
            <div id = "list-car" className="col-6">
                <h1 className='mx-3 my-3'>List Car</h1>
            </div>
            <div className="col-6">
                <Button variant = "primary" size="md" className="position-absolute top-20 end-0 mx-3 my-4">
                    Add New Car
                </Button>
            </div>
        </div>
    )
}

export default CarListTitle;