import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Doner() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Döner Kebab
        </h1>

        <p className="text-center text-gray-700">
          Thinly sliced, marinated meat cooked on a rotating spit — juicy,
          savory, and packed with flavor. A beloved street food classic across
          Turkey and beyond.
        </p>

        <img
          src="/images/donerkebab.png"
          alt="Döner kebab"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>40 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>25 min</p>
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
              <li>800 g beef, lamb, or chicken (thinly sliced)</li>
              <li>3 tbsp yogurt</li>
              <li>3 tbsp olive oil</li>
              <li>2 tbsp onion juice (grated onion, squeezed)</li>
              <li>2 cloves garlic, minced</li>
              <li>1 tsp paprika</li>
              <li>1 tsp ground cumin</li>
              <li>½ tsp oregano</li>
              <li>Salt & black pepper, to taste</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Combine yogurt, olive oil, onion juice, garlic, and spices in a
                bowl.
              </li>
              <li>
                Add sliced meat and mix well. Cover and marinate for at least 4
                hours or overnight.
              </li>
              <li>
                Stack marinated meat tightly and chill for 30 minutes for easier
                slicing.
              </li>
              <li>Heat a heavy pan or grill over medium-high heat.</li>
              <li>Cook meat in batches until browned and slightly crispy.</li>
              <li>
                Serve in pita or lavash with tomatoes, lettuce, onions, and
                sauce.
              </li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Slice meat as thin as possible for authentic texture.</li>
            <li>Long marination equals deeper flavor.</li>
            <li>High heat gives that classic crispy edge.</li>
            <li>Serve immediately — döner waits for no one.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
                           className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"

              src="https://www.youtube.com/embed/TGLv__bZzfU?si=-Wj1AmDObKNkHkAv"
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

export default Doner;
