import { ChevronRight } from "lucide-react";

const mapTypes = [
  {
    title: "Teollisuusaluekartta",
    image: "/api/placeholder/400/300?text=Teollisuusaluekartta",
    description:
      "Tarratulosteena toteutettu kartta teollisuusalueille. Pohjamateriaalina kestävä muovilevy.",
  },
  {
    title: "Vaihdettavat paikannimiopasteet",
    image: "/api/placeholder/400/300?text=Vaihdettavat+opasteet",
    description:
      "Kartta, jossa paikkojen nimet ovat vaihdettavissa alumiiniliuskoissa. Helppo päivittää muutosten yhteydessä.",
  },
  {
    title: "Oviopaste",
    image: "/api/placeholder/400/300?text=Oviopaste",
    description:
      "Oveen kiinnitettävä opaste tarratulosteena. Selkeä ja informatiivinen.",
  },
  {
    title: "Retkeilyalueen opaste",
    image: "/api/placeholder/400/300?text=Retkeilyopaste",
    description:
      "Tarratulosteena toteutettu opaste retkeilyalueille. Säänkestävä ja selkeä.",
  },
  {
    title: "Palokunnan taulu",
    image: "/api/placeholder/400/300?text=Palokunnan+taulu",
    description: "Erityisesti palokunnan tarpeisiin suunniteltu opastetaulu.",
  },
  {
    title: "Kiinteistön aluekartta",
    image: "/api/placeholder/400/300?text=Kiinteistön+kartta",
    description: "Alumiinipohjalle toteutettu kestävä kiinteistön aluekartta.",
  },
];

export default function AlueKartat() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 text-gray-800'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-white'>
        ALUEKARTAT
      </h1>

      <section className='mb-12'>
        <p className='text-lg text-gray-300 text-center leading-relaxed mb-4'>
          Tarjoamme laadukkaita aluekarttoja ja opasteita erilaisiin tarpeisiin.
          Kartat voidaan toteuttaa neliväritulosteena tai tarroilla tehtynä.
          Pohjamateriaalina käytämme kestävää alumiinilevyä tai muovilevyä
          asiakkaan tarpeiden mukaan.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-white'>
          Aluekarttatyypit ja opasteet
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {mapTypes.map((type, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <img
                src={type.image}
                alt={type.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                  {type.title}
                </h3>
                <p className='text-gray-600 mb-4'>{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12 bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Muut opasteet ja kilvet
        </h2>
        <ul className='space-y-2'>
          {[
            "Ohjeistuskilvet",
            "Savuton alue -opasteet",
            "Kielto-opasteet",
            "Muistomerkkiopasteet",
            "Räätälöidyt opasteet erityistarpeisiin",
          ].map((item, index) => (
            <li key={index} className='flex items-start'>
              <ChevronRight
                className='mt-1 mr-2 text-blue-500 flex-shrink-0'
                size={20}
              />
              <span className='text-gray-700'>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-white'>
          Miksi valita meidän aluekarttamme?
        </h2>
        <ul className='space-y-2'>
          {[
            "Korkealaatuiset materiaalit takaavat pitkän käyttöiän",
            "Räätälöitävissä asiakkaan tarpeiden mukaan",
            "Selkeä ja informatiivinen design",
            "Mahdollisuus päivitettäviin osiin (esim. vaihdettavat paikannimet)",
            "Laaja valikoima eri kokoja ja tyylejä",
            "Ammattitaitoinen suunnittelu- ja asennuspalvelu",
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
          Tarvitsetko apua sopivan aluekartan tai opasteen suunnittelussa? Ota
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
