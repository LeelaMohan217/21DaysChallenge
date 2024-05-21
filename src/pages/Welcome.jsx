import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="sm:hidden bg-orange-600 w-full min-h-screen flex flex-col mx-auto p-10 justify-center space-y-8">
        <h1 className="text-4xl font-bold text-white text-center">
          Welcome to 21 Days Challenge
        </h1>
        <p className="text-white text-center ">
          Embark on a transformative journey with our '21 Days Challenge' app!
        </p>
        <p className="text-white text-center">
          Are you ready to challenge yourself and embrace the 21-Day
          transformation?
        </p>
        <div className="flex flex-col gap-4">
          <button className="w-full px-4 py-2 font-semibold text-orange-600 bg-slate-50 hover:bg-slate-100 active:bg-slate-100 focus:outline-none focus:ring focus:ring-slate-100 rounded-sm">
            <Link to="/login">Sign In</Link>
          </button>
          <button className="w-full px-4 py-2 font-semibold border-2 border-white rounded-sm text-white">
            <Link to="/register">Sign up</Link>
          </button>
        </div>
      </div>
      <div className="hidden sm:grid grid-cols-2 min-h-screen">
        <div className="flex flex-col justify-center sm:p-10 lg:p-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-600 font-bold">
            Welcome to
            <br />
            21 Day Challenge
          </h1>
          <p className="text-gray-700 text-xl font-bold mt-8">
            Embark on a transformative journey with our '21 Days Challenge' app!
          </p>
        </div>
        <div className=" bg-orange-600 sm:rounded-l-full flex flex-col justify-center items-center p-10">
          <p className="text-lg font-semibold text-white">
            Are you ready to challenge yourself and embrace the 21-Day
            transformation?
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button className="px-4 py-2 font-semibold text-orange-600 bg-slate-50 hover:bg-slate-100 active:bg-slate-100 focus:outline-none focus:ring focus:ring-slate-100 rounded-md">
              <Link to="/login">Sign In</Link>
            </button>
            <button className="px-4 py-2 font-semibold border-2 border-white rounded-md text-white">
              <Link to="/register">Sign up</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
