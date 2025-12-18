import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Friedchicken() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Crispy Fried Chicken
        </h1>

        <p className="text-center text-gray-600">
          Golden, crispy fried chicken with a juicy inside, seasoned to
          perfection and fried until crunchy.
        </p>

        <img
          src="/images/friedchickenmain.png"
          alt="Fried Chicken"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>20 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>25 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>3–4</p>
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
              <li>1 kg chicken pieces (drumsticks, thighs, or wings)</li>
              <li>2 cups buttermilk</li>
              <li>2 cups all-purpose flour</li>
              <li>1 tsp paprika</li>
              <li>1 tsp garlic powder</li>
              <li>1 tsp onion powder</li>
              <li>1 tsp salt</li>
              <li>½ tsp black pepper</li>
              <li>Oil, for frying</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Marinate chicken in buttermilk for at least 1 hour.</li>
              <li>Mix flour with spices in a bowl.</li>
              <li>
                Remove chicken from buttermilk and coat in seasoned flour.
              </li>
              <li>Heat oil to 170–175°C (340–350°F).</li>
              <li>Fry chicken in batches until golden and cooked through.</li>
              <li>Drain on paper towels and rest before serving.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Don’t overcrowd the pan — fry in batches.</li>
            <li>Let coated chicken rest 10 minutes before frying.</li>
            <li>Use a thermometer for perfectly cooked chicken.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Watch Video:</h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/ekd7TsSyDiw?si=bccHzOearHsuOj07"
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

export default Friedchicken;
