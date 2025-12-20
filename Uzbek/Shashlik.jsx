import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Shashlik() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Uzbek Shashlik
        </h1>

        <p className="text-center text-gray-700">
          Juicy skewered meat grilled over open flames — smoky, tender, and
          deeply flavorful. A beloved street food and gathering favorite across
          Uzbekistan.
        </p>

        <img
          src="/images/shashlik.png"
          alt="Uzbek shashlik"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>20 min</p>
          </div>
          <div>
            <p className="font-bold">Marinate</p>
            <p>4–8 hrs</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>15 min</p>
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
              <li>1 kg lamb or beef, cut into large cubes</li>
              <li>3 large onions, thinly sliced</li>
              <li>100 ml vegetable oil</li>
              <li>1 tbsp vinegar or lemon juice</li>
              <li>1 tsp black pepper</li>
              <li>1 tsp cumin</li>
              <li>Salt, to taste</li>
              <li>Metal skewers</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Place meat in a large bowl. Add onions, oil, vinegar, salt,
                pepper, and cumin.
              </li>
              <li>
                Massage the marinade into the meat well. Cover and marinate for
                at least 4 hours, preferably overnight.
              </li>
              <li>
                Thread meat onto skewers, pressing onions lightly between
                pieces.
              </li>
              <li>
                Grill over hot charcoal, turning frequently, until evenly
                browned and cooked through.
              </li>
              <li>
                Remove from grill and let rest for 5 minutes before serving.
              </li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Serving Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Serve with sliced onions and fresh herbs.</li>
            <li>Best paired with non bread and achichuk salad.</li>
            <li>Do not overcook — shashlik should stay juicy.</li>
            <li>Enjoy straight off the skewer for full flavor.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/fAnr4ThhC1Q?si=JsA70ZdmrEcW0wBR"
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

export default Shashlik;
