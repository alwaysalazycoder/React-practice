import React from 'react'


export const Footer = () => {
  let stylesheet = {
    border : "4px solid black",
  }
  return (

    <div className="card" style = {stylesheet}>
      <div className="card-header">Footer</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>A well-known quote, contained in a blockquote element.</p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
    </div>

  )
}
