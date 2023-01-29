import React from "react";

const Footer = () => {
  return (
    <>
      <div className="text-white bg-slate-900 p-6 mt-16">
        <div className="w-full max-w-[1400px] mx-auto md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <ul className="flex flex-col gap-2">
              <h6 className="text-2xl mb-2">SOLUTIONS</h6>
              <li className="text-xl">Travel</li>
              <li className="text-xl">Booking</li>
              <li className="text-xl">Flights</li>
              <li className="text-xl">Cruises</li>
              <li className="text-xl">Ground</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <h6 className="text-2xl mb-2">COMPANY</h6>
              <li className="text-xl">About</li>
              <li className="text-xl">Blog</li>
              <li className="text-xl">Jobs</li>
              <li className="text-xl">Press</li>
              <li className="text-xl">Partners</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <h6 className="text-2xl mb-2">SUPPORT</h6>
              <li className="text-xl">Pricing</li>
              <li className="text-xl">Documentation</li>
              <li className="text-xl">Tours</li>
              <li className="text-xl">Refunds</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <h6 className="text-2xl mb-2">LEGAL</h6>
              <li className="text-xl">Claims</li>
              <li className="text-xl">Privacy</li>
              <li className="text-xl">Terms</li>
              <li className="text-xl">Policies</li>
              <li className="text-xl">Conditions</li>
            </ul>
          </div>
          <div className="max-md:col-span-4 w-full mt-10">
            <h4 className="text-2xl">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <p className="text-lg pb-5">
              The latest deals, articles and resources, sent to your inbox
              weekly.
            </p>
            <form className="w-full grid max-md:grid-cols-1 grid-cols-2 gap-4">
              <input
                type="email"
                className="py-3 px-5 rounded w-full text-black"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="py-3 px-5 rounded shadow border border-white bg-transparent hover:bg-white  hover:text-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center bg-black text-white py-4">
        &copy; 2023 All Rights Reversed. Made By
        <a href="https://kriskata.com" className="ml-2 font-bold">
          Kristian Kostadinov
        </a>
      </p>
    </>
  );
};

export default Footer;
