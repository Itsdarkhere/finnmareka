import {
  Type,
  Layers,
  PenTool,
  Activity,
  Image,
  AlertTriangle,
} from "lucide-react";

const materials = [
  {
    title: "Messinki",
    icon: <Layers className='w-12 h-12 text-yellow-500' />,
    items: [
      "Valetut irtokirjaimet",
      "Kiiltävä pinta",
      "Taottu pinta",
      "Musta matta patina",
      "Kromattu pinta",
    ],
  },
  {
    title: "Alumiini",
    icon: <Layers className='w-12 h-12 text-gray-400' />,
    items: [
      "Polttomaalattu (musta, valkoinen)",
      "Eri paksuuksia",
      "Suuret koot mahdollisia (jopa 800mm korkeus)",
    ],
  },
  {
    title: "Ruostumaton teräs (RST)",
    icon: <Layers className='w-12 h-12 text-blue-300' />,
    items: [
      "Kiillotettu pinta",
      "Erikoiskoot ja -muodot",
      "Taustavalaistu LED-valoilla",
    ],
  },
  {
    title: "Muovi",
    icon: <Layers className='w-12 h-12 text-green-500' />,
    items: [
      "Akryyli (kirkas, värillinen)",
      "Vaahto-PVC",
      "3mm paksu muovi",
      "Kullanvärinen pinta",
    ],
  },
  {
    title: "Erikoismateriaalit",
    icon: <Layers className='w-12 h-12 text-red-500' />,
    items: ["Cor-ten teräs (ruostepintainen, säänkestävä)", "Kromipelti"],
  },
];

const styles = [
  "Antikva",
  "Kaunokirjoitus",
  "Logon mukaiset erikoismuodot",
  "Numerot",
  "3D-kirjaimet",
  "Taustavalaistut kirjaimet",
];

const applications = [
  "Seinäkiinnitys piilotapeilla",
  "Kiinnitys korokeholkeilla",
  "Alumiiniseen pohjalevyyn kiinnitys",
  "Kiinnitys tankoon",
  "Massalla kiinnitys",
  "Kehykseen asennus",
  "Upotus akryylipohjaan",
];

export default function Irtokirjaimet() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Irtokirjaimet ja Logot'
            alt='FINNMareka Oy Irtokirjaimet ja Logot'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Irtokirjaimet ja Logot
            </h1>
          </div>
        </div>
      </header>

      <main>
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Layers className='mr-2' />
            Materiaalit
          </h2>
          <p className='text-lg mb-6'>
            FINNMareka Oy tarjoaa laajan valikoiman materiaaleja irtokirjaimiin
            ja logoihin. Jokaisella materiaalilla on omat ominaisuutensa ja
            käyttökohteensa.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {materials.map((material, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <div className='flex items-center mb-4'>
                  {material.icon}
                  <h3 className='text-xl text-gray-800 font-bold ml-4'>
                    {material.title}
                  </h3>
                </div>
                <ul className='list-disc text-gray-600 pl-5 space-y-2'>
                  {material.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <PenTool className='mr-2' />
            Tyylit ja fontit
          </h2>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <ul className='grid md:grid-cols-3 gap-4'>
              {styles.map((style, index) => (
                <li key={index} className='flex text-gray-700 items-center'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full mr-2'></div>
                  {style}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Activity className='mr-2' />
            Kiinnitystavat ja sovellukset
          </h2>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <ul className='grid md:grid-cols-2 gap-4'>
              {applications.map((app, index) => (
                <li key={index} className='flex text-gray-700 items-center'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full mr-2'></div>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='bg-blue-50 p-8 rounded-lg'>
          <h2 className='text-2xl text-gray-800 font-bold mb-4 flex items-center'>
            <AlertTriangle className='mr-2 text-yellow-500' />
            Huomioitavaa irtokirjaimissa ja logoissa
          </h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>
              Materiaalin valinta vaikuttaa kirjainten kestävyyteen ja
              ulkonäköön
            </li>
            <li>
              Kiinnitystapa tulee valita asennuspaikan ja materiaalin mukaan
            </li>
            <li>
              Taustavalaistus vaatii erityissuunnittelua ja sopivan
              materiaalivalinnan
            </li>
            <li>Suuret kirjaimet voivat vaatia erityisiä tukirakenteita</li>
            <li>
              Ulkokäyttöön tulevissa kirjaimissa tulee huomioida sääolosuhteiden
              vaikutus
            </li>
          </ul>
        </section>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-800 font-bold mb-6 text-center'>
          Tarvitsetko apua irtokirjainten tai logon suunnittelussa?
        </h2>
        <p className='text-center text-gray-600 mb-6'>
          Ota yhteyttä asiantuntevaan henkilökuntaamme. Autamme sinua löytämään
          parhaan ratkaisun juuri sinun tarpeisiisi.
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
