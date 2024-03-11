"use client"
import React from 'react'
import image1c from "../../../public/img/homepageimages/image1c.jpg";
import kay3 from "../../../public/img/homepageimages/kay3.jpg";
import sele from "../../../public/img/homepageimages/sele.jpg";
import maria from "../../../public/img/homepageimages/maria.jpg";
import selecover from "../../../public/img/homepageimages/selecover.jpg";
import mek1 from "../../../public/img/studio/mek1.jpg"
import mek4 from "../../../public/img/studio/mek4.jpg"
import mek5 from "../../../public/img/studio/mek5.jpg"
import mek3 from "../../../public/img/studio/mek3.jpg"
import mek2 from "../../../public/img/studio/mek2.jpg"
import mek6 from "../../../public/img/studio/mek6.jpg"
import sel from "../../../public/img/studio/sel.jpg"
import sel1 from "../../../public/img/studio/sel1.jpg"
import sel2 from "../../../public/img/studio/sel2.jpg"
import sel3 from "../../../public/img/studio/sel3.jpg"
import Image from 'next/image';
import remembrance from "../../../public/img/homepageimages/remembrance.jpg";
import kay1 from "../../../public/img/homepageimages/kay1.jpg";


const page = () => {
  return (
    <>
    {/* <Navbar/> */}
    <h1 className="text-center text-5xl mb-4">Studio </h1>

    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="grid gap-4">
        <div>
          <Image
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src={mek1}
            alt=""
          />
          
        </div>
        <div>
          <Image
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {sel1}
            alt=""
          />
        </div>
        <div>
          <Image
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src={mek2}
            alt=""
          />
        </div>
      
      </div>
      <div className="grid  gap-4">
        <div>
          <Image
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src={sele}
            alt=""
          />
        </div>
        <div>
          <Image
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {mek5}
            alt=""
          />
        </div>
        <div>
          <Image
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {sel}
            alt=""
          />
        </div>

     
      </div>
      <div className="grid gap-4">
        <div>
          <Image
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {mek6}
            alt=""
          />
        </div>
        
        <div>
          <Image
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {sel2 }
            alt=""
          />
        </div>
        <div>
          <Image
          loading="lazy"
            className="h-auto max-w-full rounded-lg"
            src= {mek3}
            alt=""
          />
        </div>
      
      </div>
      
    </div>
</>
  )
}

export default page
