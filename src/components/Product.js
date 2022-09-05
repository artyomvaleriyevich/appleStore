import React from 'react';
import './product.scss'
import axios from "../axios";
import {toast} from "react-toastify";


const Product = ({getAllProduct , item,basket,setBasket}) => {

    const deleteProductHandler = (id)=>{
        axios.delete(`/products/${id}`)
            .then(()=>{
                getAllProduct()
                toast('Добавил')
            }).catch(()=>toast('Не удалось'))
    }

    const {title, id , price , image} = item

    return (
        <div className="home-card">
            <img className='home-card-image' src={image} alt=""/>
            <p className="home-card-title">{title}</p>
            <p className="home-card-price">{price > 0 ? `${price}.00` : 'Free*'}</p>
            <div className='home-card-btns'>
                <button disabled={basket.findIndex((el)=>(el.id === item.id) > -1)} onClick={()=>setBasket(...basket,item)} type='button' style={{background: price <= 0 && 'orange'}} className="home-card-btn">{price > 0 ? 'Buy' : 'Apply'}</button>
                <button onClick={()=>deleteProductHandler(id)} type='button' style={{background: "red"}} className="home-card-btn">Delete</button>
            </div>
        </div>
    );
};

export default Product;