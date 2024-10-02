import { useState } from 'react'
import './style.css'

function MyForm() {
  return (

    <form id='container'>
      <label htmlFor="in" class='label'>Nome:</label>
      <input type="text" id="in" placeholder='Digite seu nome'/>
      
      <label htmlFor="in" class='label'>Idade:</label>
      <input type="number" id="in" placeholder='Digite sua idade'/>
    </form>

  )
}

export default MyForm