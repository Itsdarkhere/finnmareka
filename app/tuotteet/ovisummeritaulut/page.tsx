import {
  Phone,
  Settings,
  Lightbulb,
  Shield,
  AlertTriangle,
} from "lucide-react";

const features = [
  {
    title: "Materiaalit ja muotoilu",
    icon: <Settings className='w-12 h-12 text-blue-500' />,
    items: [
      "Pohjamateriaalit: ruostumaton teräs (RST), alumiini, muovi, messinki, kupari",
      "Pohjien koot ja muodot räätälöitävissä",
      "Painikkeet: RST, muovi (eri värejä ja muotoja saatavilla)",
      "Avattava huoltoluukku helpottaa nimien vaihtoa",
    ],
  },
  {
    title: "Ominaisuudet",
    icon: <Shield className='w-12 h-12 text-blue-500' />,
    items: [
      "Vaihdettavat nimet paperilla tai kilvillä",
      "Eri mallisia nimi-ikkunoita helppoon vaihtoon",
      "Huonenumerointi lasermerkkauksella tai kaivertamalla",
      "Taloyhtiön nimi tai osoite merkattavissa",
      "Taustavalaistus 12V LED-nauhalla",
      "Saatavana myös pinta-asennuskotelolla",
      "Sadelippa",
    ],
  },
  {
    title: "Palvelut",
    icon: <Phone className='w-12 h-12 text-blue-500' />,
    items: [
      "Vanhan kerrostalon ovisummeritaulun uusinta",
      "Uuden ovisummerin suunnittelu",
      "Mittaus",
      "Valmistus",
      "Asennus",
    ],
  },
];

const examples = [
  {
    title: "RST pohja ja nappulat, 42 asunnon ovipainiketaulu",
    src: "/api/placeholder/400/300?text=RST 42 asunnon taulu",
    description:
      "Ruostumattomasta teräksestä valmistettu 42 asunnon ovipainiketaulu RST-nappuloilla.",
  },
  {
    title: "Alumiininen valkoinen pohja, muoviset painonapit",
    src: "/api/placeholder/400/300?text=Alumiininen valkoinen taulu",
    description:
      "Valkoinen alumiinipohjainen taulu muovisilla painonapeilla, taustavalaistu ja vaihdettavilla nimikilvilla.",
  },
  {
    title: "Messinkinen hiottu pohja, RST kullanväriset painonapit",
    src: "/api/placeholder/400/300?text=Messinkinen taulu",
    description:
      "Hiottu messinkipohja kullanvärisillä RST-painonapeilla, kaiverretut numerot ja kirkas lakkaus päällä.",
  },
  {
    title: "Pinta-asennuskotelo LED-valoilla",
    src: "/api/placeholder/400/300?text=Pinta-asennuskotelo",
    description:
      "Pinta-asennettava kotelo avattavalla huoltoluukulla ja LED-valaistuksella.",
  },
];

export default function OviSummeri() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Ovisummeritaulut'
            alt='FINNMareka Oy Ovisummeritaulut'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Ovisummeritaulut
            </h1>
          </div>
        </div>
      </header>

      <main>
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Phone className='mr-2' />
            Ovisummeritaulujen ominaisuudet
          </h2>
          <p className='text-lg mb-6'>
            FINNMareka Oy tarjoaa kattavan valikoiman räätälöityjä
            ovisummeritauluja kerrostaloihin. Valmistamme sekä uusia tauluja
            että uusimme vanhoja, tarjoten aina laadukkaan ja toimivan
            ratkaisun.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <div className='flex items-center mb-4'>
                  {feature.icon}
                  <h3 className='text-xl text-gray-800 font-bold ml-4'>
                    {feature.title}
                  </h3>
                </div>
                <ul className='list-disc text-gray-600 pl-5 space-y-2'>
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Lightbulb className='mr-2' />
            Esimerkkejä töistämme
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {examples.map((example, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <img
                  src={example.src}
                  alt={example.title}
                  className='w-full h-48 object-cover mb-4 rounded'
                />
                <h3 className='text-xl text-gray-800 font-bold mb-2'>
                  {example.title}
                </h3>
                <p className='text-gray-600'>{example.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='bg-blue-50 p-8 rounded-lg'>
          <h2 className='text-2xl text-gray-800 font-bold mb-4 flex items-center'>
            <AlertTriangle className='mr-2 text-yellow-500' />
            Huomioitavaa vanhan ovisummeritaulun uusinnassa
          </h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>Mittaa vanhan etulevyn ulkomitat</li>
            <li>Mittaa kiinnitysreikien paikat (jos käytetään samoja)</li>
            <li>Mittaa upotettavan etulevyn upotusaukon korkeus ja leveys</li>
            <li>
              Etulevyn teemme yleensä 5-20mm isommaksi, jotta vanhat jäljet
              peittyvät
            </li>
          </ul>
        </section>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-800 font-bold mb-6 text-center'>
          Tarvitsetko apua ovisummeritaulun suunnittelussa tai uusimisessa?
        </h2>
        <p className='text-center text-gray-600 mb-6'>
          Asiantunteva henkilökuntamme auttaa sinua mielellään löytämään juuri
          sinun taloyhtiösi tarpeisiin sopivan ratkaisun.
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
