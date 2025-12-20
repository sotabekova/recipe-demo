import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Crepes() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          French Crêpes
        </h1>

        <p className="text-center text-gray-700">
          Delicate, thin pancakes with a soft texture and lightly crisp edges —
          perfect for both sweet and savory fillings.
        </p>

        <img
          src="/images/crepess.png"
          alt="French crepes"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>10 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>20 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>10–12 crêpes</p>
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
              <li>1 cup all-purpose flour</li>
              <li>2 eggs</li>
              <li>1½ cups milk</li>
              <li>2 tbsp melted butter</li>
              <li>1 tbsp sugar (optional)</li>
              <li>1 tsp vanilla extract (optional)</li>
              <li>Pinch of salt</li>
              <li>Butter for cooking</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                In a bowl, whisk flour and salt. Add eggs and mix until smooth.
              </li>
              <li>Gradually add milk, whisking to avoid lumps.</li>
              <li>Stir in melted butter, sugar, and vanilla if using.</li>
              <li>
                Heat a non-stick pan over medium heat and lightly butter it.
              </li>
              <li>
                Pour a small ladle of batter and swirl to coat the pan thinly.
              </li>
              <li>Cook for about 1 minute, flip, and cook 30 seconds more.</li>
              <li>Stack crêpes and keep warm until serving.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Resting the batter for 20 minutes improves texture.</li>
            <li>Use a shallow pan for easy swirling.</li>
            <li>First crêpe is always a test — don’t judge it.</li>
            <li>Serve with fruit, Nutella, honey, or savory fillings.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/SpSrBGnjurA?si=JR0vAE5qhCWyftY0"
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

export default Crepes;
