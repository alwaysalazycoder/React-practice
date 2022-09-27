import React from 'react'

export const Navbar = (props) => {
  return (
    <>


      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Cart
            &nbsp;
            {props.badge}
          </a>
          
        </div>
        
      </nav>

    </>

  )
}
