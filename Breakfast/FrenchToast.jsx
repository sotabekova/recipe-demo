import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function FrenchToast() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          French Toast
        </h1>

        <p className="text-center text-gray-700">
          Golden slices of bread soaked in a creamy egg mixture and pan-fried
          until crisp outside and soft inside — a timeless breakfast classic.
        </p>

        <img
          src="/images/frenchtoastt.png"
          alt="French toast"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>5 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>15 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>4 slices</p>
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
              <li>4 thick slices bread (brioche or challah)</li>
              <li>2 eggs</li>
              <li>½ cup milk or cream</li>
              <li>1 tbsp sugar or honey</li>
              <li>1 tsp vanilla extract</li>
              <li>½ tsp cinnamon</li>
              <li>Butter for frying</li>
              <li>Maple syrup, for serving</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Whisk eggs, milk, sugar, vanilla, and cinnamon in a shallow
                bowl.
              </li>
              <li>
                Dip bread slices into the mixture, coating both sides briefly.
              </li>
              <li>Heat butter in a pan over medium heat.</li>
              <li>Fry bread until golden brown, about 2–3 minutes per side.</li>
              <li>Serve warm with syrup, fruit, or powdered sugar.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Day-old bread absorbs better without getting soggy.</li>
            <li>Don’t soak too long — quick dip is perfect.</li>
            <li>Cook low and slow for even browning.</li>
            <li>Add orange zest or nutmeg for extra aroma.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/Km7KRbKVu88?si=PMmKRyj5PEIpWPtB"
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

export default FrenchToast;
