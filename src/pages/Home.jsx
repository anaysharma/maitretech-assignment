import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='grid place-items-center text-center gap-10 py-32 bg-white'>
      <p className='text-5xl'>
        Welcome to Food's <br /> Restaurant
      </p>
      <Link to="/menu" className='rounded shadow px-4 py-2 w-fit text-white bg-indigo-800'>Go to Menu</Link>
    </div>
  )
}

export default Home