import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Fattoush() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Fattoush Salad
        </h1>

        <p className="text-center text-gray-700">
          A vibrant Middle Eastern salad of fresh vegetables, crispy pita, and
          aromatic herbs, all tossed in a tangy sumac dressing.
        </p>

        <img
          src="/images/fattoush.png"
          alt="Fattoush Salad"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>15 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>5 min</p>
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
              <li>2 cups chopped romaine lettuce</li>
              <li>1 cup chopped cucumber</li>
              <li>1 cup chopped tomatoes</li>
              <li>½ cup radishes, sliced</li>
              <li>½ red onion, thinly sliced</li>
              <li>1 cup toasted pita bread, broken into pieces</li>
              <li>½ cup fresh parsley, chopped</li>
              <li>½ cup fresh mint, chopped</li>
              <li>2 tbsp olive oil</li>
              <li>2 tbsp lemon juice</li>
              <li>1 tsp sumac</li>
              <li>Salt & pepper, to taste</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                In a large bowl, combine lettuce, cucumber, tomatoes, radishes,
                onion, parsley, and mint.
              </li>
              <li>
                In a small bowl, whisk together olive oil, lemon juice, sumac,
                salt, and pepper.
              </li>
              <li>
                Pour the dressing over the salad and toss gently to combine.
              </li>
              <li>Just before serving, add toasted pita pieces for crunch.</li>
              <li>Serve immediately for a fresh, vibrant texture.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Toast pita bread until golden for maximum crunch.</li>
            <li>Add a pinch of sumac on top for extra tangy flavor.</li>
            <li>Use fresh herbs — they make all the difference.</li>
            <li>Serve immediately after adding pita to prevent sogginess.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/2VwJwYxK5IM?si=-yjE8oN3WNX8kTpU"
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

export default Fattoush;
