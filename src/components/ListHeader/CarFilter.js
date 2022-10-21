import React from "react";
import CarFilterAll from "./CarFilterButton/CarFilterAll";
import CarFilterLarge from "./CarFilterButton/CarFilterLarge";
import CarFilterMedium from "./CarFilterButton/CarFilterMedium";
import CarFilterSmall from "./CarFilterButton/CarFilterSmall";

const CarFilter = () => {
    return (
        <>
            <CarFilterAll />
            <CarFilterSmall />
            <CarFilterMedium />
            <CarFilterLarge />
        </>
    )
}

export default CarFilter;