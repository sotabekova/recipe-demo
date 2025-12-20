import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Katlama() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Uzbek Katlama
        </h1>

        <p className="text-center text-gray-700">
          Crispy, flaky layered flatbread often filled with onions or herbs — a
          beloved Uzbek breakfast or snack.
        </p>

        <img
          src="/images/qatlama.png"
          alt="Uzbek katlama"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>20 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>15–20 min</p>
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
          {/* Ingredients */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>2 cups all-purpose flour</li>
              <li>½ tsp salt</li>
              <li>¾ cup water (warm)</li>
              <li>3 tbsp vegetable oil or melted butter</li>
              <li>1 large onion, finely chopped (optional filling)</li>
              <li>Fresh herbs (optional: parsley, dill)</li>
              <li>Butter or oil for frying</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Mix flour and salt. Gradually add water and knead into a soft
                dough. Cover and rest for 15–20 minutes.
              </li>
              <li>
                Divide dough into small balls. Roll each ball into a thin
                circle.
              </li>
              <li>
                Brush with oil or butter. Sprinkle filling (onion + herbs) if
                using. Fold or roll to form layers.
              </li>
              <li>
                Heat a skillet over medium heat. Fry each katlama until golden
                and crisp, flipping once.
              </li>
              <li>
                Serve hot as a snack, breakfast, or side with tea or yogurt.
              </li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Roll dough as thin as possible for maximum flakiness.</li>
            <li>Use plenty of butter/oil between layers for crisp texture.</li>
            <li>
              Onion filling can be mixed with chopped herbs for extra flavor.
            </li>
            <li>Serve immediately for the best crunch.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
                          className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"

              src="https://www.youtube.com/embed/Ajf0gtXZngA?si=SuwetXXp_lZy1-Zp"
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

export default Katlama;
