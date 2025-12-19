import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Lagman() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Lagman
        </h1>

        <p className="text-center text-gray-700">
          A hearty Central Asian noodle dish made with hand-pulled noodles,
          tender meat, and a rich vegetable sauce.
        </p>

        <img
          src="/images/Lagmanmain.png"
          alt="Uzbek lagman noodles"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>30 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>40 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>4</p>
          </div>
          <div>
            <p className="font-bold">Difficulty</p>
            <p>Medium</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>500 g fresh lagman noodles (or thick wheat noodles)</li>
              <li>300 g beef or lamb, sliced</li>
              <li>2 onions, sliced</li>
              <li>1 carrot, julienned</li>
              <li>1 bell pepper, sliced</li>
              <li>2 tomatoes, chopped</li>
              <li>2 cloves garlic, minced</li>
              <li>2 tbsp vegetable oil</li>
              <li>1 tsp paprika</li>
              <li>Salt and black pepper, to taste</li>
              <li>Fresh cilantro or green onions</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Boil noodles in salted water until tender. Drain and set aside.
              </li>
              <li>
                Heat oil in a deep pan. Sauté onions until soft, then add meat
                and cook until browned.
              </li>
              <li>
                Add garlic, carrots, bell pepper, and tomatoes. Cook for 5–7
                minutes.
              </li>
              <li>
                Season with salt, pepper, and paprika. Add a little water and
                simmer for 15–20 minutes.
              </li>
              <li>Serve sauce over noodles and garnish with fresh herbs.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Hand-pulled noodles give the best texture.</li>
            <li>Do not overcook vegetables — lagman should be vibrant.</li>
            <li>Add chili paste if you like it spicy.</li>
            <li>Serve hot with green tea.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
                           className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"

              src="https://www.youtube.com/embed/tTefs0QImfQ?si=4lcAvXAd3ac6CKNO"
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

export default Lagman;
