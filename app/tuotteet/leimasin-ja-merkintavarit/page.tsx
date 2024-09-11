import { ChevronRight } from "lucide-react";

const stampTypes = [
  {
    name: "PUUVARSILEIMASIMET",
    image: "/api/placeholder/300/200?text=Puuvarsileimasin",
  },
  {
    name: "Numeroimis- ja päiväysleimasimet",
    image: "/api/placeholder/300/200?text=Numeroimisleimasin",
  },
  {
    name: "Metallileimasimet",
    image: "/api/placeholder/300/200?text=Metallileimasin",
  },
  {
    name: "Sähköleimasimet",
    image: "/api/placeholder/300/200?text=Sähköleimasin",
  },
  { name: "Mustesuihkut", image: "/api/placeholder/300/200?text=Mustesuihku" },
  {
    name: "Kestovärjätyt leimasimet",
    image: "/api/placeholder/300/200?text=Kestovärjätty",
  },
];

export default function Leimaisimet() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold text-center mb-8'>LEIMASIMET</h1>

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>
          LEIMASIMET TOIMISTOON JA TEOLLISUUTEEN
        </h2>
        <p className='mb-4'>
          Leimasinvalikoimamme on laaja. Voimme melko varmasti sanoa, että
          toteutamme leimasintarpeesi. Suunnittelemme, kokeilemme, testaamme ja
          valmistamme leimasimia vaativaankin käyttöön.
        </p>
        <p>
          Leimasin valmistetaan yksilöllisesti tilaajan tarpeeseen. Siinä voi
          olla tekstiä, kuva, logo, taulukkopohja melkeinpä mitä tahansa. Hyvä
          leimasin säästää aikaa, on kestävä, sen jälki on terävä ja siisti.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-6'>
          Suosituimmat leimasintyypit
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {stampTypes.map((stamp, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <img
                src={stamp.image}
                alt={stamp.name}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-lg text-gray-800 font-semibold mb-2'>{stamp.name}</h3>
                <a
                  href={`#${stamp.name.toLowerCase().replace(/ /g, "-")}`}
                  className='text-blue-500 hover:underline'
                >
                  Lue lisää
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className='grid md:grid-cols-2 gap-8'>
        <section>
          <h2 className='text-2xl font-semibold mb-4'>
            Kaikki leimasin tyypit
          </h2>
          <ul className='space-y-2'>
            {[
              "Rullaleimasimet",
              "KYNÄLEIMASIMET",
              "Polttoleimasimet",
              "Lihaleimasimet",
              "Elintarvikeleimasimet",
              "URAKUMILAATTAleimasimet",
              "Ultraviolettileimasimet",
              "Kassakoneen painolaatat",
              "Hinnoittelukoneet",
              "Etikettikoneet",
              "Päiväysleimasimet",
              "Numerointileimasimet",
              "Puuleimasin",
              "Askarteluleimasin",
              "Kuvaleimasin",
              "Leimasinetit",
              "KUVALEIMASIMET",
              "Automaattileimasimet",
            ].map((item, index) => (
              <li key={index} className='flex items-center'>
                <ChevronRight className='mr-2 text-blue-500' size={16} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4'>Merkit ja Mallit</h2>
          <ul className='space-y-2'>
            {[
              "Speed-i-Jet 798",
              "Trodat",
              "Fixu leima",
              "Kestovärjättyleima",
              "Metallileima",
              "Erikoisleimasin",
              "Nauhaleimasin",
              "Ruholeima",
            ].map((item, index) => (
              <li key={index} className='flex items-center'>
                <ChevronRight className='mr-2 text-blue-500' size={16} />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className='mt-12'>
        <h2 className='text-2xl text-white font-semibold mb-4'>Erikoispalvelut</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-gray-100 p-6 rounded-lg'>
            <h3 className='text-xl text-gray-800 font-semibold mb-2'>REINER Tuotteet</h3>
            <p className='mb-4 text-gray-700'>
              Tutustu REINER-tuotevalikoimaamme, joka sisältää laadukkaita
              numeroimis- ja päiväysleimasimia, metallileimasimia,
              sähköleimasimia ja mustesuihkuja.
            </p>
            <a
              href='/reiner'
              className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors inline-block'
            >
              Siirry REINER-sivulle
            </a>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg'>
            <h3 className='text-xl text-gray-800 font-semibold mb-2'>FIXU Tuotteet</h3>
            <p className='mb-4 text-gray-700'>
              Tutustu FIXU-tuotevalikoimaamme, joka sisältää kestovärjättyjä
              teksti-, taulukko- ja päiväysleimasimia.
            </p>
            <a
              href='/fixu'
              className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors inline-block'
            >
              Siirry FIXU-sivulle
            </a>
          </div>
        </div>
      </section>

      <section className='mt-12'>
        <h2 className='text-2xl font-semibold mb-4'>Lisätarvikkeet</h2>
        <ul className='space-y-2'>
          {[
            "Värit (DISCOT, RAVINTOLAT, TILAISUUDET)",
            "Etiketit",
            "VÄRIRULLAT",
          ].map((item, index) => (
            <li key={index} className='flex items-center'>
              <ChevronRight className='mr-2 text-blue-500' size={16} />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className='mt-12 bg-blue-100 p-6 rounded-lg'>
        <h2 className='text-2xl text-gray-800 font-semibold mb-4'>Ota yhteyttä</h2>
        <p className='mb-4 text-gray-700'>
          Tarvitsetko apua sopivan leimasimen valinnassa tai onko sinulla
          erityistoiveita? Ota yhteyttä asiantuntevaan henkilökuntaamme, ja
          autamme sinua löytämään parhaan ratkaisun tarpeisiisi.
        </p>
        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors'>
          Ota yhteyttä
        </button>
      </section>
    </div>
  );
}
