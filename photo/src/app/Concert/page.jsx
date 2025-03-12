import rema1 from "../../../public/img/concert/rema1.jpg";
import rema2 from "../../../public/img/concert/rema2.jpg";
import rema3 from "../../../public/img/concert/rema3.jpg";
import rema4 from "../../../public/img/concert/rema4.jpg";
import remam from "../../../public/img/concert/remam.jpg";
import rema5 from "../../../public/img/concert/rema5.jpg";
import tisa from "../../../public/img/concert/tisa.jpg";
import tyla1 from "../../../public/img/concert/tyla1.jpg";
import tyla2 from "../../../public/img/concert/tyla2.jpg";
import tyla3 from "../../../public/img/concert/tyla3.jpg";
import tyla4 from "../../../public/img/concert/tyla4.jpg";
import tyla5 from "../../../public/img/concert/tyla5.jpg";
import tyla6 from "../../../public/img/concert/tyla6.jpg";
import wande from "../../../public/img/concert/wande.jpg";

import Image from "next/image";

export const metadata = {
  title: " Studio Photoshoots ",
  description: "Discover Kenny Studios ",
};
const Page = () => {
  return (
    <>
      {/* <Navbar/> */}
      <h1 className="text-center text-5xl mb-4">Concert photography </h1>

      <h2 className=" text-center   text-2xl mt-5 mb-10">
        Birthday shoot, family shoot, headshots and so on{" "}
      </h2>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={rema1}
              alt=" concert photoshoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={tyla2}
              alt=" concert photography "
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={tyla5}
              alt=" concert photoshoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={rema3}
              alt=" concert photography "
            />
          </div>
        </div>
        <div className="grid  gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={tyla1}
              alt=" concert photography "
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={remam}
              alt=" concert photography "
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={tyla3}
              alt=" concert photography "
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={rema2}
              alt=" concert photography "
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={wande}
              alt=" concert photography "
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={rema4}
              alt=" concert photography "
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={tisa}
              alt=" concert photography "
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={rema2}
              alt=" concert photography "
            />
          </div>

          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={tyla2}
              alt=" concert photography "
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={tyla4}
              alt=" concert photography "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
