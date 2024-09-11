import { ChevronRight } from "lucide-react";

const engravingCategories = [
  "Kilvet",
  "Opasteet",
  "Tienviitat",
  "Konekilvet",
  "Etulevyt",
  "Palkintokilvet",
  "Pokaalit",
  "Mitallit",
  "Meistit",
  "Lyöntimeistit",
  "Stanssit",
  "Polttolaatat",
  "Painolaatat",
  "Muotit",
  "Erikoistyöt",
  "Muistolaatat",
  "Irtokirjaimet",
];

const galleryImages = [
  { src: "/api/placeholder/400/300?text=Mallitaulu+1", alt: "Mallitaulu 1" },
  { src: "/api/placeholder/400/300?text=Mallitaulu+2", alt: "Mallitaulu 2" },
  { src: "/api/placeholder/400/300?text=Etulevyt", alt: "Etulevyt" },
  {
    src: "/api/placeholder/400/300?text=Eloksoidut+alumiinikilvet",
    alt: "Eloksoidut alumiinikilvet",
  },
  {
    src: "/api/placeholder/400/300?text=Messinkikilvet",
    alt: "Messinkikilvet",
  },
  { src: "/api/placeholder/400/300?text=Ohjauskilvet", alt: "Ohjauskilvet" },
  {
    src: "/api/placeholder/400/300?text=Kromatut+metallikirjaimet",
    alt: "Kromatut metallikirjaimet",
  },
  { src: "/api/placeholder/400/300?text=Lyöntimeisti", alt: "Lyöntimeisti" },
  {
    src: "/api/placeholder/400/300?text=Metallikaiverruksia",
    alt: "Metallikaiverruksia",
  },
];

export default function Kaiverrus() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 text-gray-800'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-blue-600'>
        KAIVERRUSTYÖT
      </h1>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Palvelumme
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {engravingCategories.map((category, index) => (
            <div
              key={index}
              className='flex items-center bg-gray-100 p-3 rounded transition-colors duration-300 hover:bg-gray-200'
            >
              <ChevronRight className='mr-2 text-blue-500' size={16} />
              <span className='text-gray-700'>{category}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-blue-500'>
          Erikoisosaamisemme
        </h2>
        <ul className='space-y-2 text-lg'>
          <li className='flex items-start'>
            <ChevronRight
              className='mt-1 mr-2 text-blue-500 flex-shrink-0'
              size={20}
            />
            <span className=" text-gray-300">Numerot, kirjaimet ja logot lyöntimeisteissä</span>
          </li>
          <li className='flex items-start'>
            <ChevronRight
              className='mt-1 mr-2 text-blue-500 flex-shrink-0'
              size={20}
            />
            <span className=" text-gray-300">Tekstien ja logojen kaiverrus muotteihin</span>
          </li>
          <li className='flex items-start'>
            <ChevronRight
              className='mt-1 mr-2 text-blue-500 flex-shrink-0'
              size={20}
            />
            <span className=" text-gray-300">Kierretappien poisto erikoistöissä</span>
          </li>
          <li className='flex items-start'>
            <ChevronRight
              className='mt-1 mr-2 text-blue-500 flex-shrink-0'
              size={20}
            />
            <span className=" text-gray-300">Aukotus ja leikkaus eri materiaaleille</span>
          </li>
          <li className='flex items-start'>
            <ChevronRight
              className='mt-1 mr-2 text-blue-500 flex-shrink-0'
              size={20}
            />
            <span className=" text-gray-300">Irtokirjaimet: messinki, RST rosteri, alumiini, muovi</span>
          </li>
        </ul>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-blue-500'>
          Esimerkkejä töistämme
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <img
                src={image.src}
                alt={image.alt}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-800'>
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-12 bg-blue-100 p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-600'>
          Ota yhteyttä
        </h2>
        <p className='mb-4 text-lg leading-relaxed text-gray-700'>
          Tarvitsetko apua kaiverrustyön suunnittelussa tai toteutuksessa? Ota
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
