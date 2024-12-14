import pageNotfoundItem from '../assets/images/pagenotfound.png'
import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from '../components/Button'

export const PageNotFound = () => {
  return (
    <section className='flex flex-col justify-center px-2'>
      <div className='flex flex-col items-center my-4'>
        <p className='text-7xl text-gray-700 my-10 dark:text-white'>404,Oops</p>
        <div className='max-w-lg'>
        <img src={pageNotfoundItem} alt='error page'/> 
        </div>
        <div className='flex justify-center my-4'>
            <Link to="/">
               <Button>Back to Home page</Button>
            </Link>
        </div>

      </div>
    </section>
  )
}


