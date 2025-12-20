import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function AdanaKebab() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Adana Kebab
        </h1>

        <p className="text-center text-gray-700">
          A bold and spicy Turkish classic made with hand-chopped lamb, chili
          peppers, and simple seasonings — smoky, juicy, and intensely
          flavorful.
        </p>

        <img
          src="/images/adanakebab.png"
          alt="Adana kebab"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>25 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>15 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>4 people</p>
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
              <li>700 g lamb mince (with fat)</li>
              <li>2 red chili peppers, very finely chopped</li>
              <li>1 small onion, grated and squeezed dry</li>
              <li>2 cloves garlic, minced</li>
              <li>1 tsp red pepper flakes (pul biber)</li>
              <li>1 tsp paprika</li>
              <li>1 tsp ground cumin</li>
              <li>Salt, to taste</li>
              <li>Flat metal skewers</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Combine lamb, chili peppers, onion, garlic, and spices in a
                bowl. Knead firmly for 5–7 minutes until sticky.
              </li>
              <li>
                Cover and refrigerate for at least 1 hour to help the mixture
                firm up.
              </li>
              <li>
                Divide meat evenly and press onto flat skewers, shaping into
                long kebabs.
              </li>
              <li>Preheat grill or charcoal to high heat.</li>
              <li>
                Grill kebabs, turning occasionally, until nicely charred and
                cooked through (about 12–15 minutes).
              </li>
              <li>
                Serve hot with lavash, grilled tomatoes, onions, and sumac.
              </li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use lamb with enough fat — dryness is the enemy.</li>
            <li>Kneading well is key for authentic texture.</li>
            <li>Flat skewers prevent the meat from falling.</li>
            <li>Charcoal grilling gives the best flavor.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/tNIMwUKCeNE?si=lKaIiX7a2bxDC1_0"
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

export default AdanaKebab;
