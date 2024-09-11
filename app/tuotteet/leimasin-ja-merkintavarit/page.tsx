import {
  Droplet,
  Stamp,
  PaintBucket,
  Sun,
  AlertTriangle,
} from "lucide-react";

const categories = [
  {
    title: "Leimasinvärit",
    icon: <Stamp className='w-12 h-12 text-blue-500' />,
    items: [
      "TRODAT leimasinvärit",
      "REINER metallileimasinvärit",
      "Fixu leimasinvärit",
      "Puuleimasinvärit",
      "STK leimasinvärit",
      "NORIS leimasinvärit",
      "Fixu leimasin",
    ],
  },
  {
    title: "Teollisuus- ja erikoisvärit",
    icon: <PaintBucket className='w-12 h-12 text-green-500' />,
    items: ["Puu", "Metalli", "Betoni", "Muovi", "Kutistekalvot"],
  },
  {
    title: "Muut värit",
    icon: <Droplet className='w-12 h-12 text-red-500' />,
    items: ["Spraymaalit", "Diagraph", "Ultraviolettivärit"],
  },
];

const applications = [
  "Asiakirjojen leimaus",
  "Teollisuuden merkinnät",
  "Puupintojen merkintä",
  "Metallipintojen merkintä",
  "Betonipintojen merkintä",
  "Muovien merkintä",
  "Kutistekalvojen merkintä",
  "Graffitit ja taide",
  "UV-aktiiviset merkinnät",
];

export default function Varit() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Värit ja Maalit'
            alt='FINNMareka Oy Värit ja Maalit'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Värit ja Maalit
            </h1>
          </div>
        </div>
      </header>

      <main>
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Droplet className='mr-2' />
            Värikategoriat
          </h2>
          <p className='text-lg mb-6'>
            FINNMareka Oy tarjoaa laajan valikoiman värejä ja maaleja erilaisiin
            käyttötarkoituksiin. Tuotevalikoimamme kattaa leimasinvärit,
            teollisuusvärit sekä erikoisvärit moniin eri sovelluksiin.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {categories.map((category, index) => (
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
            <Sun className='mr-2' />
            Käyttökohteet
          </h2>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <ul className='grid md:grid-cols-3 gap-4'>
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
            Huomioitavaa värien ja maalien käytössä
          </h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>Varmista aina värin tai maalin soveltuvuus käyttökohteeseen</li>
            <li>Noudata valmistajan ohjeita käytössä ja säilytyksessä</li>
            <li>Huomioi ympäristö- ja turvallisuusmääräykset</li>
            <li>
              Testaa väriä ensin pienelle alueelle yhteensopivuuden
              varmistamiseksi
            </li>
            <li>
              Käytä asianmukaisia suojavarusteita värien ja maalien käsittelyssä
            </li>
          </ul>
        </section>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-800 font-bold mb-6 text-center'>
          Tarvitsetko apua värin tai maalin valinnassa?
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
