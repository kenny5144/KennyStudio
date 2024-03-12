import React from 'react'
import maria from "../../../public/img/lifestyles/maria.jpg"
import maria1 from "../../../public/img/lifestyles/maria1.jpg"
import maria2 from "../../../public/img/lifestyles/maria2.jpg"
import maria3 from "../../../public/img/lifestyles/maria3.jpg"
import ono1 from "../../../public/img/lifestyles/ono1.jpg"
import ono2 from "../../../public/img/lifestyles/ono2.jpg"
import ono from "../../../public/img/lifestyles/ono.jpg"
import sade1 from "../../../public/img/lifestyles/sade1.jpg"
import sade from "../../../public/img/lifestyles/sade.jpg"
import taye from "../../../public/img/lifestyles/taye.jpg"
import Image from 'next/image'
export const metadata = {
  title: " Lifestyle ",
  description: "Explore our lifestyle photography and videography services. Let's capture your story in style. Contact us to get started!",
};
export default function page() {
  return (
    <>
    {/* <Navbar/> */}
    <h1 className="text-center text-5xl mb-4">Lifestyle </h1>

    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="grid gap-4">
        <div>
          <Image
          
            className="h-auto max-w-full rounded-lg"
            src={ono}
            alt=""
          />
          
        </div>
        <div>
          <Image
          
            className="h-auto max-w-full rounded-lg"
            src= {maria}
            alt=""
          />
        </div>
        <div>
          <Image
          
            className="h-auto max-w-full rounded-lg"
            src={taye}
            alt=""
          />
        </div>

      </div>
      <div className="grid gap-4">
        <div>
          <Image
          
            className="h-auto max-w-full rounded-lg"
            src={maria1}
            alt=""
          />
        </div>
        <div>
          <Image
          
            className="h-auto max-w-full rounded-lg"
            src= {ono1}
            alt=""
          />
        </div>
    
        <div>
          <Image
          
            className="h-auto max-w-full rounded-lg"
            src={maria2}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
          
            className="h-auto max-w-full rounded-lg"
            src= {ono2}
            alt=""
          />
        </div>
        
        <div>
          <Image
          
            className="h-auto max-w-full rounded-lg"
            src= {sade }
            alt=""
          />
        </div>
        <div>
          <Image
          
            className="h-auto max-w-full rounded-lg"
            src= {sade1}
            alt=""
          />
        </div>
       
      </div>
      
    </div>
</>
  )
}
