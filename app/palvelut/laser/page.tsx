import { ChevronRight } from "lucide-react";

const materials = [
  "muovit",
  "metallit",
  "puu",
  "kivi",
  "kumi",
  "lasi",
  "nahka",
  "kaakeli",
];

const products = [
  {
    title: "Mainoslahjat",
    description:
      "Logojen ja nimien merkkaus, nimet, kynät, puukot, puutuotteet",
    image: "/api/placeholder/400/300?text=Mainoslahjat",
  },
  {
    title: "RST merkinnät",
    description:
      "Ruostumattomaan teräkseen mustalla värillä tehty kestävä merkintä",
    image: "/api/placeholder/400/300?text=RST+merkinnät",
  },
  {
    title: "Muovituotteet",
    description:
      "Kilvet, irtokirjaimet, mitallit, figuurit, pöytäkoristeet, koteloiden ja etulevyjen aukotus",
    image: "/api/placeholder/400/300?text=Muovituotteet",
  },
  {
    title: "Eloksoidut alumiinikilvet",
    description: "Laitekilvet, ovikilvet, avaimenperät, palkintojen nimilaatat",
    image: "/api/placeholder/400/300?text=Alumiinikilvet",
  },
  {
    title: "Maalaus-merkkaus-sabluunat",
    description:
      "Sabluunat eri materiaaleille: muovi, kumi, pahvi, puu, alumiini, teräs, rst",
    image: "/api/placeholder/400/300?text=Sabluunat",
  },
  {
    title: "Erikoistuotteet",
    description:
      "Kumituotteet, lasiesineet, nahkatuotteet, pahvimallit, puutuotteet",
    image: "/api/placeholder/400/300?text=Erikoistuotteet",
  },
];

export default function Laser() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 text-gray-800'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-blue-600'>
        LASER
      </h1>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Laserin käyttökohteet
        </h2>
        <div className='grid grid-cols-3 gap-4 text-center'>
          {["KAIVERRUS", "MERKKAUS", "IRTILEIKKAUS"].map((use, index) => (
            <div key={index} className='bg-blue-100 p-4 rounded-lg shadow-md'>
              <p className='text-lg font-semibold text-blue-600'>{use}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Materiaalit, joita voimme työstää
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {materials.map((material, index) => (
            <div
              key={index}
              className='bg-gray-100 p-3 rounded-lg shadow-md flex items-center'
            >
              <ChevronRight className='mr-2 text-blue-500' size={20} />
              <span className='text-gray-700 capitalize'>{material}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-blue-500'>
          Tuotteet ja palvelut
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {products.map((product, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                  {product.title}
                </h3>
                <p className='text-gray-600'>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-blue-500'>
          Esimerkkejä töistämme
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {[
            "RST merkkaus musta väri",
            "Puutuotteiden merkkaus",
            "Mitali muovista",
            "Palkinto",
            "Puutuolien merkkaus",
            "Puupalkinto merkkaus",
            "Termospullo merkkaus",
            "Puulauta merkkaus",
            "Puinen nimikilpi",
            "Juustolaudan merkkaus",
            "Lasimaljakon merkkaus",
            "Leikkuulauta merkkaus",
            "Kuksan merkkaus",
            "Lasikannen merkkaus",
            "Metallilautasen logon kaiverrus",
            "Laserpoltettu maisemakuva",
          ].map((example, index) => (
            <div key={index} className='bg-gray-100 p-3 rounded-lg shadow-md'>
              <img
                src={`/api/placeholder/200/150?text=Esimerkki+${index + 1}`}
                alt={example}
                className='w-full h-32 object-cover mb-2 rounded'
              />
              <p className='text-sm text-center text-gray-700'>{example}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-12 bg-blue-100 p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-600'>
          Ota yhteyttä
        </h2>
        <p className='mb-4 text-lg leading-relaxed text-gray-700'>
          Haluatko tietää lisää laserpalveluistamme tai pyytää tarjouksen? Ota
          yhteyttä asiantuntevaan henkilökuntaamme, ja autamme sinua löytämään
          parhaan ratkaisun tarpeisiisi.
        </p>
        <button className='bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold shadow-md'>
          Pyydä tarjous
        </button>
      </section>
    </div>
  );
}
