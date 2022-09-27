import './App.css';
import {Navbar} from "./Components/Navbar";
import {ProductList} from "./Components/ProductList";
import {Footer} from "./Components/Footer";
import React,{useState} from "react";
import AddItem from './Components/AddItem';

function App() {
  let stylesheet = {
    "min-height" : "66vh"
  }

  const [totalAmount, settotalAmount] = useState(0);
  const [badge , setbadge] = useState(0);
  const [productList , setproductList] = useState(
    [
      {
        price : 999,
        name : "Samsung galaxy S22",
        quantity : 0
      },
      {
        price : 129,
        name : "Samsung galaxy S23",
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
      let newtotalAmount = totalAmount;
      newProductList[index].quantity === 10 ? alert("cart limit is 10 ") : newProductList[index].quantity++;
      setproductList(newProductList);
      newtotalAmount += newProductList[index].price;
      let badgedata = 0;
      newProductList.map((products) =>{
        badgedata += products.quantity;
      })
      setbadge(badgedata)
      settotalAmount(newtotalAmount);
    }
    let decrementQuantity = (index) =>{
      let newProductList = [...productList]; 
      let newtotalAmount = totalAmount;
      if(newProductList[index].quantity > 0){
        newProductList[index].quantity--;
        setproductList(newProductList);
        newtotalAmount -= newProductList[index].price;
        let badgedata = badge - 1;
        
        setbadge(badgedata)
      } 
      else{
        newProductList[index].quantity = 0;
        setproductList(newProductList);
        alert("Cart cannot be empty");
      }
    
      settotalAmount(newtotalAmount);

    } 

    let reset = () =>{
      let newProductList = [...productList];
      newProductList.map((products) => {
        products.quantity = 0;
      })
      let newtotalAmount = 0;
      settotalAmount(newtotalAmount);
      setproductList(newProductList);
    }

    let paynow = () =>{
      if(totalAmount === 0){
        alert("Please select any item you can't checkout with empty cart..")
      }
      else{
        alert("Are you sure you want to checkout..");
      }
    }

    let removeItem = (index) => {
      let newproductList = [...productList];
      let newtotalAmount = totalAmount;
        newtotalAmount = newtotalAmount - (newproductList[index].quantity * newproductList[index].price);
        newproductList.splice(index,1);
        setproductList(newproductList);
        settotalAmount(newtotalAmount);
    }
    let addItem = (name,price) => {
      let newProductList = [...productList];
      newProductList.push({
        name : name,
        price : price,
        quantity : 0
      });
      setproductList(newProductList)
    }

  return (
    <>
    <Navbar badge = {badge}/>
    <main className='container mt-3' style = {stylesheet}>  
      <AddItem addItem = {addItem}/>  
      <ProductList productList = {productList} incrementQuantity = {incrementQuantity} decrementQuantity={decrementQuantity} removeItem = {removeItem}/>
    </main>

    <Footer totalAmount = {totalAmount} reset = {reset} paynow = {paynow}/>  
    </>
  );
}

export default App;
