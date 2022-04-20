import React from 'react'
import { container, row, col, button } from 'react-bootstrap'; 

const Button = ({color, text}) => {
  return (
    <>
        <button type="button" class="btn btn-primary">{text}</button>
    </>
  )
}

export default Button