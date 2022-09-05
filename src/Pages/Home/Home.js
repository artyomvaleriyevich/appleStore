import React, {useEffect, useState} from 'react';
import './home.scss'
import Product from "../../components/Product";
import Popup from "../../components/Popup/Popup";
import axios from "../../axios";
import SortSelect from "../../components/Select/SortSelect";

const Home = ({basket,setBasket}) => {

    const [count,setCount] = useState(1)
    const [search,setSearch] = useState('')
    const [active,setActive]= useState(false)
    const [products,setProducts] = useState([])
    const [sort,setSort] = useState('')

    let productFilterAfterSearch = products.filter((item)=>item.title.toUpperCase().includes(search.toUpperCase())).length

    const getAllProduct = ()=>{
        axios('/products')
            .then(({data})=> setProducts(data.reverse()))
    }



    useEffect(()=>{
        getAllProduct()
    }, [])

    return(
        <section className='home'>
            <div className="container">
                <div className="home-content">
                    <div className="home-top">
                        <h2 className='home-title'>Check also</h2>
                        <button onClick={()=>setActive(true)} type='button' className="popup-btn">добавить товар</button>

                        <SortSelect  sort={sort} setSort={setSort}/>

                       <div className="home-right">
                           <input value={search} className='home-search' type="search" onChange={(e)=>{
                               setSearch(e.target.value)
                               setCount(1)
                           }}/>
                           <a className='home-link' href="">See all > </a>
                       </div>
                    </div>

                    <div className="home-row">

                        {
                            products.sort((a,b)=>{
                                if (sort === 'small'){
                                    return a.price  - b.price
                                }
                                if(sort === 'big'){
                                    return b.price - a.price
                                }
                            }).filter((item)=>item.title.toUpperCase().includes(search.toUpperCase())).filter((item,idx)=>idx < 4 * count).map((item)=>(
                                <React.Fragment key={item.id}>
                                    <Product basket={basket} setBasket={setBasket} getAllProduct={getAllProduct} item={item}/>
                                </React.Fragment>
                            ))
                        }
                    </div>

                    {
                        !productFilterAfterSearch && <h2 className='home-undefined'>По данному запросу ничего не найдено</h2>

                    }

                    {
                        count * 4 >= products.length ? <button type='button' onClick={()=>setCount(1)}>
скрыть
                        </button> :  <button style={{display: count * 4 >= productFilterAfterSearch ? 'none' : 'inline-block'}} onClick={()=> setCount(count + 1)} type='button'>Показать ещё</button>
                    }

                    {
                        productFilterAfterSearch ? <span>Показано {count * 4 >= productFilterAfterSearch ? productFilterAfterSearch : 4 * count} из {
                                productFilterAfterSearch
                            }
                    </span> : ''
                    }
                </div>
            </div>
            <Popup getAllProduct={getAllProduct} active={active} setActive={setActive}/>
        </section>
    );
};

export default Home;

