import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Meatsomsa() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Meat Somsa (Uzbek Style)
        </h1>

        <p className="text-center text-gray-700">
          Crispy baked pastries filled with juicy minced meat and onions — a
          beloved Uzbek street food and home favorite.
        </p>

        <img
          src="/images/Meatsomsaa.png"
          alt="Uzbek meat somsa"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>30 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>35 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>8–10 somsa</p>
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
              <li>2 tbsp vegetable oil</li>
              <li>400 g beef or lamb, finely diced</li>
              <li>2 large onions, finely chopped</li>
              <li>1 tsp black pepper</li>
              <li>1 tsp cumin (optional)</li>
              <li>Salt, to taste</li>
              <li>1 egg (for egg wash)</li>
              <li>Sesame or nigella seeds</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Mix flour and salt. Add warm water and oil, knead into a smooth
                dough. Cover and rest for 20 minutes.
              </li>
              <li>
                Combine meat, onions, salt, pepper, and cumin in a bowl. Mix
                well.
              </li>
              <li>
                Roll dough thin and cut into circles. Place filling in the
                center.
              </li>
              <li>
                Fold into triangle or envelope shape and seal edges tightly.
              </li>
              <li>
                Place on baking tray, brush with egg wash, and sprinkle seeds.
              </li>
              <li>
                Bake at 200°C (390°F) for 30–35 minutes until golden brown.
              </li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Finely diced meat gives the juiciest filling.</li>
            <li>Use plenty of onions — they keep the somsa moist.</li>
            <li>Seal edges well to prevent leaking.</li>
            <li>Serve hot with green tea or tomato salad.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
             src="https://www.youtube.com/embed/bHZHh84notI?si=i8xrI3Z5KdffBqr2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Meatsomsa;
