import React from 'react';
import './basket.scss'

const Basket = ({active,setActive,basket,setBasket}) => {
    return (
        <div onClick={(e)=>{
                if (e.target.className.includes('active')){
                    setActive(false)
                }
        }} className={`overlay2 ${active ? 'overlay2-active': ''}`}>
            <div className="popup2">
                <h2>Корзина</h2>
                {
                    basket.map((item)=>(
                        <div key={item.id} className="popup2-card">
                            <img src={item.image} alt="" className="popup2-img"/>
                            <div className="popup2-info">
                                <p className="popup2-name">{item.title}</p>
                                <p className="popup2-price">{item.price}</p>
                            </div>
                            <button className="popup2-btn">x</button>
                        </div>
                    ))
                }

                <div className="popup-total">
                    <div className="popup-total-info">
                        <p className="popup-total-sun">Итого:</p>
                        <p className="popup-total-price">{basket.reduce((acc,rec)=>([+acc + +rec.price]),0)}$</p>
                    </div>

                    <div className="popup-total-info">
                        <p className="popup-total-sun ">Налог 5%:</p>
                        <p className="popup-total-price">19500$</p>
                    </div>
                    <button className="popup-total-btn">Оформить заказ</button>
                </div>

            </div>
        </div>
    );
};

export default Basket;