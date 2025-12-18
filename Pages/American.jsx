import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function American() {
  return (
    <div>
      <Navbar />
      <div
        className=" w-full h-[600px] bg-cover md:h-[700px] lg:h-[800px] text-center pt-5 "
        style={{
          backgroundImage: "url('/images/americabg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="unnav-text z-0 text-white text-[100px] pt-40 md:text-[150px] md:pt-52 lg:text-[200px] lg:pt-60">
          America
        </h1>

        <p className="text-white mx-7 md:text-[20px] lg:text-[25px]">
          Discover easy, delicious recipes made for everyday cooking. Explore,
          try, and make something amazing today
        </p>
      </div>

      {/* Big grid div */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-4xl text-center  mb-12 font-bold">
          Traditional American dishes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mac and Cheese*/}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/macandcheese.png"
              alt="Plov"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Mac and Cheese</h3>
              <p className="text-gray-700">
                Creamy pasta baked with cheese sauce. Comfort food at its
                finest.
              </p>
            <Link to={"/american/macandcheese"}> <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                Veiw recipe
              </button></Link>
            </div>
          </div>
          {/* Philly Cheesesteak */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/Philly.png"
              alt="Shashlik"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">
                Philly Cheesesteak
              </h3>
              <p className="text-gray-700">
                Thinly sliced steak with melted cheese, onions, and peppers in a
                long roll. Originates from Philadelphia.
              </p>
               <Link to={"/american/phillycheesesteak"}> <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                Veiw recipe
              </button></Link>
            </div>
          </div>
          {/* Friewd Chicken */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/friedchicken.png"
              alt="Samsa"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Fried Chicken</h3>
              <p className="text-gray-700">
                Crispy pastries filled with meat, pumpkin, or potatoes. Baked in
                a traditional clay oven.
              </p>
               <Link to={"/american/friedchicken"}> <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                Veiw recipe
              </button></Link>
            </div>
          </div>
          {/* Apple Pie */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/applepie.png"
              alt="Lagman"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Apple Pie</h3>
              <p className="text-gray-700">
                Sweet, spiced apple filling in a flaky crust. “As American as
                apple pie” is no joke.
              </p>
              <Link to={"/american/applepie"}> <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                Veiw recipe
              </button></Link>
            </div>
          </div>
          {/* Caesar Salad*/}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/Caesarsalad.png"
              alt="Manti"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Caesar Salad</h3>
              <p className="text-gray-700">
                Romaine lettuce with creamy Caesar dressing, croutons, and
                Parmesan cheese.
              </p>
               <Link to={"/american/caesarsalad"}> <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                Veiw recipe
              </button></Link>
            </div>
          </div>

          {/* Key lime Pie */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/keypie.png"
              alt="Shashlik"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Key Lime PIe</h3>
              <p className="text-gray-700">
                Tangy lime custard pie with a graham cracker crust, famous in
                Florida.
              </p>
                <Link to={"/american/keylime"}> <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                Veiw recipe
              </button></Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default American;
