import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "./anime.css";
import myGif from "./images/gf.gif";

const Navbar = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-blue-400 p-4">
        <ul>
          <div className="container mx-auto flex justify-between">
            <div className="text-white text-lg font-bold">
              Apparel Disposal Platform
            </div>
            <div className="space-x-4">
              <Link to="/" className="text-white">
                Dashboard
              </Link>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Signup
              </Link>
              <Link to="/profile" className="text-white">
                Profile
              </Link>
            </div>
          </div>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="flex justify-between p-4">
        <div className="left flex items-center">
          <h1 className="text-3xl font-bold">Dispose , Recycle , Donate</h1>
          <img src="images/2.png" alt="" className="ml-2" />
        </div>
        <div className="absolute top-24 right-12  bg-white-opacity-5 p-4 rounded shadow-lg  max-w-xs">
          <h3 className="text-xl font-semibold text-center">DND</h3>
          <p className="mt-2 text-center text-sm">
            Transform your unused plastic apparel into a sustainable future!
            Join our platform to recycle, donate, or properly dispose of your
            items. Together, we can make a positive impact on the environment
            while helping those in need.
          </p>
          <img src="images/code.png" alt="" className="mt-2 mx-auto" />
        </div>
      </header>

      {/* Banner Section */}
      <div className="banner">
        <div className="product">
          <div className="soda" style={{ "--url": "url(images/bg.png)" }}></div>
          <div className="soda" style={{ "--url": "url(images/bg2.png)" }}></div>
        </div>

        <div className="gif-container flex items-center justify-center h-screen">
          <img src={myGif} alt="Your GIF" className="w-1/2" />
        </div>
        <div className="flex flex-row justify-end items-end h-screen">
          <ul>
            <div className="fixed bottom-5 right-5 flex flex-row gap-2">
              <li>
                <Link to="/signup">
                  <button className="bg-sky-500 text-white px-4 py-3 rounded-lg">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button className="text-black px-4 py-3 rounded-lg bg-white">
                    Log In
                  </button>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;