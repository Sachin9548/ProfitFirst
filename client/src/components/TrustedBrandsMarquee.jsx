import React from "react";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.svg";
import Logo5 from "../assets/Logo5.png";
import Logo6 from "../assets/Logo6.png";

const TrustedBrandsMarquee = () => {
  const logos = [Logo2, Logo3, Logo4, Logo5, Logo6];

  // Duplicate the logos for seamless loop
  const loopLogos = [...logos, ...logos];

  return (
    <div className="py-10 px-2 overflow-hidden relative">
     <h2 className="text-white text-center text-3xl sm:text-3xl md:text-4xl font-bold mb-6 px-4 leading-snug">
      Trusted by <span className="my-gradient-text font-bold">100+ D2C brands</span>
    </h2>


      <div className="w-full overflow-hidden">
        <div className="marquee flex whitespace-nowrap">
          {loopLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-12 w-24 mx-8 mt-2 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Custom keyframes and animation defined here */}
      <style jsx>{`
        .marquee {
          animation: scrollMarquee 30s linear infinite;
        }

        @keyframes scrollMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Faster animation on mobile */
        @media (max-width: 768px) {
          .marquee {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustedBrandsMarquee;
