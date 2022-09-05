import React, {useState} from 'react'; //{useState,useEffect}
import Home from "./Home/Home";


const Main = () => {

    // const [name,setName] = useState('Artyom');
    //
    // setTimeout (()=>{
    //     setName('NurlanPalvanAKE')
    // },4000)

          // useState


    // const [count,setCount] = useState(0)
    //
    // useEffect(()=>{
    //     console.log('Привет')
    // },[count])



    // принимает 3 параметра useEffect
    // 1 - просто пусто, будет показывать каждый рендер
    // 2 - [] пустой массив , отработает один раз и всё
    // 3 - [name] привязывает useEffect к элементу и только показывает рендер его
    const [basket,setBasket] = useState([])
    return (
        <main>
            {/*<h2>{count}</h2>
            <button type='button' onClick={()=>{
                setCount(count + 1)}}>+</button>
            <button type='button' onClick={()=>{
                setCount(count - 1)}}>-</button>*/}


            <Home basket={basket} setBasket={setBasket}/>
        </main>
    );
};

export default Main;