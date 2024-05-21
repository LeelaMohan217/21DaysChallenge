import { DiamondPlus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { handleLogout, userData } = props;
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (userData) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  }, [userData]);

  return (
    <>
      <div className="flex justify-center items-center mt-40">
        <Link
          to="/create-challenge"
          className="text-center bg-orange-600 p-8 flex flex-col justify-center items-center rounded-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-diamond-plus"
          >
            <path d="M12 8v8" />
            <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
            <path d="M8 12h8" />
          </svg>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extralight py-4 text-white tracking-widest">
            Create Challenge
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Home;
