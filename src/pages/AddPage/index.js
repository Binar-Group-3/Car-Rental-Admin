import React from "react";
import AddCarComp from "../../components/AddCarComp";

const AddPage = () => {
  return (
    <React.Suspense fallback={<p>Loading application...</p>}>
      <main>
        <section className="add-car-page">
          <AddCarComp />
        </section>
      </main>
    </React.Suspense>
  );
};

export default AddPage;
