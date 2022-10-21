import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getData } from "../../redux/actions/dataAction"
import Card from "../../components/Card";

const ListCar = () => {
    const dispatch = useDispatch()
    const { dataUser } = useSelector((state) => state)

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <>
            <div style = {{ height: 'auto', overflowX: 'hidden' }}>
                <div className='row' style = {{ padding: 10 }}>
                    {dataUser.data.map((item) => (
                        <div className='col-md-3' key={item.id} style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 8, marginBottom: 40, justifyContent: 'center'}}>
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListCar;