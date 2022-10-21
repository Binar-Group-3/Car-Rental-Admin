import React from "react";
import CarFilter from "./CarFilter";
import CarListTitle from "./CarListTitle";

const ListHeader = () => {
    return (
        <>
            <CarListTitle />
            <CarFilter />
        </>
    )
}

export default ListHeader;