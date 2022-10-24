import React, { useState } from "react";
import AddHeader from "./AddHeader";
import "./index.css";
import AddCarButton from "./AddForm/AddCarButton";
import AddCarForm from "./AddForm/AddCarForm";

const AddCarComp = () => {
  const [carName, setCarName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carImage, setCarImage] = useState("");
  const [carCategory, setCarCategory] = useState(undefined);

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setCarImage(file);
  };

  const props = {
    setCarName,
    setCarPrice,
    onImageUpload,
    setCarCategory,
    carName,
    carPrice,
    carImage,
    carCategory,
  };

  return (
    <section className="add-car-comp">
      <main className="add-car-comp__container">
        <AddHeader />
        <div className="add-car-comp__form">
          <AddCarForm {...props} />
          <AddCarButton {...props} />
        </div>
      </main>
    </section>
  );
};

export default AddCarComp;
