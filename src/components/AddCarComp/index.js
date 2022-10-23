import React from "react";
import AddHeader from "./AddHeader";
import "./index.css"
import AddCarButton from "./AddForm/AddCarButton";
import AddCarForm from "./AddForm/AddCarForm";

const AddCarComp = () => {
    return (
        <section className="add-car-comp">
            <main className="add-car-comp__container">
                <AddHeader />
                <div className="add-car-comp__form">
                    <AddCarForm />
                    <AddCarButton />
                </div>
            </main>
        </section>
    )
}

export default AddCarComp;