
import React,{ useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { ToastContainer ,toast } from 'react-toastify';

import {Container, Col, Row} from "reactstrap";
import Cart from "./Components/Cart";
import BuyPage from "./Components/BuyPage";


function App(){
      const [cartItem, setCartItem]= useState([]);

    const addCart= item => {

      const isAlreadyAdded= cartItem.findIndex(function(array){
        return array.id === item.id;
      });

    if(isAlreadyAdded !== -1){
        toast("Already Added",{
          type:"error"
        });
        return;
      };
    
      setCartItem([...cartItem,item]);

      
    };

      const buyNow= ()=>{
        setCartItem([]);
        toast("Purchas Complete", {
          type:"success"
        });
      };
      
      const removeItem= item =>{
        setCartItem(cartItem.filter(i => i.id !== item.id )); 
      };
  
    return(

      <Container fluid>
        <ToastContainer/>

        <Row>
          <Col md="8">
            <BuyPage addCart={addCart} />
          </Col>
          <Col md="4">
            <Cart cartItem={cartItem}  buyNow={buyNow} removeItem={removeItem} />
          </Col>
        </Row>
      </Container>

    );
};

export default App;
