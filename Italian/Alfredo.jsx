import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Alfredo() {
  return (
   <div> <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      <Navbar />

      <h1 className=" pt-20 text-3xl md:text-4xl font-bold text-center">
        Fettuccine Alfredo
      </h1>
      <p className=" ">
        A creamy, comforting Italian classic made with simple ingredients and
        rich flavor.
      </p>

      <img
        src="/images/alfredomain.png"
        alt="Fettuccine Alfredo"
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
          <ul className="list-disc list-inside space-y-2 ">
            <li>250 g fettuccine pasta</li>
            <li>2 tbsp butter</li>
            <li>2 cloves garlic, minced</li>
            <li>1 cup heavy cream</li>
            <li>1 cup freshly grated Parmesan cheese</li>
            <li>Salt, to taste</li>
            <li>Black pepper, to taste</li>
            <li>Fresh parsley (optional)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal list-inside space-y-3 ">
            <li>Cook fettuccine in salted boiling water until al dente.</li>
            <li>Melt butter in a pan over medium heat and add garlic.</li>
            <li>Pour in the cream and gently simmer for 3–4 minutes.</li>
            <li>Stir in Parmesan cheese until the sauce is smooth.</li>
            <li>Toss pasta with the sauce, adding pasta water if needed.</li>
            <li>Season with salt and pepper and serve immediately.</li>
          </ol>
        </section>
      </section>

      <section className="bg-gray-50 rounded-2xl p-5">
        <h2 className="text-xl font-semibold mb-2">Tips </h2>
        <ul className="list-disc list-inside space-y-2 ">
          <li>Add grilled chicken or shrimp for extra protein.</li>
          <li>Use freshly grated Parmesan for best texture.</li>
          <li>Serve right away — Alfredo thickens as it sits.</li>
        </ul>
      </section>

      <section className="pt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Watch Video:</h1>
        <div className="flex justify-center">
          <iframe
           className=" h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
            src="https://www.youtube.com/embed/F7CU0qBdj04?si=3wXsB8sHijMdu6Bx"
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
export default Alfredo;
