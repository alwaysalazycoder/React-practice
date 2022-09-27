import  Product  from "./Product"

export const ProductList = (props) => {
  
  return (
      props.productList.length > 0 ?
      props.productList.map((product,i) => {
      return <Product product = {product} key = {i} incrementQuantity = {props.incrementQuantity} decrementQuantity = {props.decrementQuantity} index = {i} removeItem = {props.removeItem}/>
    })
    : <h1>No Products in cart ...</h1>
  )
}
