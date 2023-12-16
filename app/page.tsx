import Link from "next/link";
import { HiFire } from "react-icons/hi";
import { MdHealthAndSafety } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-5 h-40 overflow-x-auto w-full">
        <Link href="/news1" className="h-full flex-shrink-0 w-3/4 relative">
          <img
            src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2020/07/23143643/GP1SU5J0_PressMedia.jpg"
            alt=""
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="absolute left-0 bottom-0 z-20 bg-[#0000005a] text-white p-2 rounded-br-xl rounded-bl-xl w-full">
            A Forest Fire 5KM east...
          </div>
        </Link>
        <Link href="/news1" className="h-full flex-shrink-0 w-3/4 relative">
          <img
            src="https://cdn.britannica.com/42/188142-050-4D4D9D19/wildfire-Stanislaus-National-Forest-California-2013.jpg"
            alt=""
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="absolute left-0 bottom-0 z-20 bg-[#0000005a] text-white p-2 rounded-br-xl rounded-bl-xl w-full">
            A Forest Fire 5KM east...
          </div>
        </Link>
      </div>
      <div className="mt-10 gap-5 flex justify-center">
        <Link href="/testfire" className="bg-primary px-5 py-3 font-semibold">
          Upload Threat
        </Link>
        <Link
          href="/testfire"
          className="border-primary border-2 px-5 py-3 font-semibold"
        >
          Make Donations
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4 bg-primary p-3 mt-10">
        <div className="md:pr-4 border-b-8 md:border-b-0 pb-5 md:mb-0 md:border-r-8 border-[#e7d9ba]">
          <div className="flex font-semibold text-3xl gap-4 justify-between">
            <h3>Fires Detected</h3>
            <HiFire className="text-7xl" />
          </div>
          <div className="flex justify-between font-medium">
            <h3 className="text-xl">347</h3>
            <p>xx/xx/xx to today</p>
          </div>
          <div className="bg-white h-5">
            <div className="bg-third h-5 w-3/4"></div>
          </div>
        </div>
        <div className="md:pr-4 border-b-8 md:border-b-0 pb-5 md:mb-0 md:border-r-8 border-[#e7d9ba]">
          <div className="flex font-semibold text-3xl gap-4 justify-between">
            <h3>Survivors</h3>
            <MdHealthAndSafety className="text-7xl" />
          </div>
          <div className="flex justify-between font-medium">
            <h3 className="text-xl">249</h3>
            <p>xx/xx/xx to today</p>
          </div>
          <div className="bg-white h-5">
            <div className="bg-third h-5 w-[95%]"></div>
          </div>
        </div>
        <div className="border-white">
          <div className="flex font-semibold text-3xl gap-4 justify-between">
            <h3>Certified Members</h3>
            <MdPeopleAlt className="text-7xl" />
          </div>
          <div className="flex justify-between font-medium">
            <h3 className="text-xl">134</h3>
            <p>xx/xx/xx to today</p>
          </div>
          <div className="bg-white h-5">
            <div className="bg-third h-5 w-[90%]"></div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-10 bg-primary p-5 gap-5">
        <div className="flex justify-between flex-col">
          <p className="text-3xl font-bold">
            Analyzying Two Decades of Fire Incidents: A Statatistcal Examination
            of Fire Quantity from 1970 to 2018
          </p>
          <div className="bg-third h-5 w-3/4 mt-5"></div>
          <div>Source: www.mdpi.com</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/images/main-photo.png" alt="" />
        </div>
      </div>
    </div>
  );
}
