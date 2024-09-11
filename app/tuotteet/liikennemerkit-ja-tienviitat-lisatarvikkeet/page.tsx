import { ChevronRight } from "lucide-react";

const signCategories = [
  {
    name: "Kaikenlaiset liikennemerkit",
    image: "/api/placeholder/300/200?text=Liikennemerkit",
  },
  { name: "Lisäkilvet", image: "/api/placeholder/300/200?text=Lisäkilvet" },
  { name: "Tienviitat", image: "/api/placeholder/300/200?text=Tienviitat" },
  { name: "Opaskartat", image: "/api/placeholder/300/200?text=Opaskartat" },
  {
    name: "Erikoisviitat",
    image: "/api/placeholder/300/200?text=Erikoisviitat",
  },
  {
    name: "Tiemerkintä sabluunat",
    image: "/api/placeholder/300/200?text=Tiemerkinnät",
  },
];

const accessories = [
  "Liikennemerkkien tolpat",
  "Kiinnikkeet",
  "Tolppien hatut",
  "Kaulukset",
  "Betoniporsaat (isot ja pienet)",
  "Sulkunauhat",
  "Ohjausviitat",
  "Puomit",
  "Aidat",
  "Käsinäyttömerkit",
  "Vilkut",
];

const specialProducts = [
  { name: "Pelastustie", image: "/api/placeholder/200/150?text=Pelastustie" },
  { name: "Pysäköinti", image: "/api/placeholder/200/150?text=Pysäköinti" },
  { name: "Yksityistie", image: "/api/placeholder/200/150?text=Yksityistie" },
  {
    name: "Sisustusideat",
    image: "/api/placeholder/200/150?text=Sisustusideat",
  },
  {
    name: "Parkkipaikkaopasteet",
    image: "/api/placeholder/200/150?text=Parkkiopasteet",
  },
  {
    name: "Liikkeen aukiolokilpi",
    image: "/api/placeholder/200/150?text=Aukiolokilpi",
  },
];

export default function Liikennemerkit() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 text-gray-800'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-blue-600'>
        LIIKENNEMERKIT
      </h1>

      <section className='mb-12'>
        <p className='text-lg text-center text-gray-300 leading-relaxed mb-4'>
          Tarjoamme laajan valikoiman liikennemerkkejä ja niihin liittyviä
          tuotteita. Valikoimaamme kuuluvat kaikenlaiset liikennemerkit,
          lisäkilvet, tienviitat ja opaskartat niin yleisille teille kuin
          yksityisteille.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-blue-500'>
          Liikennemerkkikategoriat
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {signCategories.map((category, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <img
                src={category.image}
                alt={category.name}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-800'>
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12 bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Tarvikkeet ja lisävarusteet
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {accessories.map((accessory, index) => (
            <div
              key={index}
              className='flex items-center bg-white p-3 rounded-lg shadow'
            >
              <ChevronRight className='mr-2 text-blue-500' size={20} />
              <span className='text-gray-700'>{accessory}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-blue-500'>
          Erikoistuotteet ja sisustusideat
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {specialProducts.map((product, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-40 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-800'>
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-500'>
          Tekniset tiedot
        </h2>
        <ul className='space-y-2'>
          <li className='flex items-start'>
            <ChevronRight
              className='mt-1 mr-2 text-blue-500 flex-shrink-0'
              size={20}
            />
            <span className='text-gray-300'>
              <strong>Liikennemerkkiputki:</strong> Kuumasinkitty teräsputki.
              Materiaali Fe 37. Seinämä 2,0 mm.
            </span>
          </li>
          <li className='flex items-start'>
            <ChevronRight
              className='mt-1 mr-2 text-blue-500 flex-shrink-0'
              size={20}
            />
            <span className='text-gray-300'>
              <strong>Betoniperusta 60/500:</strong> Maahan upotettava jalusta
              liikennemerkeille, pysäköintimittareille, viittapylväille, jne.
              Yläosassa teräsvahvike Ø 60 mm:n pylväälle. Toimitus sisältää
              2-osaisen muovitiivisteen.
            </span>
          </li>
          <li className='flex items-start'>
            <ChevronRight
              className='mt-1 mr-2 text-blue-500 flex-shrink-0'
              size={20}
            />
            <span className='text-gray-300'>
              <strong>Yleiskiinnike, silumiini:</strong> Erittäin tukeva ja
              kestävä Ø 60 mm yleiskiinnike vaativaan käyttöön. Silumiinivalu
              AlSi 12. Saatavana läpikiinnityksellä tai lamellikiinnityksellä.
            </span>
          </li>
        </ul>
      </section>

      <section className='mt-12 bg-blue-100 p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-600'>
          Ota yhteyttä
        </h2>
        <p className='mb-4 text-lg leading-relaxed text-gray-700'>
          Tarvitsetko apua liikennemerkkien tai lisävarusteiden valinnassa?
          Haluatko lisätietoja tuotteistamme tai pyytää tarjouksen? Ota yhteyttä
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
