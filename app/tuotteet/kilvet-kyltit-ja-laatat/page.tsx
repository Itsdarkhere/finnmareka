import { ChevronRight } from "lucide-react";

const productCategories = [
  {
    name: "Profiilinimikilvet",
    image: "/api/placeholder/300/200?text=Profiilinimikilvet",
  },
  {
    name: "Profiili kerrostaulut",
    image: "/api/placeholder/300/200?text=Profiili+kerrostaulut",
  },
  { name: "Kieltokilvet", image: "/api/placeholder/300/200?text=Kieltokilvet" },
  { name: "Alue kartat", image: "/api/placeholder/300/200?text=Alue+kartat" },
  { name: "Oviopasteet", image: "/api/placeholder/300/200?text=Oviopasteet" },
  { name: "Muistokilvet", image: "/api/placeholder/300/200?text=Muistokilvet" },
];

export default function KilvetKyltitLaatat() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">KILVET ja OPASTEET</h1>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">KILVET, OPASTEET, KAIVERRUSTYÖT</h2>
        <p className="mb-4 text-lg text-gray-300 leading-relaxed">Kilpiä tarvitaan ohjaamaan, varottamaan, kieltämään, kehottamaan, muistuttamaan, tiedottamaan, myymään ja mainostamaan. Kilpien materiaalina voi olla mm. muovi, metalli tai puu. Metalleista käytetyimmät ovat alumiini, messinki ja teräs.</p>
        <p className="mb-4 text-lg text-gray-300 leading-relaxed">Kaiverrustyöt ja tarratekstit toteutamme tietokoneilla, jotka mahdollistavat eri tekstityyppien ja logojen käytön. Valmistamme monenlaisia erikoistuotteita myös pieniä eriä ja vaativia erikoistöitä. Me teemme sinetit, stanssit, muotit ja muut erikoistuotteet. Levyt leikkaamme haluamaasi kokoon ja muotoon.</p>
        <p className="font-semibold text-lg text-white">Kannattaa kysyä meiltä.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">Suosituimmat tuotteet</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{category.name}</h3>
                <a href={`#${category.name.toLowerCase().replace(/ /g, '-')}`} className="text-blue-500 hover:text-blue-600 hover:underline transition-colors duration-300">Lue lisää</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Tuotevalikoima</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Kilvet", "Opasteet", "Tienviitat", "Aluekartat", "Postilaatikkokilvet",
            "Ovikilvet ja talonnumerokilvet", "Nimineulat", "Irtokirjaimet ja irtonumerot",
            "Konekilvet", "Etulevyt, Prosessikaaviot", "Varoituskilvet", "Työturvallisuuskilvet",
            "Sähkö- ja LVI-alan kilvet", "Porrastaulut", "Palotaulu", "Porrasvitriinit",
            "Palkintokilvet, pokaalit, mitalit", "Hautakilvet, ristit, koristeet",
            "Uima-altaan opasteet", "Palokunnantaulu"
          ].map((item, index) => (
            <div key={index} className="flex items-center bg-gray-100 p-3 rounded transition-colors duration-300 hover:bg-gray-200">
              <ChevronRight className="mr-2 text-blue-500" size={16} />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Erikoistuotteet</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Metalliset kilvet</h3>
            <ul className="space-y-2">
              {["Messinkiset", "Alumiiniset", "Teräksiset"].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <ChevronRight className="mr-2 text-blue-500" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Muut erikoistuotteet</h3>
            <ul className="space-y-2">
              {["Sinetit", "Stanssit", "Muotit", "Verkkomerkit", "Kalastusnimilaatat"].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <ChevronRight className="mr-2 text-blue-500" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 bg-blue-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">Ota yhteyttä</h2>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">Tarvitsetko apua sopivan kilven, kyltin tai laatan valinnassa? Onko sinulla erityistoiveita tai kysymyksiä? Ota yhteyttä asiantuntevaan henkilökuntaamme, ja autamme sinua löytämään parhaan ratkaisun tarpeisiisi.</p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold shadow-md">
          Ota yhteyttä
        </button>
      </section>
    </div>
  );
}
