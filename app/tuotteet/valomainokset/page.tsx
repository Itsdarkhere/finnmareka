import { ChevronRight } from "lucide-react";

const illuminatedSignTypes = [
  {
    name: "VALOMAINOSKOTELOT",
    description:
      "Tyylikkäät ja näkyvät valomainoskotelot yrityksesi julkisivuun.",
    image: "/api/placeholder/400/300?text=Valomainoskotelot",
  },
  {
    name: "VALOMAINOS",
    description:
      "Perinteiset valomainokset, jotka herättävät huomiota päivin ja öin.",
    image: "/api/placeholder/400/300?text=Valomainos",
  },
  {
    name: "VALOMAINOSKIRJAIMET",
    description:
      "Yksittäiset valaistut kirjaimet luovat näyttävän ja tyylikkään ilmeen.",
    image: "/api/placeholder/400/300?text=Valomainoskirjaimet",
  },
  {
    name: "PYLVÄSOPASTEET",
    description:
      "Korkeat ja näkyvät pylväsopasteet ohjaavat asiakkaat luoksesi.",
    image: "/api/placeholder/400/300?text=Pylväsopasteet",
  },
  {
    name: "TIENVARSIMAINOKSET",
    description:
      "Suuret ja huomiota herättävät tienvarsimainokset tavoittavat ohikulkijat.",
    image: "/api/placeholder/400/300?text=Tienvarsimainokset",
  },
];

const frontPanelInfo = [
  "Etulevy valmistetaan akryyli- tai kennomuovista",
  "Paksuus vaihtelee kotelon mukaan 3–16 mm",
  "Opaali akryyli",
];

const textTypes = ["IRTOTARROILLA", "VÄRITULOSTEINA", "MUOTOON LEIKATTUNA"];

export default function Valomainokset() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 text-gray-800'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-white'>
        VALOMAINOKSET
      </h1>

      <section className='mb-12'>
        <p className='text-lg text-center text-gray-300 leading-relaxed mb-8'>
          Valomainokset ovat tehokas tapa lisätä yrityksesi näkyvyyttä ja
          houkutella asiakkaita. Tarjoamme laajan valikoiman
          valomainos-ratkaisuja erilaisiin tarpeisiin.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-3xl font-semibold mb-6 text-white'>
          Valomainostyypit
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {illuminatedSignTypes.map((type, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <img
                src={type.image}
                alt={type.name}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                  {type.name}
                </h3>
                <p className='text-gray-600'>{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12 bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          ETULEVYT
        </h2>
        <div className='md:flex'>
          <div className='md:w-1/2 md:pr-4'>
            <ul className='space-y-2 mb-6'>
              {frontPanelInfo.map((info, index) => (
                <li key={index} className='flex items-start'>
                  <ChevronRight
                    className='mt-1 mr-2 text-blue-500 flex-shrink-0'
                    size={20}
                  />
                  <span className='text-gray-700'>{info}</span>
                </li>
              ))}
            </ul>
            <h3 className='text-xl font-semibold mb-2'>Tekstit</h3>
            <ul className='space-y-2'>
              {textTypes.map((type, index) => (
                <li key={index} className='flex items-start'>
                  <ChevronRight
                    className='mt-1 mr-2 text-blue-500 flex-shrink-0'
                    size={20}
                  />
                  <span className='text-gray-700'>{type}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='md:w-1/2 mt-4 md:mt-0'>
            <img
              src='/api/placeholder/400/300?text=Etulevyt'
              alt='Etulevyt'
              className='w-full h-auto rounded-lg shadow-md'
            />
          </div>
        </div>
      </section>

      <section className='mt-12 bg-blue-100 p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-600'>
          Ota yhteyttä
        </h2>
        <p className='mb-4 text-lg leading-relaxed text-gray-700'>
          Haluatko lisätietoja valomainosratkaisuistamme tai pyytää tarjouksen?
          Ota yhteyttä asiantuntevaan henkilökuntaamme, ja autamme sinua
          löytämään parhaan ratkaisun yrityksesi tarpeisiin.
        </p>
        <button className='bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold shadow-md'>
          Pyydä tarjous
        </button>
      </section>
    </div>
  );
}
