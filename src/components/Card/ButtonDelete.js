const ButtonDelete = ({carId, onClick}) => {
    
    return (
        <div>
            <button onClick={() => { onClick(carId) }} type="button" className="btn btn-outline-danger">
                Delete
            </button>
        </div>
    )
}

export default ButtonDelete;