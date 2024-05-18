import React from "react";
import prom1 from "../../../public/img/prom/prom1.jpg";
import prom2 from "../../../public/img/prom/prom2.jpg";
import prom3 from "../../../public/img/prom/prom3.jpg";
import prom5 from "../../../public/img/prom/prom5.jpg";
import ohene1 from "../../../public/img/Grad/ohene1.jpg";
import ohene2 from "../../../public/img/Grad/ohene2.jpg";
import ohene3 from "../../../public/img/Grad/ohene3.jpg";
import zoe from "../../../public/img/Grad/zoe.jpg";
import zoe1 from "../../../public/img/Grad/zoe1.jpg";
import zoe2 from "../../../public/img/Grad/zoe2.jpg";
import zoe3 from "../../../public/img/Grad/zoe3.jpg";
import zoe4 from "../../../public/img/Grad/zoe4.jpg";
import zoe5 from "../../../public/img/Grad/zoe5.jpg";
import ono1 from "../../../public/img/Grad/ono1.jpg";
import ono2 from "../../../public/img/Grad/ono2.jpg";
import ono3 from "../../../public/img/Grad/ono3.jpg";
import ono4 from "../../../public/img/Grad/ono4.jpg";
import eman1 from "../../../public/img/Grad/eman1.jpg";
import eman2 from "../../../public/img/Grad/eman2.jpg";
import eman3 from "../../../public/img/Grad/eman3.jpg";
import eman5 from "../../../public/img/Grad/eman5.jpg";

import Image from "next/image";
export const metadata = {
  title: " Graduation/prom ",
  description: " Explore our services for Graduation and prom services. Let's bring your story to life!",
};
const Page = () => {
  return (
    <div>
         <>
      {/* <Navbar/> */}
      <h1 className="text-center text-5xl mb-4">Graduation and Prom </h1>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="grid gap">
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src={prom1}
              alt="Prom photoshoot"
            />
            
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {prom2}
              alt="Prom photoshoot"
            />
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src={prom3}
              alt="Prom photoshoot"
            />
          </div>
          {/* <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src={kay1}
              alt="Business photoshoot"
            />
          </div> */}
        </div>
        <div className="grid gap">
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src={prom5}
              alt="Prom photoshoot"
            />
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {zoe1}
              alt="Business photoshoot"
            />
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src={zoe2}
              alt="Business photoshoot"
            />
          </div>
          {/* <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src={shots}
              alt="Business photoshoot"
            />
          </div> */}
        </div>
        <div className="grid gap">
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {ohene3}
              alt="Business photoshoot"
            />
          </div>
          
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {eman1}
              alt="Business photoshoot"
            />
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {ohene1}
              alt="Coporate photoshoot"
            />
          </div>
          {/* <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src= {kay3}
              alt="Business photoshoot"
            />
          </div> */}
        </div>
        <div className="grid  gap">
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {zoe3}
              alt="Business photoshoot"
            />
          </div>
          
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {zoe4}
              alt="Business photoshoot"
            />
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {zoe5}
              alt="Coporate photoshoot"
            />
          </div>
          {/* <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src= {kay3}
              alt="Business photoshoot"
            />
          </div> */}
        </div>
        <div className="grid  gap">
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {eman3}
              alt="Business photoshoot"
            />
          </div>
          
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {eman2}
              alt="Business photoshoot"
            />
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {ono2}
              alt="Coporate photoshoot"
            />
          </div>
          {/* <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src= {kay3}
              alt="Business photoshoot"
            />
          </div> */}
        </div>
        <div className="grid  gap">
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {ono1}
              alt="Business photoshoot"
            />
          </div>
          
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {eman3}
              alt="Business photoshoot"
            />
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {ohene2}
              alt="Coporate photoshoot"
            />
          </div>
          {/* <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src= {kay3}
              alt="Business photoshoot"
            />
          </div> */}
        </div>
        
      </div>
  </>
    </div>
  )
}

export default Page
