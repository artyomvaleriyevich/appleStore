import React, {useState} from "react";
import Header from "./Layot/Header/Header";
import Main from "./Pages/Main";
import Footer from "./Layot/Footer/Footer";
import './App.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [basket,setBasket] = useState([])

  return (
    <div className="App">
      <Header basket={basket} setBasket={setBasket}/>
      <Main/>
      <Footer/>
        <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  );
}

export default App;
