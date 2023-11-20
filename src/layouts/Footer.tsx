import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="mt-1 bg-black-950">
        <div className="container mx-auto px-8 py-2">
          <div className="flex justify-between">
            <div className="logo">
              <h1 className="text-bold text-3xl text-white">
                <span className="font-sans text-pink-600 font-medium">T</span>
                Nike
              </h1>
              <i className="text-white">
                "Step into Style with Nike: Just Do It."
              </i>
            </div>
            <div className="categories text-white">
              <h3>Contact</h3>
              <ul>
                <li>Shoes</li>
                <li>Clothes</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div className="contact text-white">
              <h3>Categories</h3>
              <ul>
                <li>Shoes</li>
                <li>Hoodie</li>
              </ul>
            </div>
            <div className="feedback w-1/5 md:w-2/5 text-white">
              <h3>Join us</h3>
              <form action="">
                <div className="flex items-center rounded bg-white">
                  <input
                    type="text"
                    className="w-4/5 pl-1 outline-none text-black-950 text-sm"
                    placeholder="Enter your email address"
                  />
                  <button
                    type="submit"
                    className="w-1/5 bg-pink-700 p-1 rounded-r hover:bg-pink-800 transition duration-200"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright text-center border-t border-gray-300 py-2">
          <p className="text-xs text-gray-300">
            Copyright &copy; 2023 Tunn.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
