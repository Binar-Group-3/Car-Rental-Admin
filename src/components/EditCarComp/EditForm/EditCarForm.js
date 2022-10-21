// style
import "./EditCarForm.css"

import { useSelector } from "react-redux"

const EditCarForm = (props) => {
  const { car } = useSelector((state) => state.car)

  const { setCarName, setCarPrice, onImageUpload, setCarCategory } = props

  return (
    <section className="edit-car-form__container">
      <form>
        <div>
          <label>
            Name/Tipe Mobil<span>*</span>{" "}
          </label>
          <input
            onChange={(e) => setCarName(e.target.value)}
            type="text"
            placeholder={car.name}
            required
          />
        </div>
        <div>
          <label>
            Harga<span>*</span>
          </label>
          <input
            onChange={(e) => setCarPrice(e.target.value)}
            type="number"
            min="0"
            required
            placeholder={car.price}
          />
        </div>
        <div className="form-upload">
          <label>
            Foto<span>*</span>
          </label>
          <input onChange={onImageUpload} type="file" required />
        </div>
        <div>
          <label>
            Kategori<span>*</span>
          </label>
          <select onChange={(e) => setCarCategory(e.target.value)} required>
            <option selected hidden disabled>
              Pilih Kategori Mobil
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div>
          <p>Created at</p>
          <small>-</small>
        </div>
        <div>
          <p>Updated at</p>
          <small>-</small>
        </div>
      </form>
    </section>
  )
}

export default EditCarForm
