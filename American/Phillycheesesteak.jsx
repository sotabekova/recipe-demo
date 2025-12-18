import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Phillycheesesteak() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Philly Cheesesteak
        </h1>

        <p className="text-center text-gray-600">
          A classic Philadelphia sandwich made with thin-sliced steak, melted
          cheese, and sautéed onions on a toasted hoagie roll.
        </p>

        <img
          src="/images/phillycheesesteakmain.png"
          alt="Philly Cheesesteak"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>10 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>15 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>2</p>
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
              <li>300 g ribeye steak, thinly sliced</li>
              <li>2 hoagie rolls</li>
              <li>1 medium onion, thinly sliced</li>
              <li>1 tbsp oil or butter</li>
              <li>4 slices provolone cheese</li>
              <li>Salt, to taste</li>
              <li>Black pepper, to taste</li>
              <li>Optional: bell peppers or mushrooms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Heat oil in a skillet over medium-high heat.</li>
              <li>Sauté onions until soft and lightly caramelized.</li>
              <li>Add steak, season with salt and pepper, and cook quickly.</li>
              <li>Lay cheese over the steak and let it melt.</li>
              <li>Toast hoagie rolls lightly.</li>
              <li>Fill rolls with the cheesy steak mixture and serve hot.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Freeze steak for 20 minutes before slicing for thinner cuts.
            </li>
            <li>Use provolone, American, or Cheese Whiz for authenticity.</li>
            <li>Don’t overcook the steak — it should stay juicy.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Watch Video:</h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/ufn10FKMSZ8?si=tq3Jy3h3QHU_fhUm"
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

export default Phillycheesesteak;
