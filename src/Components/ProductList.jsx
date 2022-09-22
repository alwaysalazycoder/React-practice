import  Product  from "./Product"
import React, { useState } from 'react'

export const ProductList = (props) => {
  
  return (
      props.productList.map((product,i) => {
      return <Product product = {product} key = {i} incrementQuantity = {props.incrementQuantity} decrementQuantity = {props.decrementQuantity} index = {i}/>
    })
  )
}
