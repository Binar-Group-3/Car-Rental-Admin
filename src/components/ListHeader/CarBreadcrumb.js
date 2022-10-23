import React from "react";

const CarBreadcrumb = () => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="mx-3 my-3 breadcrumb">
                    <li className="breadcrumb-item">List Car</li>
                    <li className="breadcrumb-item active" aria-current="page"><a href="#list-car">List Car</a></li>
                </ol>
            </nav>
        </div>
    )
}

export default CarBreadcrumb;