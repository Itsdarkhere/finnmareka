
const mailboxTypes = [
  "Stala PL3 JA PL 4",
  "Stala PL2 (ei reikää oleva malli)",
  "BOBI",
  "Orthex",
  "Sarvis"
];

const numberMaterials = ["MUOVI", "MESSINKI", "ALUMIINI", "PUU"];

export default function Postilaatikkokilvet() {

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-600">
        POSTILAATIKKOKILVET JA TALONNUMEROT
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">POSTILAATIKKOKILVET</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Kilpien värivaihtoehdot</h3>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Musta pohja / valkoinen teksti</li>
            <li>Valkoinen pohja / musta teksti</li>
            <li>Muitakin värejä saatavilla</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Yleisimmät laatikkotyypit</h3>
          <ul className="grid grid-cols-2 gap-4">
            {mailboxTypes.map((type, index) => (
              <li key={index} className="flex items-center">
                <img src={`/api/placeholder/50/50?text=${type}`} alt={type} className="mr-2" />
                <span>{type}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4">Muita erilaisia malleja tai voit tilata ihan omilla mitoillakin.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">TALON NUMEROT ja kirjaimet</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">IRTONUMEROT</h3>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>TARROILLA</li>
            <li>MUOVIPOHJALLA</li>
            <li>KAIVERRETTUNA</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Irtonumerot ja kirjaimet</h3>
          <p className="mb-2">Saatavilla seuraavista materiaaleista:</p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {numberMaterials.map((material, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded text-center">{material}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className='mt-12 bg-blue-100 p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-600'>
          Ota yhteyttä
        </h2>
        <p className='mb-4 text-lg leading-relaxed text-gray-700'>
          Tarvitsetko apua nimineulojen valinnassa tai suunnittelussa? Haluatko
          tarjouksen yrityksellesi? Ota yhteyttä asiantuntevaan
          henkilökuntaamme, ja autamme sinua löytämään parhaan ratkaisun
          tarpeisiisi.
        </p>
        <button className='bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold shadow-md'>
          Pyydä tarjous
        </button>
      </section>
    </div>
    )
}