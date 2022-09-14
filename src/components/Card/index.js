import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import { getMockData, getData } from "../../redux/actions/dataAction";
import { NoImage } from "../../assets";

const Card = () => {
    const dispatch = useDispatch();
    const {dataUser} = useSelector((state)=> state);
    
    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
      <div>
           {
                dataUser.data.map(item => (
                    <div style={{ padding: 10 }}>
                            <div className="card" style={{padding: 25}}>
                                {!!item.image ? <img className="rounded-t-lg" style = {{ maxHeight: 160, maxWidth: 270 }} src = {item.image} alt = "gambar-mobil"/> : <img className="rounded-t-lg" style = {{ maxHeight: 160, maxWidth: 270 }} src = {NoImage} alt = "no-image"/>}
                                <div style={{fontFamily: 'arial', fontSize: 16, fontWeight: 700, fontStyle: 'normal', marginBottom: 8}}>{item.name}</div>    
                                <p>{item.price}</p>
                                <p>{item.category}</p>
                                <div className="inline-flex justify-content-center py-2 px-3 text-sm font-bold text-center text-white bg-red-500 w-100 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none">
                                    Delete
                                </div >
                                <div className="inline-flex justify-content-center py-2 px-3 text-sm font-bold text-center text-white bg-green-500 w-100 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none">
                                    Edit
                                </div >
                            </div>
                    </div>
                ))
            }
      </div>
    )
}

export default Card;