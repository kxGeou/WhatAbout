import React from 'react'
import Heart from '../assets/heart.png'
import Flower from '../assets/flower.png'
function Header({type}) {
  return (
    <header className='text-center flex flex-col justify-center items-center gap-2'>      
      {type == "no-filter" ? <span className='w-12 h-12'><i className="fa-solid fa-circle-question text-blue-500 text-[2rem]"></i></span> : <span className='w-12 h-12 flex justify-center items-center'><img src={type == "couple" ? Heart : Flower} alt="qwe" /></span>}
      <h2 className='text-[1.25rem] font-medium'>Nie wiesz, co dziś robić?</h2>
      <p className='w-[25rem] opacity-75 font-light'>Losuj pomysł na randkę lub wspólną aktywność! Wybierz filtry, kliknij i… gotowe.</p>
    </header>
  )
}

export default Header
