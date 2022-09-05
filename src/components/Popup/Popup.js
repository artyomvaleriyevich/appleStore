import React from 'react';
import {ImCross} from 'react-icons/im'
import axios from "../../axios";
import {toast } from 'react-toastify';

const Popup = ({active,setActive,getAllProduct}) => {

    const addProductHandler = (e)=>{
        e.preventDefault()
        axios.post('/products',{
            image:e.target[0].value,
            title:e.target[1].value,
            price:e.target[2].value
        }).then(()=>{
            getAllProduct()
            setActive(false)
            toast('Ты успешно добавил товар')
            e.target[0].value = ''
            e.target[1].value = ''
            e.target[2].value = ''
        }).catch(()=>toast('Ты не смог добавить товар'))
    }

    return (
        <div onClick={(e)=>{
            if (e.target.classList.contains('overlay')){
                setActive(false)
            }
        }} className={`overlay ${active ? 'overlay_active':''}`}>
            <form className="popup" onSubmit={(e)=>addProductHandler(e)}>
                <span onClick={()=>setActive(false)} className='popup-close'><ImCross/></span>
                <label className='popup-label' htmlFor="img">Фотография:</label>
                <input className='popup-input' id='img' type="text"/>

                <label className='popup-label' htmlFor="title">Название:</label>
                <input className='popup-input' id='title' type="text"/>

                <label className='popup-label' htmlFor="price">Цена:</label>
                <input className='popup-input' id='price' type="text"/>
                <button type='submit' className="popup-btn">Добавить товар</button>
            </form>
        </div>
    );
};

export default Popup;