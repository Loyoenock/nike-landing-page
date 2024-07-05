import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img 
          src={offer} width={773} height={687} className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>    
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
       <span className='text-coral-red'> Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Get a special offer on our shoes. We have a wide range of shoes that you can choose from.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
         Navigate to our products page to view the shoes that are on offer.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button 
          label='Shop now'
          iconURL={arrowRight}          
        />
        <Button 
          label={'Learn more'}
          backgroundColor='bg-white'
          borderColor='border-coral-red'
          textColor='text-slate-gray'
        />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer