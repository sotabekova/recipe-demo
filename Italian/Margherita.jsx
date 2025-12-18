import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Margherita() {
  return (
   <div> <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      <Navbar />

      <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
        Margherita Pizza
      </h1>
      <p>
        A timeless Italian pizza topped with fresh tomatoes, mozzarella, and
        fragrant basil.
      </p>

      <img
        src="/images/Margheritamain.png"
        alt="Margherita Pizza"
        className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
      />

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
        <div>
          <p className="font-bold">Prep</p>
          <p>15 min</p>
        </div>
        <div>
          <p className="font-bold">Cook</p>
          <p>12–15 min</p>
        </div>
        <div>
          <p className="font-bold">Servings</p>
          <p>2–3</p>
        </div>
        <div>
          <p className="font-bold">Difficulty</p>
          <p>Easy</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>1 pizza dough (store-bought or homemade)</li>
            <li>½ cup tomato sauce</li>
            <li>200 g fresh mozzarella, sliced</li>
            <li>2 tbsp olive oil</li>
            <li>Fresh basil leaves</li>
            <li>Salt, to taste</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>Preheat oven to 220°C (430°F).</li>
            <li>Roll out the pizza dough on a floured surface.</li>
            <li>Spread tomato sauce evenly, leaving a small border.</li>
            <li>Add mozzarella slices and drizzle with olive oil.</li>
            <li>Bake for 12–15 minutes until crust is golden.</li>
            <li>Top with fresh basil, slice, and serve hot.</li>
          </ol>
        </section>
      </section>

      <section className="bg-gray-50 rounded-2xl p-5">
        <h2 className="text-xl font-semibold mb-2">Tips</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Use fresh mozzarella for authentic flavor.</li>
          <li>Bake on a hot pizza stone for a crisp crust.</li>
          <li>Add basil after baking to keep it fragrant.</li>
        </ul>
      </section>

      <section className="pt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Watch Video:</h1>
        <div className="flex justify-center">
          <iframe
           className=" h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
            src="https://www.youtube.com/embed/4VSW29yWPlA?si=nLIMHTKOosV6Ah7Z"
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

export default Margherita;
