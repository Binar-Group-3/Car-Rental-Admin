import React from "react";
import CarFilterAll from "./CarFilterButton/CarFilterAll";
import CarFilterLarge from "./CarFilterButton/CarFilterLarge";
import CarFilterMedium from "./CarFilterButton/CarFilterMedium";
import CarFilterSmall from "./CarFilterButton/CarFilterSmall";

const CarFilter = () => {
    return (
        <div className="row w-100 mx-1">
            <div className="col-6 col-sm-1">
                <CarFilterAll />
            </div>
            <div className="col-6 col-sm-1">
                <CarFilterSmall />
            </div>
            <div className="col-6 col-sm-1">
                <CarFilterMedium />
            </div>
            <div className="col-6 col-sm-1">
                <CarFilterLarge />
            </div>
        </div>
    )
}

export default CarFilter;