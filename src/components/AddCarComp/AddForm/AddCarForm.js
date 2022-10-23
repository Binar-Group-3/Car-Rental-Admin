import "./AddCarForm.css"

const AddCarForm = () => {
    return (
        <section className="add-car-form__container">
                <form>
                    <div>
                        <label>
                        Name/Tipe Mobil<span>*</span>{" "}
                        </label>
                        <input
                        type="text"
                        required
                        />
                    </div>
                    <div>
                        <label>
                        Harga<span>*</span>
                        </label>
                        <input
                        type="number"
                        min="0"
                        required
                        />
                    </div>
                    <div className="form-upload">
                        <label>
                        Foto<span>*</span>
                        </label>
                        <input type="file" required />
                    </div>
                    <div>
                        <label>
                        Kategori<span>*</span>
                        </label>
                        <select required>
                        <option selected hidden disabled>
                            Pilih Kategori Mobil
                        </option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        </select>
                    </div>
                </form>
          </section>
    )
}

export default AddCarForm;