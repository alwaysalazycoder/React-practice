import './App.css';
import {Navbar} from "./Components/Navbar";
import {ProductList} from "./Components/ProductList";
import {Footer} from "./Components/Footer";
import React,{useState} from "react";

function App() {
  let stylesheet = {
    "min-height" : "66vh"
  }


  const [productList , setproductList] = useState(
    [
      {
        price : 999,
        name : "Samsung glaxay S22",
        quantity : 0
      },
      {
        price : 122,
        name : "Samsung glaxay S23",
        quantity : 0,
      },
      {
        price : 123,
        name : "Samsung glaxay S24" ,
        quantity : 0,
      },
      {
        price : 125,
        name : "Samsung glaxay S25",
        quantity : 0,
      },
      {
        price : 126,
        name : "Samsung glaxay S26",
        quantity : 0,
      },
      {
        price : 127,
        name : "Samsung glaxay S27",
        quantity : 0,
      },
    ])

    let incrementQuantity = (index) =>{
      let newProductList = [...productList];
      newProductList[index].quantity == 10 ? alert("cart limit is 10 ") : newProductList[index].quantity++;
      setproductList(newProductList);
    }
    let decrementQuantity = (index) =>{
      let newProductList = [...productList]; 
      newProductList[index].quantity > 0 ? newProductList[index].quantity-- : ( alert("cart cannot be empty"));
      setproductList(newProductList);

    } 

  return (
    <>
    <Navbar/>
    <main className='container mt-3' style = {stylesheet}>    
      <ProductList productList = {productList} incrementQuantity = {incrementQuantity} decrementQuantity={decrementQuantity}/>
    </main>

    <Footer/>
    </>
  );
}

export default App;
