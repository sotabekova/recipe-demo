import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />

      <section className="max-w-3xl mx-auto px-5 py-20">
        <h1 className="text-4xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Have a question, suggestion, or just want to say hello?  
          We’d love to hear from you.
        </p>

        <div className="bg-gray-50 rounded-2xl p-8 shadow">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6B9080] text-white font-semibold py-3 rounded-lg hover:bg-[#A4C3B2] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
