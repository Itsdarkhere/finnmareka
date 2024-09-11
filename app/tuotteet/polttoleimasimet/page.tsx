import { ChevronRight, Zap, Truck, LeafyGreen } from "lucide-react";

const plateTypes = [
  "ALUMIININEN PINTALAATTA PAKSUUDET 2-7 MM",
  "ALUMIININEN PINTALAATTA MESSINKIPOHJALLA",
  "KAIVERRETTU LAATTA",
  "VALETTU MESSINKI",
];

const branders = [
  {
    name: 'KOLVIT "VAKES"',
    description: "PIENI HELPPOKÄYTTÖINEN POLTTOKOLVI",
    features: ["KUPARI-ISTUKKA ( KIERRE VAIHDETTAVILLE LAATOILLE )"],
    powers: ["200 W", "300 W", "400 W", "600 W", "800 W"],
  },
  {
    name: 'SUURET POLTTOLAITTEET "ALK"',
    description: "SUURI HELPPOKÄYTTÖINEN POLTTOLAITE vastuksella",
    features: ["VAIHDETTAVA LAATTA", "ESIM. LAVALAATAT"],
    powers: ["84x150 1000 W", "100x160 1150 W", "1200 W"],
  },
];

const specialProducts = [
  {
    name: '"KARJANMERKKAUSRAUTA"',
    description: "POLTTOLAATTA VARRELLA",
    features: ["LÄMMITYS KAASULLA TAI KEITTOLEVYLLÄ"],
  },
  {
    name: "POLTTOLAITE LISÄVARUSTEELLA",
    description: "ISTUKKAKIINNITYKSELLÄ",
  },
  {
    name: "KUORMALAVOJEN MERKKAUSLAATAT",
    features: [
      "EUR",
      "GREEN CARGO",
      "DNV",
      "VALMISTAJA TUNNUKSET",
      "VAIHDETTAVILLA VUOSITUNNUKSILLA",
    ],
  },
  {
    name: "KASVINSUOJELUMERKINTÄ",
    features: ["IPPC - laatat"],
  },
];

export default function Polttoleimasimet() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 text-gray-800'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-blue-600'>
        POLTTOLEIMAISIMET
      </h1>

      <section className='mb-12'>
        <h2 className='text-3xl font-semibold mb-6 text-blue-500'>LAATAT</h2>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <ul className='space-y-2'>
            {plateTypes.map((type, index) => (
              <li key={index} className='flex items-start'>
                <ChevronRight
                  className='mt-1 mr-2 text-blue-500 flex-shrink-0'
                  size={20}
                />
                <span>{type}</span>
              </li>
            ))}
          </ul>
          <p className='mt-4 text-sm italic'>
            MESSINKIPOHJASSA KIERRE, NOPEA JA HELPPO VAIHTAA LAATTA
          </p>
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-3xl font-semibold mb-6 text-blue-500'>
          Polttolaitteet
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {branders.map((brander, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold mb-2 flex items-center'>
                <Truck className='mr-2 text-blue-500' />
                {brander.name}
              </h3>
              <p className='mb-2'>{brander.description}</p>
              <ul className='mb-4'>
                {brander.features.map((feature, fIndex) => (
                  <li key={fIndex} className='flex items-start'>
                    <ChevronRight
                      className='mt-1 mr-2 text-blue-500 flex-shrink-0'
                      size={16}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <h4 className='font-semibold mb-2 flex items-center'>
                <Zap className='mr-2 text-yellow-500' />
                TEHOT
              </h4>
              <ul className='grid grid-cols-2 gap-2'>
                {brander.powers.map((power, pIndex) => (
                  <li key={pIndex} className='bg-gray-100 px-2 py-1 rounded'>
                    {power}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12 bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4 text-blue-500'>
          Polttolaitteiden JÄNNITTEENsäätölaite
        </h2>
        <p>Jotta laite ei kuumenisi liikaa</p>
      </section>

      <section className='mb-12'>
        <h2 className='text-3xl font-semibold mb-6 text-blue-500'>
          Erikoistuotteet
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {specialProducts.map((product, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold mb-2 flex items-center'>
                {index === 2 ? (
                  <Truck className='mr-2 text-blue-500' />
                ) : index === 3 ? (
                  <LeafyGreen className='mr-2 text-green-500' />
                ) : (
                  <Truck className='mr-2 text-blue-500' />
                )}
                {product.name}
              </h3>
              {product.description && (
                <p className='mb-2'>{product.description}</p>
              )}
              {product.features && (
                <ul>
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className='flex items-start'>
                      <ChevronRight
                        className='mt-1 mr-2 text-blue-500 flex-shrink-0'
                        size={16}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className='mt-12 bg-blue-100 p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-600'>
          Ota yhteyttä
        </h2>
        <p className='mb-4 text-lg leading-relaxed text-gray-700'>
          Tarvitsetko apua sopivan polttoleimasimen valinnassa? Ota yhteyttä
          asiantuntevaan henkilökuntaamme, ja autamme sinua löytämään parhaan
          ratkaisun tarpeisiisi.
        </p>
        <button className='bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold shadow-md'>
          Pyydä tarjous
        </button>
      </section>
    </div>
  );
}
