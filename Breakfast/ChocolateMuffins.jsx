import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function ChocolateMuffins() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Chocolate Muffins
        </h1>

        <p className="text-center text-gray-700">
          Soft and fluffy chocolate muffins with a rich cocoa flavor and melty
          chocolate bits — perfect for breakfast, snack, or dessert.
        </p>

        <img
          src="/images/chocmuffins.png"
          alt="Chocolate muffins"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>15 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>20 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>10–12 muffins</p>
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
              <li>1¾ cups all-purpose flour</li>
              <li>½ cup cocoa powder</li>
              <li>1 cup sugar</li>
              <li>2 tsp baking powder</li>
              <li>½ tsp baking soda</li>
              <li>¼ tsp salt</li>
              <li>2 eggs</li>
              <li>¾ cup milk</li>
              <li>½ cup vegetable oil or melted butter</li>
              <li>1 tsp vanilla extract</li>
              <li>½ cup chocolate chips</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Preheat oven to 180°C (350°F) and line a muffin tin.</li>
              <li>
                In a bowl, whisk flour, cocoa, sugar, baking powder, baking
                soda, and salt.
              </li>
              <li>In another bowl, whisk eggs, milk, oil, and vanilla.</li>
              <li>Combine wet and dry ingredients gently — do not overmix.</li>
              <li>Fold in chocolate chips.</li>
              <li>Fill muffin cups about ¾ full.</li>
              <li>Bake for 18–22 minutes until a toothpick comes out clean.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Do not overmix — muffins should be tender.</li>
            <li>Use good-quality cocoa for richer flavor.</li>
            <li>Add nuts or white chocolate for variation.</li>
            <li>Best enjoyed slightly warm.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/jG75GbL9BcA?si=PRBqgs2YZc1oCYlC"
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

export default ChocolateMuffins;
