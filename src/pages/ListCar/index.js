import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getData } from "../../redux/actions/dataAction"
import Card from "../../components/Card";
import ModalDelete from "../../components/Card/ModalDelete";

const ListCar = () => {
    const dispatch = useDispatch()
    const { dataUser } = useSelector((state) => state)

    const [show, setShow] = useState(false);
    const [carId, setCarId] = useState(null);

    const modalDeleteClose = () => setShow(false);
    const modalDeleteShow = (id) => {
        setShow(true);
        setCarId(id);
    };

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <>
            <div style = {{ height: 'auto', overflowX: 'hidden' }}>
                <div className='row' style = {{ padding: 10 }}>
                    {dataUser.data.map((item) => (
                        <div className='col-md-3' key={item.id} style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 8, marginBottom: 40, justifyContent: 'center'}}>
                            <Card item={item} handleDelete={modalDeleteShow} />
                        </div>
                    ))}
                </div>
            </div>
            <ModalDelete show={show} handleClose={modalDeleteClose} carId={carId}/>
        </>
    )
}

export default ListCar;