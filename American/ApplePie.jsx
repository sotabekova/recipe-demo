import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function ApplePie() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Classic Apple Pie
        </h1>

        <p className="text-center text-gray-600">
          A warm, comforting dessert made with tender spiced apples and a flaky,
          buttery crust.
        </p>

        <img
          src="/images/applepiemain.png"
          alt="Apple Pie"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>25 min</p>
          </div>
          <div>
            <p className="font-bold">Bake</p>
            <p>45 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>6–8</p>
          </div>
          <div>
            <p className="font-bold">Difficulty</p>
            <p>Medium</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>2 pie crusts (homemade or store-bought)</li>
              <li>6 cups apples, peeled and sliced</li>
              <li>¾ cup sugar</li>
              <li>2 tbsp brown sugar</li>
              <li>1 tsp cinnamon</li>
              <li>¼ tsp nutmeg</li>
              <li>2 tbsp all-purpose flour</li>
              <li>1 tbsp lemon juice</li>
              <li>1 tbsp butter (for topping)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Preheat oven to 190°C (375°F).</li>
              <li>Mix apples with sugars, spices, flour, and lemon juice.</li>
              <li>Place filling into the bottom pie crust.</li>
              <li>Dot with butter and cover with top crust.</li>
              <li>Seal edges and cut slits in the top.</li>
              <li>Bake until golden and bubbly.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use a mix of sweet and tart apples for best flavor.</li>
            <li>Brush crust with egg wash for extra shine.</li>
            <li>Let pie cool before slicing to set the filling.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Watch Video:</h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/QJDy8JR6csI?si=KRvGN2McKCag62wD"
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

export default ApplePie;
