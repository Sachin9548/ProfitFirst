import React, { useState } from "react";
import axiosInstance from "../../axios";
import contact from "../assets/contact.jpg";
const Contactus = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
    website:"",
    message: "",
  });

  // State for handling form submission status
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading status

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone validation regex (simple format: 1234579890)
  const phoneRegex = /^\d{10}$/;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setStatus("Submitting...");

    if (!formData.name || !formData.email || !formData.message || !formData.phone || !formData.website) {
      setStatus("All fields are required");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address");
      return;
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      setStatus("Please enter a valid phone number (e.g.,  12456-78900)");
      return;
    }

    setIsLoading(true); // Show loading state
    try {
      const response = await axiosInstance.post("/getInTouch", formData);
      if (response.status === 200) {
        setStatus("We will connect with you soon!");
        setFormData({ name: "", email: "", phone: "", message: "",website:"" }); // Reset form
        setTimeout(() => {
          window.location.href = "/"; // Redirect to home page
        }, 3000);
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  // Handle back button click
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="relative min-h-screen bg-[#101218] flex flex-col">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 z-10 bg-green-600 px-4 py-2 rounded-full hover:bg-green-700 transition text-white"
      >
        Back
      </button>

      {/* Background Blurred Circles */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-50 z-0"
        style={{
          background:
            "linear-gradient(to right, rgb(29, 164, 24), rgb(206, 220, 93))",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] opacity-50 z-0"
        style={{
          background:
            "linear-gradient(to left, rgb(29, 164, 24), rgb(206, 220, 93))",
        }}
      ></div>

      <div className="flex flex-1 items-center justify-center px-4 ">
        <div className="bg-gray-900 bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden w-11/12 md:w-3/4 lg:w-2/3">
          {/* Image Section (visible on medium screens and up) */}
          <div className="hidden md:block md:w-1/2">
            <img
              src={contact}
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-center text-white mb-4">Contact Us</h2>

            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mb-4 bg-transparent border-2 border-gray-400 text-white rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mb-4 bg-transparent border-2 border-gray-400 text-white rounded-lg"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 mb-4 bg-transparent border-2 border-gray-400 text-white rounded-lg"
                required
              />
              <input type="text"
                
                  name="website"
                  placeholder="Your Website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 bg-transparent border-2 border-gray-400 text-white rounded-lg"
                  required
                />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mb-4 bg-transparent border-2 border-gray-400 text-white rounded-lg"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Done!"}
              </button>
            </form>

            {status && (
              <div
                className={`mt-4 text-center text-white ${
                  status.includes("Error") ? "text-red-500" : "text-green-500"
                }`}
              >
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
