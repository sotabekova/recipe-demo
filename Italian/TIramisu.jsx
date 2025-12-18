import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

function Tiramisu() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Classic Tiramisu
        </h1>
        <p>
          A classic Italian no-bake dessert made with espresso-soaked
          ladyfingers, creamy mascarpone, and a dusting of cocoa.
        </p>

        <img
          src="/images/tiramisu.png"
          alt="Classic Tiramisu"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>30 min</p>
          </div>
          <div>
            <p className="font-bold">Chill</p>
            <p>4 hrs</p>
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
              <li>250 g mascarpone cheese</li>
              <li>3 large eggs, separated</li>
              <li>½ cup sugar</li>
              <li>1 cup strong brewed espresso, cooled</li>
              <li>200 g ladyfinger biscuits</li>
              <li>2 tbsp cocoa powder</li>
              <li>1 tsp vanilla extract</li>
              <li>Pinch of salt</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Whisk egg yolks with sugar until pale and creamy.</li>
              <li>Fold in mascarpone and vanilla until smooth.</li>
              <li>Beat egg whites with salt until stiff peaks form.</li>
              <li>Gently fold egg whites into the mascarpone mixture.</li>
              <li>Dip ladyfingers briefly into espresso.</li>
              <li>Layer ladyfingers and cream mixture in a dish.</li>
              <li>Repeat layers and smooth the top.</li>
              <li>Chill for at least 4 hours.</li>
              <li>Dust generously with cocoa before serving.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Don’t soak ladyfingers too long — a quick dip is enough.</li>
            <li>Use high-quality mascarpone for best flavor.</li>
            <li>Chilling overnight gives the best texture.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Watch Video:</h1>
          <div className="flex justify-center">
            <iframe
              className=" h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/ZZoLlQNdp7Q?si=8E8pkrib_J6T7lgO"
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

export default Tiramisu;
