import Image from "next/image";
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
import babyShowerabi from "../../../public/img/events/babyShowerabi.jpg";
import babyShowerabi2 from "../../../public/img/events/babyShowerabi2.jpg";
import babyShowerabi3 from "../../../public/img/events/babyShowerabi3.jpg";
import babyShowerabi5 from "../../../public/img/events/babyShowerabi5.jpg";

export const metadata = {
  title: "Events",
  description: "Capture the Moment with Kenny Studios! From Weddings to corporate gatherings, trust us to immortalize and tell the story of your special events. Contact us now to book your session!",
};

const Page = () => {
  return (
    <>
      <h1 className="text-center text-5xl mt-10 mb-4">Events Photography</h1>
      <h2 className="text-center text-2xl mt-5 mb-10">From local business events to school ceremonies, we have you covered.</h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="grid gap-4">
          <Image className="h-auto max-w-full  rounded-lg" src={thbirthday3} alt="Event Photographer" />
          <Image className="h-auto max-w-full  rounded-lg" src={short3} alt="Event Photographer" />
          <Image className="h-auto max-w-full  rounded-lg" src={long3} alt="Event Photographer" />
          <Image className="h-auto max-w-full  rounded-lg" src={thbd3} alt="Event Photographer" />
          <Image className="h-auto max-w-full  rounded-lg" src={short} alt="Event Photographer" />
        </div>

        <div className="grid gap-4">
          <Image className="h-auto max-w-full  rounded-lg" src={long1} alt="Event Photographer" />
          <Image className="h-auto max-w-full  rounded-lg" src={thbd1} alt="Event Photographer" />
          <Image className="h-auto max-w-full  rounded-lg" src={short1} alt="Event Photographer" />
          <Image className="h-auto max-w-full  rounded-lg" src={long2} alt="Event Photographer" />
        </div>

        <div className="grid gap-4">
          <Image className="h-auto max-w-full  rounded-lg" src={long4} alt="Event Photographer" />
          <Image className="h-auto max-w-full  rounded-lg" src={short4} alt="Event Photographer" />
          <Image className="h-auto max-w-full  rounded-lg" src={thbd4} alt="Event Photography" />
          <Image className="h-auto max-w-full  rounded-lg" src={short5} alt="Event Photographer" />
        </div>

        <div className="grid gap-4">
          <Image className="h-auto max-w-full  rounded-lg" src={babyShowerabi} alt="Event Photographer" />
          <Image className="h-auto max-w-full  rounded-lg" src={babyShowerabi2} alt="baby shower photography " />
         
        </div>
        <div className="grid gap-4">
         
          <Image className="h-auto max-w-full  rounded-lg" src={babyShowerabi3} alt="baby shower photography " />
          <Image className="h-auto max-w-full  rounded-lg" src={babyShowerabi5} alt="baby shower photography  " />
        </div>
      </div>
    </>
  );
};

export default Page;
