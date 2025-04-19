import React from 'react'
import Heart from '../assets/heart.png'
import Flower from '../assets/flower.png'

function Modal({ visible, description, title, paid, location, type, imageUrl }) {
  return (
    <div className={`modal transition-all duration-500 ease-in-out ${visible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
      <div className='w-[50%] h-[50%] bg-box rounded-xl gap-6 flex justify-start py-12 items-center flex-col'>
        <div className='flex justify-center flex-col items-center'>
          {type === "no-filter"
            ? <i className="fa-solid fa-circle-question text-blue-500 text-[2rem] mb-8"></i>
            : <img className='mb-6' src={type === "couple" ? Heart : Flower} alt="icon" />}
          <h2 className='opacity-75'>Co powiesz na</h2>
          <span className='font-bold text-xl'>{title}</span>
        </div>
        <p>{description}</p>
        <a href="/" className='bg-stone-900 py-3 px-6 rounded-xl hover:bg-stone-800'>Wylosuj ponownie</a>
      </div>
    </div>
  )
}

export default Modal
