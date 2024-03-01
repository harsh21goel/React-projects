import React from "react";

function Footer() {
  return (
    <>
      <footer 
        className="bg-slate-950 w-full h-3/4     flex justify-center"
        style={{ height: "500px" }}
      >
        <div className=" w-10/12  h-3/5 m-auto flex relative">
          <div className="w-1/5  flex flex-col  items-start  ">
            <h1 className="text-xl font-style:italic text-white font-bold tracking-wide mb-6">
              Top Products
            </h1>
            <br />
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Managed Website
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Manage Reputation
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Power Tool
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Marketing Service
            </h1>
          </div>
          <div className="w-1/5  flex flex-col  items-start  ">
            <h1 className="text-xl font-style:italic text-white font-bold tracking-wide mb-6">
              Quick Links
            </h1>
            <br />
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Jobs
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Brand Assets
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Investor Relations
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Term of Services
            </h1>
          </div>
          <div className="w-1/5  flex flex-col  items-start  ">
            <h1 className="text-xl font-style:italic text-white font-bold tracking-wide mb-6">
              Features
            </h1>
            <br />
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Jobs
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Brand Assets
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Investor Relations
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Term of Services
            </h1>
          </div>
          <div className="w-1/5  flex flex-col  items-start  ">
            <h1 className="text-xl font-style:italic text-white font-bold tracking-wide mb-6">
              Resources
            </h1>
            <br />
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Guides
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Research
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Expert
            </h1>
            <h1 className="text-base  tracking-wide  text-gray-400 mb-4 font-medium hover:text-white">
              Agencies
            </h1>
          </div>
          <div className="w-1/3   flex flex-col  items-start relative ">
            <h1 className="text-xl font-style:italic text-white font-bold tracking-wide mb-6">
              Newsletter
            </h1>
            <br />
            <h1 className="text-sm  tracking-wide  text-gray-400 mb-8 font-medium ">
              You can trust us we only send promo offers.
            </h1>
            <form action="">
              <input
                type="text"
                placeholder="Your Email Address"
                className="bg-gray-600 w-60 h-10 text-start text-white text-sm z-0  "
              />
              <input
                type="submit"
                value="Subscribe"
                className="text-white w-20 h-8 text-xs z-40 absolute    bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l" style={{left:"220px", top:"133px"}}
              />
            </form>

          </div>
        <div className="w-full h-8    absolute inset-x-0 bottom-0">
            <p className="text-white text-sm mt-4 font-medium">Copyright © 2024 All rights reserved | This template is made with love  by <span className="text-cyan-500">Harsh</span> </p>
        </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
