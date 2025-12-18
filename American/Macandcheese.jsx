import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Macandcheese() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Mac and Cheese
        </h1>

        <p className="text-center text-gray-600">
          A creamy, cheesy comfort food classic made with tender pasta and a
          rich homemade cheese sauce.
        </p>

        <img
          src="/images/macandcheese.png"
          alt="Mac and Cheese"
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
            <p>3–4</p>
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
              <li>250 g elbow macaroni</li>
              <li>2 tbsp butter</li>
              <li>2 tbsp all-purpose flour</li>
              <li>2 cups milk (warm)</li>
              <li>1½ cups shredded cheddar cheese</li>
              <li>½ cup mozzarella cheese</li>
              <li>Salt, to taste</li>
              <li>Black pepper, to taste</li>
              <li>Paprika or mustard powder (optional)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Cook macaroni in salted boiling water until al dente.</li>
              <li>Melt butter in a saucepan over medium heat.</li>
              <li>Whisk in flour and cook for 1 minute.</li>
              <li>Slowly add warm milk, whisking until smooth.</li>
              <li>Stir in cheeses until melted and creamy.</li>
              <li>Add cooked pasta and mix well.</li>
              <li>Season with salt, pepper, and spices.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use freshly shredded cheese for smoother sauce.</li>
            <li>Add cooked bacon or chicken for extra flavor.</li>
            <li>Bake with breadcrumbs on top for a crispy finish.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Watch Video:</h1>
          <div className="flex justify-center">
            <iframe
              className=" h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/HYBjgDt6PlQ?si=vlFG0qO71rVV5QSh"
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

export default Macandcheese;
