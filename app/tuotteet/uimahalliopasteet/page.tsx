import { Key, Globe, AlertTriangle } from "lucide-react";

const productCategories = [
  {
    title: "Uintimittarit ja avaimet",
    icon: <Key className='w-12 h-12 text-blue-500' />,
    items: [
      "Uintimittarit",
      "Matkamittarit",
      "Kumirengas avaimenperiin (eri värisiä)",
      "Avainremmit",
    ],
  },
  {
    title: "Pukukaappien merkinnät",
    icon: <Key className='w-12 h-12 text-blue-500' />,
    items: ["Pukukaappien numerot oviin", "Pukukaappien numerot avainperiin"],
  },
  {
    title: "Pesu- ja saunatilat",
    icon: <Key className='w-12 h-12 text-blue-500' />,
    items: [
      "Pesuhuoneopasteet",
      "Saunaopasteet",
      "Pesutilaopasteet",
      "Saunaohjeet",
    ],
  },
  {
    title: "Allasopasteet",
    icon: <Key className='w-12 h-12 text-blue-500' />,
    items: [
      "Allasopasteet seinään",
      "A-kilvet altaan reunalle",
      "Kuntouimarit",
      "Vesijuoksurata",
      "Varattu",
      "Hyppypaikka",
    ],
  },
  {
    title: "Monikieliset opasteet",
    icon: <Globe className='w-12 h-12 text-blue-500' />,
    items: ["Suomi", "Englanti", "Ruotsi", "Venäjä"],
  },
];

const additionalProducts = ["Alasopasteet", "Uimamittari", "Uintimatkamittari"];

export default function UimahalliOpasteet() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Uimahalliopasteet'
            alt='FINNMareka Oy Uimahalliopasteet'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Uimahalliopasteet
            </h1>
          </div>
        </div>
      </header>

      <main>
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Key className='mr-2' />
            Uimahallin opasteet ja tarvikkeet
          </h2>
          <p className='text-lg mb-6'>
            FINNMareka Oy tarjoaa kattavan valikoiman opasteita ja tarvikkeita
            uimahalleihin. Valikoimastamme löydät kaiken tarvittavan
            uintimittareista monikielisiin opasteisiin.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {productCategories.map((category, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <div className='flex items-center mb-4'>
                  {category.icon}
                  <h3 className='text-xl text-gray-800 font-bold ml-4'>
                    {category.title}
                  </h3>
                </div>
                <ul className='list-disc text-gray-600 pl-5 space-y-2'>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Key className='mr-2' />
            Muut uimahallituotteet
          </h2>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <ul className='grid md:grid-cols-3 gap-4'>
              {additionalProducts.map((product, index) => (
                <li key={index} className='flex text-gray-700 items-center'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full mr-2'></div>
                  {product}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='bg-blue-50 p-8 rounded-lg'>
          <h2 className='text-2xl text-gray-800 font-bold mb-4 flex items-center'>
            <AlertTriangle className='mr-2 text-yellow-500' />
            Huomioitavaa
          </h2>
          <p className='text-gray-700'>
            Tarjoamme räätälöityjä ratkaisuja kaikkiin uimahallin opaste- ja
            tarviketarpeisiin. Opasteet voidaan toteuttaa useilla eri kielillä
            ja materiaalit ovat suunniteltu kestämään uimahalliympäristön
            olosuhteita. Ota yhteyttä asiantuntevaan henkilökuntaamme
            keskustellaksesi tarkemmin eri vaihtoehdoista ja toteutuksesta.
          </p>
        </section>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-800 font-bold mb-6 text-center'>
          Tarvitsetko apua uimahallin opasteiden suunnittelussa?
        </h2>
        <p className='text-center text-gray-600 mb-6'>
          Asiantunteva henkilökuntamme auttaa sinua mielellään löytämään juuri
          sinun uimahallisi tarpeisiin sopivat ratkaisut.
        </p>
        <div className='flex justify-center'>
          <a
            href='/yhteystiedot'
            className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-300'
          >
            Ota yhteyttä
          </a>
        </div>
      </section>
    </div>
  );
}
