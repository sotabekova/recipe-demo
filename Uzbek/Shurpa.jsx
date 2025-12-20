import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Shurpa() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Uzbek Shurpa
        </h1>

        <p className="text-center text-gray-700">
          A rich, flavorful soup made with tender chunks of meat, fresh
          vegetables, and aromatic herbs — the perfect comfort dish from
          Uzbekistan.
        </p>

        <img
          src="/images/Shurpa.png"
          alt="Uzbek shurpa"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>20 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>1–1.5 hrs</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>4–6 people</p>
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
              <li>500 g lamb or beef, cut into large chunks</li>
              <li>2 large carrots, sliced into thick rounds</li>
              <li>2 large potatoes, cubed</li>
              <li>2 onions, chopped</li>
              <li>1 bell pepper, chopped</li>
              <li>2–3 tomatoes, chopped</li>
              <li>2 cloves garlic, minced</li>
              <li>2–3 liters water or broth</li>
              <li>2 tbsp vegetable oil</li>
              <li>Salt and black pepper, to taste</li>
              <li>Fresh herbs (parsley, cilantro, dill)</li>
              <li>Optional: bay leaf, cumin seeds</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Heat oil in a large pot. Brown the meat chunks lightly on all
                sides.
              </li>
              <li>
                Add onions and garlic. Sauté until fragrant and lightly golden.
              </li>
              <li>
                Pour in water or broth to cover the meat. Bring to a boil,
                skimming foam if needed. Reduce heat and simmer for 40–50
                minutes.
              </li>
              <li>
                Add carrots, potatoes, bell pepper, and tomatoes. Simmer for
                another 30–40 minutes until vegetables and meat are tender.
              </li>
              <li>
                Season with salt, pepper, and optional spices. Stir in fresh
                herbs just before serving.
              </li>
              <li>Serve hot, ideally with fresh bread on the side.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use lamb for the most authentic flavor.</li>
            <li>Do not over-stir — keep meat chunks whole.</li>
            <li>Fresh herbs added at the end preserve fragrance.</li>
            <li>Skim foam during simmering for a clear broth.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/Fiy14_X7KTw?si=FzFujCEWMLzuW3Vv"
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

export default Shurpa;
