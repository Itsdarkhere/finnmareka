import { ChevronRight } from "lucide-react";

const productCategories = [
  {
    title: "Irtokirjaimet ja logot",
    description: "Irtokirjaimia, numeroita, logoja, raitoja, kuvioita",
  },
  {
    title: "Kilvet ja opasteet",
    description: "Tarrapohjaiset kilvet ja opasteet eri käyttötarkoituksiin",
  },
  { title: "Aluekartat", description: "Tarratulosteina toteutetut aluekartat" },
  {
    title: "Ikkunateippaukset",
    description: "Monipuoliset ikkunateippaukset ja -kalvot",
  },
  {
    title: "Messuteippaukset",
    description: "Näyttävät teippaukset messuja ja tapahtumia varten",
  },
  {
    title: "Ajoneuvoteippaukset",
    description: "Autot, moottoripyörät, mopot, veneet, rekisteritunnukset",
  },
  { title: "Valomainokset", description: "Tarrat ja teipit valomainoksiin" },
  {
    title: "Neliväritulosteet",
    description: "Korkealaatuiset neliväritulosteet eri käyttökohteisiin",
  },
  {
    title: "Erikoiskalvot",
    description: "Ikkunatummennukset, näkösuojakalvot, hiekkapuhalluskalvot",
  },
  { title: "Lattiatarrat", description: "Kestävät ja näyttävät lattiatarrat" },
];

const exampleWorks = [
  "Ikkunateippaukset",
  "Valomainokset",
  "Kestävät lattiatarrat",
  "Näkösuoja ikkunatarrat",
  "Hiekkapuhalluskalvo",
  "Kuviolliset ikkunatarrat",
  "Crossipyörän teippaukset",
  "Pöytätarrat",
  "Näyteikkunatarrat",
  "Kerrosopaste",
  "Ovikulkutarra",
  "Sisustustarra",
  "Savuton alue",
  "Erikoistarra",
  "Lasipöydät teipattu alapuolelta",
  "Linssitarra",
  "Kivenisku tarroitus",
];
export default function TarratTeippaukset() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 text-gray-800'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-blue-600'>
        TARRAT JA TEIPPAUKSET
      </h1>

      <section className='mb-12 text-gray-300'>
        <p className='text-lg leading-relaxed mb-4'>
          Tarratuotteet ovat käteviä moneen käyttöön. Voit helposti somistaa
          esim. ajoneuvosi mitä erilaisimmilla kuvioilla ja väreillä. Meiltä
          saat myös tarrat ikkunoihin ja valomainoksiin, sekä korkealaatuiset
          4-väritulosteet.
        </p>
        <p className='text-lg leading-relaxed mb-4'>
          Myös erikoisten logojen ja kuvioiden valmistus onnistuu meiltä
          vaivattomasti. Tilaamasi logot säilyvät tietokoneillamme vuosia, joten
          voit tilata niitä haluamasi kokoisina myös myöhemmin.
        </p>
        <p className='text-lg leading-relaxed'>
          Tarratekstimme toimitetaan ladottuna ja leikattuna silikonipaperille,
          jossa on valmiina siirtokalvo, jonka avulla siirrät tarrat helposti
          haluamaasi paikkaan.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-blue-500'>
          Tuotteet ja palvelut
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {productCategories.map((category, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105'
            >
              <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                {category.title}
              </h3>
              <p className='text-gray-600'>{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-blue-500'>
          Esimerkkejä töistämme
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {exampleWorks.map((work, index) => (
            <div key={index} className='bg-gray-100 p-3 rounded-lg shadow-md'>
              <img
                src={`/api/placeholder/200/150?text=${encodeURIComponent(
                  work
                )}`}
                alt={work}
                className='w-full h-32 object-cover mb-2 rounded'
              />
              <p className='text-sm text-center text-gray-700'>{work}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12 bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Miksi valita meidän tarrat ja teippaukset?
        </h2>
        <ul className='space-y-2'>
          {[
            "Korkealaatuiset materiaalit takaavat pitkän käyttöiän",
            "Laaja valikoima eri käyttötarkoituksiin",
            "Räätälöitävissä asiakkaan tarpeiden mukaan",
            "Nopea toteutus ja toimitus",
            "Ammattitaitoinen suunnittelu- ja asennuspalvelu",
            "Logot ja kuviot säilyvät tietokannassamme myöhempää käyttöä varten",
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
          Tarvitsetko apua tarrojen tai teippausten suunnittelussa? Haluatko
          tarjouksen projektillesi? Ota yhteyttä asiantuntevaan
          henkilökuntaamme, ja autamme sinua löytämään parhaan ratkaisun
          tarpeisiisi.
        </p>
        <button className='bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold shadow-md'>
          Pyydä tarjous
        </button>
      </section>
    </div>
  );
}
