import Navbar from "../Components/navbar";
import Footer from '../Components/Footer';

function Lasagna() {
  return (
    <div>
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      <Navbar />

      <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
        Classic Beef Lasagna
      </h1>
      <p>
        A rich, layered Italian favorite made with savory meat sauce, creamy
        béchamel, and melted cheese.
      </p>

      <img
        src="/images/lasagna.png"
        alt="Classic Lasagna"
        className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
      />

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
        <div>
          <p className="font-bold">Prep</p>
          <p>25 min</p>
        </div>
        <div>
          <p className="font-bold">Cook</p>
          <p>45 min</p>
        </div>
        <div>
          <p className="font-bold">Servings</p>
          <p>4–6</p>
        </div>
        <div>
          <p className="font-bold">Difficulty</p>
          <p>Medium</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>9 lasagna noodles</li>
            <li>500 g ground beef</li>
            <li>1 small onion, finely chopped</li>
            <li>2 cloves garlic, minced</li>
            <li>2 cups tomato sauce</li>
            <li>1 cup béchamel or ricotta cheese</li>
            <li>2 cups shredded mozzarella</li>
            <li>½ cup grated Parmesan</li>
            <li>Olive oil</li>
            <li>Salt and black pepper, to taste</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>Cook lasagna noodles until al dente. Drain and set aside.</li>
            <li>Sauté onion and garlic in olive oil until soft.</li>
            <li>Add ground beef and cook until browned.</li>
            <li>Stir in tomato sauce, season, and simmer for 10 minutes.</li>
            <li>
              Layer sauce, noodles, béchamel, and cheese in a baking dish.
            </li>
            <li>Repeat layers and finish with mozzarella and Parmesan.</li>
            <li>Bake at 180°C (350°F) for 40–45 minutes.</li>
            <li>Rest for 10 minutes before slicing and serving.</li>
          </ol>
        </section>
      </section>

      <section className="bg-gray-50 rounded-2xl p-5">
        <h2 className="text-xl font-semibold mb-2">Tips</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Let lasagna rest before cutting for clean layers.</li>
          <li>Use béchamel for a traditional Italian texture.</li>
          <li>Add spinach or mushrooms for extra depth.</li>
        </ul>
      </section>

      <section className="pt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Watch Video:</h1>
        <div className="flex justify-center">
          <iframe
            className=" h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
            src="https://www.youtube.com/embed/QZloaLmvSP0?si=XnqD7tvXYSZVhqbS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
}

export default Lasagna;
