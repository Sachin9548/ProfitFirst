import React from 'react';
import "../App.css";
import {Link} from 'react-router-dom';
const Pricing = () => {
  return (
    <section id='PRICING' className=" text-white py-4 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl my-gradient-text md:text-4xl font-semibold mb-2">Our Pricing</h2>
        <p className="text-gray-400">
          We offer one price for all D2C brands whether you have just started
          or you’re getting thousands of orders every day.
        </p>
      </div>

      <div className="max-w-md mx-auto mt-10 bg-[#141414] text-white rounded-lg shadow-lg p-6 custom-glow">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
          <p className="text-3xl font-bold">
            Rs. 5,999 <span className="text-lg text-[#13ef96] font-normal">/month</span>
          </p>
        </div>

        <ul className="mt-6 space-y-2">
          <li className="flex items-center">
            <span className="mr-2 text-green-500">•</span>
            Integration with Meta, Shopify & Shiprocket
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">•</span>
            Overall Dashboard
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">•</span>
            Cohort Analysis
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">•</span>
            Marketing Dashboard
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">•</span>
            Shipping Dashboard
          </li>
        </ul>

        <button
          className="mt-8 w-full py-3 text-black rounded transition-colors font-bold" style={{background: '#13ef96'}}
        ><Link to={"/Contact"}>
          Start your free trial
        </Link>
        </button>
      </div>
    </section>
  );
};

export default Pricing;
