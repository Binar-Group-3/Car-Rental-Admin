import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import { getMockData, getData } from "../../redux/actions/dataAction";
import { NoImage } from "../../assets";
import { Link } from "react-router-dom";

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
                                <div class="inline-flex" role="group">
                                    <button type="button" class="text-red-700 hover:text-white border-2 border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                                    <Link to = {`/edit/${item.id}`}>
                                    <button type="button" class="text-white hover:text-white border-2 border-green-700 bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                ))
            }
      </div>
    )
}

export default Card;