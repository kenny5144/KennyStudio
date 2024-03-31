import React from 'react'
import Maria from "../../public/img/studio/Maria.jpg"
import Image from 'next/image'
import Link from 'next/link'
const ContactLink = () => {
  return (
    <div className='  bg-gray-50 relative md:top-40 mt-24 md:mb-40 
    grid justify-items-center m-auto '>
    
    <div className=' p-10 md:flex md:w-3/4  justify-between'>

      <Image  className=" md:w-1/2  relative rounded-lg" src={Maria} alt='Gel shoots' />
    <span className='ml-8 flex flex-col justify-center '>

        <h3 className='mt-5 md:mt-0 text-center leading-snug text-5xl '>
            <span>
            Book  
            </span>
            <br />

            <span>

            your 
            </span>
            <br />
            <span>

            Photoshoot 
            </span>
            <br />
            <span>

             today 
            </span>
            </h3>
        <Link href="/Contact" className=' flex text-lg justify-center items-center bg-blue-600 text-white  rounded-xl  ml-10 mt-10 h-14 w-3/4'> Get in touch </Link>
    </span>
   
    </div>
    </div>
  )
}

export default ContactLink
