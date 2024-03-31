import React from "react";
import land1 from "../../../public/img/business/land1.jpg";
import land2 from "../../../public/img/business/land2.jpg";
import land3 from "../../../public/img/business/land3.jpg";
import land4 from "../../../public/img/business/land4.jpg";
import land5 from "../../../public/img/business/land5.jpg";
import land6 from "../../../public/img/business/land6.jpg";
import portraits1 from "../../../public/img/business/portraits1.jpg";
import portraits2 from "../../../public/img/business/portraits2.jpg";
import portraits3 from "../../../public/img/business/portraits3.jpg";
import Image from "next/image";
export const metadata = {
  title: " Business ",
  description: " Explore our services for Business events. Let's bring your story to life!",
};
const Page = () => {
  return (
    <div>
         <>
      {/* <Navbar/> */}
      <h1 className="text-center text-5xl mb-4">Business </h1>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="grid gap">
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src={portraits1}
              alt="Business photoshoot"
            />
            
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {land1}
              alt="Business photoshoot"
            />
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src={portraits2}
              alt="Business photoshoot"
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
              src={land2}
              alt="Business photoshoot"
            />
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {portraits3}
              alt="Business photoshoot"
            />
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src={land4}
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
              src= {land5}
              alt="Business photoshoot"
            />
          </div>
          
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {land6}
              alt="Business photoshoot"
            />
          </div>
          <div>
            <Image
             
              className="h-auto max-w-full rounded-lg"
              src= {land3}
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
