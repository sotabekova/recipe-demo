import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Manti() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Uzbek Manti
        </h1>

        <p className="text-center text-gray-700">
          Steamed dumplings filled with juicy meat and onions — a comforting
          Uzbek classic often served with yogurt or melted butter.
        </p>

        <img
          src="/images/Manti.png"
          alt="Uzbek manti"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>40 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>45 min</p>
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
              <li>3 cups all-purpose flour</li>
              <li>1 tsp salt</li>
              <li>1 cup warm water</li>
              <li>500 g beef or lamb, finely minced</li>
              <li>3 large onions, very finely chopped</li>
              <li>1 tsp black pepper</li>
              <li>½ tsp cumin</li>
              <li>Salt, to taste</li>
              <li>Butter or oil, for greasing</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Mix flour and salt. Gradually add warm water and knead into a
                firm, smooth dough. Cover and rest for 30 minutes.
              </li>
              <li>
                In a bowl, combine minced meat, onions, salt, pepper, and cumin.
                Mix well until juicy.
              </li>
              <li>
                Roll dough thin and cut into squares (8–10 cm).
                Place a spoon of filling in the center.
              </li>
              <li>
                Fold and pinch edges to form classic manti dumplings.
              </li>
              <li>
                Lightly grease steamer trays and arrange manti with space
                between them.
              </li>
              <li>
                Steam for 40–45 minutes until dough is tender and filling is
                cooked through.
              </li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Serving Suggestions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Serve hot with melted butter or sour cream.</li>
            <li>Top with yogurt and garlic for a classic touch.</li>
            <li>Sprinkle with black pepper or chili flakes.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
             src="https://www.youtube.com/embed/mio5O_EkaJI?si=CIbhYl2_dcBJTEKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Manti;
