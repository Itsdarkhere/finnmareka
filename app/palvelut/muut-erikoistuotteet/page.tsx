import {
  Truck,
  Award,
  Layers,
  Printer,
  Code,
  AlertTriangle,
} from "lucide-react";

const productCategories = [
  {
    title: "Ajoneuvotarroitukset",
    icon: <Truck className='w-12 h-12 text-blue-500' />,
    items: [
      "Moottoripyörät",
      "Crossipyörät",
      "Enduropyörät",
      "Kilpa-autot",
      "Moottorikelkat",
      "Katteet, nimet",
      "Sponsoritarrat",
      "Kilpailunumerot (2014 uudet SML hyväksymät tarrat)",
      "Ajopaitojen ja pelipaitojen painatus",
    ],
  },
  {
    title: "Palkinnot ja tunnustukset",
    icon: <Award className='w-12 h-12 text-blue-500' />,
    items: [
      "Kiertopalkinnot",
      "Erikoismitalit ja -palkinnot",
      "Pokaalit",
      "Pinssit",
    ],
  },
  {
    title: "Sinetöinti ja turvallisuus",
    icon: <Truck className='w-12 h-12 text-blue-500' />,
    items: [
      "Sinettipihdit",
      "Sinettipihtien leukojen kaiverrukset",
      "Sinettiblommit",
      "Sinettilangat",
    ],
  },
  {
    title: "Materiaalit ja työstö",
    icon: <Layers className='w-12 h-12 text-blue-500' />,
    items: [
      "Muovilevyt",
      "Kennolevyt",
      "Akryylilevyt",
      "Polykarbonaatti",
      "Vaahto-PVC ja PVC",
      "Alumiini",
      "Messinki",
      "RST (ruostumaton teräs)",
      "Levyjen leikkaus mittojen ja muotojen mukaan",
      "Reijitys, aukotus",
      "Jyrsintä, sorvaus",
      "Kierretappien poisto",
      "Pultinhitsaus, tapitushitsaukset",
      "Vaikeiden aineiden kaiverrus (titaani, karkaistut kappaleet, kupari, RST)",
    ],
  },
  {
    title: "Painopalvelut",
    icon: <Printer className='w-12 h-12 text-blue-500' />,
    items: [
      "Vanhojen merkkien ja logojen uudistaminen",
      "Logojen vektorimuotoon muuttaminen",
      "Logojen suunnittelu",
    ],
  },
  {
    title: "Verkkosivut ja graafinen suunnittelu",
    icon: <Code className='w-12 h-12 text-blue-500' />,
    items: [
      "WWW-sivujen suunnittelu ja toteutus",
      "Logojen graafinen suunnittelu",
    ],
  },
];

const specialProducts = [
  "Summeritaulut (kerrostalojen ovisummerit)",
  "Irtokirjaimet (alumiini, RST)",
  "Kiertopalkinnot (tammijalusta, messinkilaatat)",
  "Pöytäviirit (marmori- tai puujalusta)",
  "Avainremmit",
  "Alasopasteet",
  "Uimamittarit / uintimatkamittarit",
  "Pesutilaopasteet",
];

export default function Erikoistuotteet() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Muut erikoistuotteet'
            alt='FINNMareka Oy Muut erikoistuotteet'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Muut erikoistuotteet
            </h1>
          </div>
        </div>
      </header>

      <main>
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Truck className='mr-2' />
            Erikoistyöt ja -tuotteet
          </h2>
          <p className='text-lg mb-6'>
            FINNMareka Oy tarjoaa laajan valikoiman erikoistöitä ja -tuotteita.
            Oli kyseessä sitten ajoneuvotarroitukset, palkinnot, materiaalien
            työstö tai graafinen suunnittelu, meiltä löydät tarvitsemasi
            ratkaisut.
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
            <Award className='mr-2' />
            Muita erikoistuotteita
          </h2>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {specialProducts.map((product, index) => (
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
            Tarjoamme räätälöityjä ratkaisuja kaikkiin erikoistuotteisiin ja
            -töihin. Ota yhteyttä asiantuntevaan henkilökuntaamme
            keskustellaksesi tarkemmin eri vaihtoehdoista, materiaaleista ja
            toteutuksesta.
          </p>
        </section>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-800 font-bold mb-6 text-center'>
          Tarvitsetko apua erikoistuotteen tai -työn suunnittelussa?
        </h2>
        <p className='text-center text-gray-600 mb-6'>
          Asiantunteva henkilökuntamme auttaa sinua mielellään löytämään juuri
          sinun tarpeisiisi sopivan ratkaisun.
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
