import { ChevronRight } from "lucide-react";

const categories = [
  {
    title: "SABLUUNA MATERIAALIT",
    items: [
      "TARRA",
      "MUOVI",
      "VANERI",
      "ALUMIINI",
      "TERÄS RST",
      "KUMI",
      "PAHVI",
      "ÖLJYKARTONKI",
    ],
    image: "/api/placeholder/400/300?text=Sabluuna+Materiaalit",
  },
  {
    title: "MAALAUSSABLUUNA VÄRIT",
    items: ["puutavarasabluunat", "logot", "ce merkit", "KOKO MERKINNÄT"],
    image: "/api/placeholder/400/300?text=Maalaussabluuna+Värit",
  },
  {
    title: "LÄHTEVÄN TAVARAN SABLUUNAT",
    items: ["lasi, särkyvää", "nostopiste", "kastuvaa"],
    image: "/api/placeholder/400/300?text=Lähtevän+Tavaran+Sabluunat",
  },
  {
    title: "ELINTARVIKESABLUUNAT",
    items: ["toukka-sabluunat", "ippc sablunat"],
    image: "/api/placeholder/400/300?text=Elintarvikesabluunat",
  },
  {
    title: "TIEMERKINTÄSABLUUNAT",
    items: ["nuolet, p, inva, leikkikuviot", "numerot, ajoneuvot kaistoille"],
    image: "/api/placeholder/400/300?text=Tiemerkintäsabluunat",
  },
  {
    title: "HIEKKAPUHALLUSSABLUUNAT",
    items: [],
    image: "/api/placeholder/400/300?text=Hiekkapuhallussabluunat",
  },
  {
    title: "KOTIKÄYTTÖÖN",
    items: ["kuviosabluuna seinä", "Boardi maalaukseen"],
    image: "/api/placeholder/400/300?text=Kotikäyttöön",
  },
  {
    title: "ASVALTTI MAALAUKSET",
    items: ["KOULUN PIHAAN", "HYPPYRUUDUKKO", "TERVAPATA", "PARKKIRUUDUT"],
    image: "/api/placeholder/400/300?text=Asvaltti+Maalaukset",
  },
];

const products = [
  { name: "ASVALTTI MAALAUSABLUUNA NUMEROT", material: "AINE VANERI" },
  { name: "ASVALTTI MAALAUSABLUUNA LINJAAUTO", material: "AINE VANERI" },
  { name: "ASVALTTI MAALAUSABLUUNA NUOLI", material: "AINE VANERI" },
  { name: "OHUT MUOVINEN MAALAUSSABLUNA", material: "" },
  { name: "VÄRIRULLIA JA PATRUUNOITA", material: "" },
];

export default function Maalausablunat() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 text-gray-800'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-white'>
        MAALAUSSABLUUNAT
      </h1>

      <section className='mb-12'>
        <p className='text-lg text-center text-gray-300 leading-relaxed mb-4'>
          Tarjoamme laajan valikoiman maalaussabluunoita erilaisiin
          käyttötarkoituksiin. Oli kyseessä sitten teollisuus, tiemerkinnät tai
          kotikäyttö, meiltä löydät tarvitsemasi sabluunat ja välineet.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-white'>
          Sabluunatuotteet ja -kategoriat
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {categories.map((category, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <img
                src={category.image}
                alt={category.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                  {category.title}
                </h3>
                <ul className='text-gray-600 space-y-1'>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className='flex items-center'>
                      <ChevronRight size={16} className='mr-2 text-blue-500' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12 bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Erikoistuotteet
        </h2>
        <ul className='space-y-2'>
          {products.map((product, index) => (
            <li key={index} className='flex items-start'>
              <ChevronRight
                className='mt-1 mr-2 text-blue-500 flex-shrink-0'
                size={20}
              />
              <span className='text-gray-700'>
                <strong>{product.name}</strong>
                {product.material && ` - ${product.material}`}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className='mt-12 bg-blue-100 p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-600'>
          Ota yhteyttä
        </h2>
        <p className='mb-4 text-lg leading-relaxed text-gray-700'>
          Tarvitsetko apua sopivien maalaussabluunoiden valinnassa tai
          räätälöidyn ratkaisun suunnittelussa? Ota yhteyttä asiantuntevaan
          henkilökuntaamme, ja autamme sinua löytämään parhaan ratkaisun
          tarpeisiisi.
        </p>
        <button className='bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold shadow-md'>
          Pyydä tarjous
        </button>
      </section>
    </div>
  );
}
