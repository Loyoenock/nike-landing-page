import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics, shoes } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section 
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container overflow-hidden'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-6 pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our Festive Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[40px] max-sm:leading-[48px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>New Arrivals </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-sm:text-base max-sm:leading-6'>
          Discover the latest collection of Nike shoes and shop your favorite pair at the best price.
        </p>
        <Button 
          label='Shop Now'
          iconURL={arrowRight}
        />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 bg-primary bg-hero bg-cover bg-center overflow-hidden'>
        <img 
          src={bigShoeImg}
          alt='Shoe collection'
          width={510}
          height={400}
          className='object-contain relative z-10 max-sm:w-full max-sm:h-auto'
        />
        <div className='flex sm:gap-6 gap-4 absolute bottom-0 sm:bottom-5 sm:left-10 left-6 right-6'>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {setBigShoeImg(shoe)}}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero