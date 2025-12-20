import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Pentuza() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Funchoza (Glass Noodle Salad)
        </h1>

        <p className="text-center text-gray-700">
          A refreshing and flavorful salad with glass noodles, fresh vegetables,
          and a tangy soy-based dressing — perfect as a light lunch or side
          dish.
        </p>

        <img
          src="/images/Pentuza.png"
          alt="Funchoza"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>15 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>10 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>4 people</p>
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
              <li>150 g glass noodles (funchoza)</li>
              <li>1 carrot, julienned</li>
              <li>1 cucumber, julienned</li>
              <li>1 red bell pepper, thinly sliced</li>
              <li>2 cloves garlic, minced</li>
              <li>3 tbsp soy sauce</li>
              <li>2 tbsp rice vinegar or lemon juice</li>
              <li>1 tbsp sesame oil</li>
              <li>1 tsp sugar</li>
              <li>Fresh cilantro or parsley, for garnish</li>
              <li>Optional: cooked shrimp, chicken, or tofu</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Cook glass noodles according to package instructions, then drain
                and rinse with cold water.
              </li>
              <li>
                In a large bowl, combine noodles, carrot, cucumber, and bell
                pepper.
              </li>
              <li>
                Whisk together soy sauce, vinegar, sesame oil, sugar, and garlic
                to make the dressing.
              </li>
              <li>
                Pour dressing over the noodle mixture and toss gently to
                combine.
              </li>
              <li>
                Garnish with fresh herbs and optional protein, then serve
                chilled or at room temperature.
              </li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Don’t overcook noodles — they should remain slightly chewy.</li>
            <li>Add a bit of chili or sesame seeds for extra flavor.</li>
            <li>Prepare ahead — flavors develop better after 30–60 minutes.</li>
            <li>Use fresh, crisp vegetables for the best texture.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/0e3-yYqfmZo?si=30H34nfOrxC81E9z"
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

export default Pentuza;
