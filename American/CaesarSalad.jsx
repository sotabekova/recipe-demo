import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function CaesarSalad() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Classic Caesar Salad
        </h1>

        <p className="text-center text-gray-600">
          A crisp and refreshing salad made with romaine lettuce, crunchy
          croutons, Parmesan cheese, and creamy Caesar dressing.
        </p>

        <img
          src="/images/Caesarsalad.png"
          alt="Caesar Salad"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>15 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>—</p>
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
              <li>1 large romaine lettuce, chopped</li>
              <li>1 cup croutons</li>
              <li>½ cup grated Parmesan cheese</li>
              <li>1 chicken breast, grilled (optional)</li>
              <li>Salt and black pepper, to taste</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Wash and dry the romaine lettuce thoroughly.</li>
              <li>Place lettuce in a large bowl.</li>
              <li>Add croutons and Parmesan cheese.</li>
              <li>Toss with Caesar dressing until evenly coated.</li>
              <li>Top with grilled chicken if using and serve immediately.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use freshly grated Parmesan for best flavor.</li>
            <li>Chill the bowl before assembling for extra crunch.</li>
            <li>Add shrimp or salmon for variation.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Watch Video:
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/TZOjcyJycNo?si=z5gx3NP1rUHGxzEh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default CaesarSalad;
