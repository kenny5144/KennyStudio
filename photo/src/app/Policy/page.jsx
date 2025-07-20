import Image from "next/image";
import grad from "../../../public/img/events/grad.jpg";
export default function PolicyPage() {
  return (
    <div className="bg-gray-50 text-gray-800 ">
      <section className=" absolute w-full h-1/2  ">
        <Image
          src={grad}
          alt="Photography Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Kennystudios Policies
          </h1>
        </div>
      </section>

      <div className="absolute inset-x-80 inset-y-2/3  sm:inset-x-10 ">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Booking Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All sessions must be booked at least 7 days in advance. A deposit is
            required to secure your booking.{" "}
            <strong className="font-semibold text-red-600">
              All deposits are strictly non-refundable under any circumstances.
            </strong>{" "}
            The remaining balance is due on the day of the shoot.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Cancellation Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cancellations made 48 hours prior to the scheduled session will
            forfeit the deposit. Rescheduling is allowed once without penalty if
            done at least 72 hours in advance.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Copyright & Usage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All images remain the property of the photographer and may be used
            for portfolio, social media, and marketing purposes unless otherwise
            agreed in writing. Clients receive personal usage rights for images.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Your personal information is kept confidential and will never be
            shared with third parties without consent. Images will only be
            shared with your permission.
          </p>
        </section>
      </div>
    </div>
  );
}
