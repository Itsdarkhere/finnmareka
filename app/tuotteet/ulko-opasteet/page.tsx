import { ChevronRight } from "lucide-react";

const outdoorSignCategories = [
  {
    title: "Liikennemerkit, tienviitat ja lisätarvikkeet",
    image: "/api/placeholder/400/300?text=Liikennemerkit",
    description:
      "Standardien mukaiset liikennemerkit ja tienviitat sekä niihin liittyvät lisätarvikkeet. Kestävät ja hyvin näkyvät ratkaisut liikenteen ohjaukseen.",
  },
  {
    title: "Irtokirjaimet ja Logot",
    image: "/api/placeholder/400/300?text=Irtokirjaimet",
    description:
      "Tyylikkäät ja kestävät irtokirjaimet ja logot yritysten julkisivuihin ja sisätiloihin. Saatavana eri materiaaleista ja väreistä.",
  },
  {
    title: "Aluekartat, Opastekartat",
    image: "/api/placeholder/400/300?text=Aluekartat",
    description:
      "Selkeät ja informatiiviset alue- ja opastekartat ulkotiloihin. Auttavat vierailijoita löytämään kohteensa helposti.",
  },
  {
    title: "Valomainokset, Laatikot",
    image: "/api/placeholder/400/300?text=Valomainokset",
    description:
      "Näyttävät ja huomiota herättävät valomainokset ja valolaatikot. Energiatehokkaat LED-ratkaisut takaavat hyvän näkyvyyden myös pimeällä.",
  },
];

export default function UlkoOpasteet() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 text-gray-800'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-white'>
        ULKO-OPASTEET
      </h1>

      <section className='mb-12'>
        <p className='text-lg text-center text-gray-300 leading-relaxed mb-4'>
          Ulko-opasteet ovat olennainen osa yritysten, julkisten tilojen ja
          liikenteen visuaalista viestintää. Tarjoamme laajan valikoiman
          kestäviä ja näyttäviä ulko-opasteita, jotka auttavat asiakkaitasi
          löytämään perille ja tekevät yrityksestäsi helposti tunnistettavan.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-white'>
          Ulko-opasteiden kategoriat
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {outdoorSignCategories.map((category, index) => (
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
                <p className='text-gray-600 mb-4'>{category.description}</p>
                <a
                  href={`#${category.title.toLowerCase().replace(/ /g, "-")}`}
                  className='inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300'
                >
                  Lue lisää <ChevronRight size={20} className='ml-1' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12 bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Miksi valita meidän ulko-opasteemme?
        </h2>
        <ul className='space-y-2'>
          {[
            "Kestävät materiaalit takaavat pitkän käyttöiän",
            "Räätälöitävissä yrityksesi ilmeen mukaiseksi",
            "Selkeä ja näkyvä design parantaa opastusta",
            "Laaja valikoima eri kokoja ja tyylejä",
            "Ammattitaitoinen asennus- ja huoltopalvelu",
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

      <section className='mt-12 bg-blue-100 p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-600'>
          Ota yhteyttä
        </h2>
        <p className='mb-4 text-lg leading-relaxed text-gray-700'>
          Tarvitsetko apua sopivien ulko-opasteiden valinnassa tai
          suunnittelussa? Ota yhteyttä asiantuntevaan henkilökuntaamme, ja
          autamme sinua löytämään parhaan ratkaisun tarpeisiisi.
        </p>
        <button className='bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold shadow-md'>
          Pyydä tarjous
        </button>
      </section>
    </div>
  );
}
