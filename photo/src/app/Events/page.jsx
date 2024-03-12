import long1 from "../../../public/img/events/long1.jpg";
import long2 from "../../../public/img/events/long2.jpg";
import long3 from "../../../public/img/events/long3.jpg";
import long4 from "../../../public/img/events/long4.jpg";
import short1 from "../../../public/img/events/short1.jpg";
import short2 from "../../../public/img/events/short2.jpg";
import short3 from "../../../public/img/events/short3.jpg";
import short4 from "../../../public/img/events/short4.jpg";
import short5 from "../../../public/img/events/short5.jpg";
import short6 from "../../../public/img/events/short6.jpg";
import short from "../../../public/img/events/short.jpg";
import thbd from "../../../public/img/events/thbd.jpg";
import thbd1 from "../../../public/img/events/thbd1.jpg";
import thbd3 from "../../../public/img/events/thbd3.jpg";
import thbd4 from "../../../public/img/events/thbd4.jpg";
import thbirthday3 from "../../../public/img/events/thbirthday3.jpg";
import Image from "next/image";
export const metadata = {
  title: " Events ",
  description: "Capture the Moment with Kenny Studios! From weddings to corporate gatherings, trust us to immortalize your special events. Contact us now to book your session!",
};
const page = () => {
  return (
    <>
      {/* <Navbar/> */}
      <h1 className="text-center text-5xl mt-10 mb-4">Events </h1>
      <h2 className=" text-center   text-2xl mt-5 mb-10"> From local business events to School ceremonies, we have you covered.</h2>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="grid gap-4">
          <div>
            <Image
            
             
              className="pointer-events-none h-auto max-w-full rounded-lg"
              src={thbirthday3}
              alt=""
            />
          </div>
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src={short3}
              alt=""
            />
          </div>
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src= {long3}
              alt=""
            />
          </div>
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src={thbd3}
              alt=""
            />
          </div>
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src={short}
              alt=""
            />
          </div>
         
        </div>
        <div className="grid gap-4">
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src={long1}
              alt=""
            />
            
          </div>
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src= {thbd1}
              alt=""
            />
          </div>
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src= {short1}
              alt=""
            />
          </div>
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src={long2}
              alt=""
            />
          </div>
         
        </div>
       
        <div className="grid gap-4">
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src= {long4}
              alt=""
            />
          </div>
          
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src= {short4 }
              alt=""
            />
          </div>
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src= {thbd4 }
              alt=""
            />
          </div>
          <div>
            <Image
            
             
              className="h-auto max-w-full rounded-lg"
              src= {short5}
              alt=""
            />
          </div>
         
        </div>
        
        
      </div>
  </>
  );
}

export default page
