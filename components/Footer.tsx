import SocialIcons from "./SocialIcons";
import { HiFire } from "react-icons/hi";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <footer className="mt-5">
      <div className="grid md:grid-cols-2">
        <div className="bg-primary">
          <div className="p-5">
            <h1 className="font-bold text-3xl">
              OnFire <HiFire className="inline" />
            </h1>
            <p>
              For any inquiries, questions, or assistance related to fire
              detection solutions, please don't hesitate to reach out to us. We
              are here to help you ensure the safety of your property and loved
              ones.
            </p>
          </div>
        </div>
        <div className="bg-secondary p-5">
          <h2 className="text-3xl font-medium flex justify-center">
            Contact Us
          </h2>
          {/* and form here */}
          <form action="">
            {/* name, email, message with black border */}
            <div className="flex flex-col gap-3 mt-10">
              <input
                type="text"
                placeholder="Name"
                className="border border-black px-3 py-2 bg-secondary outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-black px-3 py-2 bg-secondary outline-none"
              />
              <textarea
                name=""
                id=""
                cols={20}
                rows={4}
                placeholder="Message"
                className="border border-black px-3 py-2 bg-secondary outline-none"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="bg-primary">
          <div className="h-4 ml-5 bg-secondary"></div>
        </div>
        <div className="bg-secondary">
          <div className="h-4 mr-5 bg-primary"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-0 relative">
        <div className="bg-primary p-5 pb-10">
          <SocialIcons />
        </div>
        <div className="bg-secondary flex items-center justify-center p-5 pb-20 md:pb-10">
          <button className="border border-black px-4 py-2">Submit</button>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] font-bold text-sm bottom-2 text-center">
          @2023 ONFIRE ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
