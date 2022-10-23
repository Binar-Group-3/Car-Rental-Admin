import "./AddCarButton.css"

const AddCarButton = () => {
    return (
        <section className="add-car-button">
            <div className="add-car-button-cancel">
                <button>Cancel</button>
            </div>
            <div className="add-car-button-save">
                <button>Add</button>
            </div>
        </section>
    )
}

export default AddCarButton