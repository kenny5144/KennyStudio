import sele from "../../../public/img/homepageimages/sele.jpg";
import mek1 from "../../../public/img/studio/mek1.jpg";
import mek5 from "../../../public/img/studio/mek5.jpg";
import mek3 from "../../../public/img/studio/mek3.jpg";
import mek4 from "../../../public/img/studio/mek4.jpg";
import mek2 from "../../../public/img/studio/mek2.jpg";
import mek6 from "../../../public/img/studio/mek6.jpg";
import sel from "../../../public/img/studio/sel.jpg";
import sele7 from "../../../public/img/studio/sele7.jpg";
import sel2 from "../../../public/img/studio/sel2.jpg";
import maria2 from "../../../public/img/studio/maria2.jpg";
import maria3 from "../../../public/img/studio/maria3.jpg";
import preciousmom4 from "../../../public/img/studio/preciousmom4.jpg";
import lockin1 from "../../../public/img/studio/lockin1.jpg";
import lockin2 from "../../../public/img/studio/lockin2.jpg";
import lockin3 from "../../../public/img/studio/lockin3.jpg";
import selebrown from "../../../public/img/studio/selebrown.jpg";
import selebrownm from "../../../public/img/studio/selebrownm.jpg";
import lodb from "../../../public/img/studio/lodb.jpg";
import lockin from "../../../public/img/studio/lockin.jpg";
import moria5 from "../../../public/img/studio/moria5.jpg";
import preciousmom1 from "../../../public/img/studio/preciosmom1.jpg";
import preciousmom2 from "../../../public/img/studio/preciousmom2.jpg";
import Image from "next/image";

export const metadata = {
  title: " Studio Photoshoots ",
  description:
    "Discover Kenny Studios – wheather you are looking to capture your birthday shoots or you are just feeling confident at kenny studios we are here to portray your beauty ",
};
const Page = () => {
  return (
    <>
      {/* <Navbar/> */}
      <h1 className="text-center text-5xl mb-4">Studio </h1>

      <h2 className=" text-center   text-2xl mt-5 mb-10">
        Birthday shoot, family shoot, headshots and so on{" "}
      </h2>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={mek1}
              alt=" Birthday  PhotoShoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={maria2}
              alt=" Birthday  PhotoShoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={mek2}
              alt=" Studio  PhotoShoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={selebrown}
              alt=" Studio  PhotoShoot"
            />
          </div>
        </div>
        <div className="grid  gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={lockin1}
              alt=" Studio  PhotoShoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={selebrownm}
              alt=" Studio  PhotoShoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={preciousmom1}
              alt=" Studio  PhotoShoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={sel}
              alt=" Studio  PhotoShoot"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={lockin3}
              alt=" Studio  PhotoShoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={mek6}
              alt=" Studio  PhotoShoot"
            />
          </div>

          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={maria3}
              alt=" Studio  PhotoShoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={mek3}
              alt=" Studio  PhotoShoot"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={mek5}
              alt=" Studio  PhotoShoot"
            />
          </div>

          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={preciousmom2}
              alt=" Studio  PhotoShoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={sele}
              alt=" Studio  PhotoShoot"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={sele7}
              alt=" Studio  PhotoShoot"
            />
          </div>

          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={mek4}
              alt=" Studio  PhotoShoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={preciousmom4}
              alt=" Studio  PhotoShoot"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={lockin}
              alt=" Studio  PhotoShoot"
            />
          </div>

          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={moria5}
              alt=" Studio  PhotoShoot"
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={lodb}
              alt=" Studio  PhotoShoot"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
