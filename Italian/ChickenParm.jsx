import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

function ChickenParm() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Chicken Parmigiano
        </h1>
        <p>
          Crispy breaded chicken cutlets baked with rich tomato sauce and melted
          mozzarella and Parmesan cheese.
        </p>

        <img
          src="/images/Chickenparmmain.png"
          alt="Chicken Parmigiano"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>20 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>30 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>4</p>
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
              <li>2 large chicken breasts, halved horizontally</li>
              <li>1 cup breadcrumbs</li>
              <li>½ cup grated Parmesan cheese</li>
              <li>2 eggs, beaten</li>
              <li>1 cup tomato sauce</li>
              <li>1½ cups shredded mozzarella</li>
              <li>½ tsp garlic powder</li>
              <li>Olive oil</li>
              <li>Salt and black pepper, to taste</li>
              <li>Fresh basil (optional)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Preheat oven to 190°C (375°F).</li>
              <li>Season chicken with salt and pepper.</li>
              <li>Coat chicken in egg, then breadcrumb-Parmesan mixture.</li>
              <li>Pan-fry in olive oil until golden on both sides.</li>
              <li>Place chicken in a baking dish and top with tomato sauce.</li>
              <li>Add mozzarella and extra Parmesan.</li>
              <li>Bake for 20–25 minutes until bubbly and cooked through.</li>
              <li>Garnish with fresh basil and serve.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Pound chicken evenly for juicy, even cooking.</li>
            <li>Use fresh mozzarella for extra melt.</li>
            <li>Serve with pasta or a simple green salad.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Watch Video:</h1>
          <div className="flex justify-center">
            <iframe
                           className=" h-[250px] w-[400px] md:h-[500px] md:w-[900px]"

              src="https://www.youtube.com/embed/DeXgYawwkac?si=XfiT9pFLm6014f38"
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

export default ChickenParm;
