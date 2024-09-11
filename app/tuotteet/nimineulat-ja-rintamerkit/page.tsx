import { ChevronRight } from "lucide-react";

const badgeTypes = [
  {
    name: "Pintakaiverrettu suorakaide",
    image: "/api/placeholder/200/150?text=Suorakaide",
  },
  {
    name: "Pintakaiverrettu ellipsi",
    image: "/api/placeholder/200/150?text=Ellipsi",
  },
  {
    name: "Peili- eli takaakaiverrettu",
    image: "/api/placeholder/200/150?text=Peilikaiverrrus",
  },
  {
    name: "Painettu nimineula",
    image: "/api/placeholder/200/150?text=Painettu",
  },
  {
    name: "Syövytetty nimineula",
    image: "/api/placeholder/200/150?text=Syövytetty",
  },
  { name: "Tarranimineula", image: "/api/placeholder/200/150?text=Tarra" },
];

const attachmentMethods = [
  "Neula (useita erilaisia)",
  "Klipsi",
  "Magneetti",
  "Pinssi",
  "RST-klipsi",
  "Hauenleukaklipsi",
  "Taskuklipsi",
];

export default function Nimineulat() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 text-gray-800'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-blue-600'>
        NIMINEULAT
      </h1>

      <section className='mb-12'>
        <p className='text-lg text-gray-300 leading-relaxed mb-4'>
          Yleisimmin valmistamamme nimineulat ovat pintakaiverrettuja
          suorakaiteen tai ellipsin muotoisia. Valmistamme nimineuloja myös ns.
          peili- eli takaakaiverrustekniikalla, joka mahdollistaa tasaisen
          nimineulan etupinnan ja useiden eri värien sekä moniväristen kuvioiden
          käyttömahdollisuuden.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-blue-500'>
          Nimineulatyypit
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {badgeTypes.map((type, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <img
                src={type.image}
                alt={type.name}
                className='w-full h-40 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-800'>
                  {type.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12 bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Kiinnitysmenetelmät
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {attachmentMethods.map((method, index) => (
            <div
              key={index}
              className='flex items-center bg-white p-3 rounded-lg shadow'
            >
              <ChevronRight className='mr-2 text-blue-500' size={20} />
              <span className='text-gray-700'>{method}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Erikoisominaisuudet
        </h2>
        <ul className='space-y-2'>
          {[
            "Vaihdettava nimi",
            "Moniväriset kuviot",
            "Sairaala-nimineulat",
            "Yrityslogojen lisääminen",
            "Eri värivaihtoehdot (esim. valkoinen, musta)",
          ].map((feature, index) => (
            <li key={index} className='flex items-start'>
              <ChevronRight
                className='mt-1 mr-2 text-blue-500 flex-shrink-0'
                size={20}
              />
              <span className='text-gray-300'>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Miksi valita meidän nimineulat?
        </h2>
        <ul className='space-y-2'>
          {[
            "Laaja valikoima eri tyyppejä ja muotoja",
            "Korkealaatuiset materiaalit ja viimeistely",
            "Monipuoliset kiinnitysvaihtoehdot",
            "Mahdollisuus vaihdettaviin nimiin",
            "Yritysilmeen mukainen räätälöinti",
            "Nopea toimitus",
          ].map((item, index) => (
            <li key={index} className='flex items-start'>
              <ChevronRight
                className='mt-1 mr-2 text-blue-500 flex-shrink-0'
                size={20}
              />
              <span className='text-gray-300'>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='mt-12 bg-blue-100 p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-600'>
          Ota yhteyttä
        </h2>
        <p className='mb-4 text-lg leading-relaxed text-gray-700'>
          Tarvitsetko apua nimineulojen valinnassa tai suunnittelussa? Haluatko
          tarjouksen yrityksellesi? Ota yhteyttä asiantuntevaan
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
