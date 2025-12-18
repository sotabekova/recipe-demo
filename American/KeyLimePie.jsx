import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function KeyLimePie() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Key Lime Pie
        </h1>

        <p className="text-center text-gray-600">
          A tangy and refreshing dessert made with a creamy lime filling and a
          buttery graham cracker crust.
        </p>

        <img
          src="/images/keylimepiemain.png"
          alt="Key Lime Pie"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>20 min</p>
          </div>
          <div>
            <p className="font-bold">Bake</p>
            <p>15 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>6–8</p>
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
              <li>1 graham cracker crust</li>
              <li>1 can (400 g) sweetened condensed milk</li>
              <li>½ cup key lime juice</li>
              <li>1 tbsp lime zest</li>
              <li>3 egg yolks</li>
              <li>Whipped cream, for topping</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Preheat oven to 175°C (350°F).</li>
              <li>Whisk condensed milk, egg yolks, lime juice, and zest.</li>
              <li>Pour filling into the crust.</li>
              <li>Bake until set but slightly jiggly.</li>
              <li>Cool completely, then refrigerate.</li>
              <li>Top with whipped cream before serving.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Fresh lime juice gives the best flavor.</li>
            <li>Chill at least 3 hours for clean slices.</li>
            <li>Add extra zest for a stronger citrus kick.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Watch Video:</h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/gcfCTeAps24?si=8IGjf_gs6tBtH7kR"
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

export default KeyLimePie;
