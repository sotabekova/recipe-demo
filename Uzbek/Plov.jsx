import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Plov() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Uzbek Plov (Osh)
        </h1>

        <p className="text-center text-gray-700">
          Uzbekistan’s national dish made with fragrant rice, tender meat,
          sweet carrots, and aromatic spices — rich, comforting, and deeply
          traditional.
        </p>

        <img
          src="/images/plov.png"
          alt="Uzbek plov"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>20 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>1 hr</p>
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
              <li>500 g beef or lamb, cut into large chunks</li>
              <li>2 cups long-grain rice (devzira if available)</li>
              <li>3 large carrots, julienned</li>
              <li>2 large onions, thinly sliced</li>
              <li>1 head of garlic, whole</li>
              <li>150 ml vegetable oil</li>
              <li>1 tbsp cumin seeds</li>
              <li>1 tsp black pepper</li>
              <li>Salt, to taste</li>
              <li>Hot water</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Rinse rice several times until water runs clear. Soak in warm
                salted water and set aside.
              </li>
              <li>
                Heat oil in a heavy pot or kazan until very hot. Add onions and
                fry until deep golden.
              </li>
              <li>
                Add meat and cook on high heat until well browned.
              </li>
              <li>
                Add carrots and cook without stirring for 5 minutes, then mix
                gently.
              </li>
              <li>
                Season with salt, pepper, and cumin. Add enough hot water to
                cover ingredients. Simmer for 30 minutes to form the zirvak.
              </li>
              <li>
                Drain rice and spread it evenly over the meat and carrots
                without stirring. Add water just to cover the rice.
              </li>
              <li>
                Push whole garlic into the rice. Cook uncovered until water
                evaporates.
              </li>
              <li>
                Cover, reduce heat, and steam for 15–20 minutes. Fluff gently
                before serving.
              </li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Never stir the rice until steaming stage.</li>
            <li>Devzira rice gives the most authentic flavor.</li>
            <li>Carrots should be hand-cut, not grated.</li>
            <li>Plov tastes even better after resting for 10 minutes.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
             src="https://www.youtube.com/embed/gc2z9VYGIyY?si=T2w0g-ii4xVpGgPt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Plov;
