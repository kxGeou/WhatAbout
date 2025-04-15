import React from 'react'
import Heart from '../assets/heart.png'
import Flower from '../assets/flower.png'
function Header({type}) {
  return (
    <header className='text-center flex flex-col justify-center items-center gap-2'>
      <img src={type == "couple" ? Heart : Flower} alt="qwe" />
      <h2 className='text-[1.25rem] font-medium'>Nie wiesz, co dziś robić?</h2>
      <p className='w-[25rem] opacity-75 font-light'>Losuj pomysł na randkę lub wspólną aktywność! Wybierz filtry, kliknij i… gotowe.</p>
    </header>
  )
}

export default Header
