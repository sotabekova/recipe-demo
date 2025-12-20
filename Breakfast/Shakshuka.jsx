import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Shakshuka() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Shakshuka
        </h1>

        <p className="text-center text-gray-700">
          Eggs gently poached in a rich tomato and pepper sauce with garlic and
          warming spices — hearty, vibrant, and perfect for any time of day.
        </p>

        <img
          src="/images/Shakshuka.png"
          alt="Shakshuka"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>10 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>25 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>2–4 people</p>
          </div>
          <div>
            <p className="font-bold">Difficulty</p>
            <p>Easy</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>2 tbsp olive oil</li>
              <li>1 onion, finely chopped</li>
              <li>1 red bell pepper, sliced</li>
              <li>3 cloves garlic, minced</li>
              <li>1 tsp paprika</li>
              <li>1 tsp ground cumin</li>
              <li>½ tsp chili flakes (optional)</li>
              <li>400 g crushed tomatoes</li>
              <li>Salt & black pepper, to taste</li>
              <li>4–6 eggs</li>
              <li>Fresh parsley or cilantro, for garnish</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Heat olive oil in a wide pan over medium heat. Sauté onion and
                pepper until soft.
              </li>
              <li>
                Add garlic and spices. Cook for 30 seconds until fragrant.
              </li>
              <li>
                Stir in crushed tomatoes, season, and simmer for 10–15 minutes
                until thickened.
              </li>
              <li>
                Make small wells in the sauce and crack eggs into them.
              </li>
              <li>
                Cover and cook until egg whites are set but yolks are still soft.
              </li>
              <li>
                Garnish with herbs and serve hot with crusty bread.
              </li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use ripe tomatoes or good-quality canned ones.</li>
            <li>Don’t overcook the eggs — runny yolks are key.</li>
            <li>Add feta or olives for extra richness.</li>
            <li>Serve straight from the pan for best experience.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/ifWWRZSWS18"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Shakshuka;
