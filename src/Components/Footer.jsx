import React from 'react'


export const Footer = (props) => {
  
  return (


    <div className="row  bottom-scrollable mt-5">
      <span className='col-1'></span>
      <button className='btn btn-danger col-2' onClick = {() => {props.reset()}}>Reset</button>
      <div className='col-5 bg-dark text-white text-center' >
        {props.totalAmount}
      </div>
      <button className='btn btn-primary col-2' onClick = {() => {props.paynow()}} >Pay Now !</button>
    </div>

  

  )
}
