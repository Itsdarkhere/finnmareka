import {
    FileText,
    AlertTriangle,
    Heart,
    Cross,
    Feather,
    Type,
    Image,
  } from "lucide-react";
  
  const products = [
    {
      title: "Muistolaatat",
      icon: <FileText className='w-12 h-12 text-blue-500' />,
      items: [
        "Suunnittelu ja toteutus",
        "Asennuspalvelu",
        "Irtokirjaimet",
        "Muistotaulut",
        "Koristeet",
        "Ristit",
        "Lyhtytelineet ja kehikot",
        "Uurna kilpi telineet",
      ],
    },
    {
      title: "Erikoistuotteet",
      icon: <Heart className='w-12 h-12 text-blue-500' />,
      items: [
        "Lemmikkien muistolaatat",
        "Hautaristit ja koristeet",
        "Nimikilvet",
        "Irtokirjaimet kiveen",
        "Messinkiset uurnalaatat",
      ],
    },
    {
      title: "Kirjaimet ja tekstit",
      icon: <Type className='w-12 h-12 text-blue-500' />,
      items: [
        "Telineellä kiveen",
        "Kaunokirjoitus kirjaimet tangossa",
        "Valettu messinkinen muistolaatta",
        "Muotoonleikattu muistolaatta",
        "Papyrys muistolaatta",
      ],
    },
    {
      title: "Koristeet",
      icon: <Feather className='w-12 h-12 text-blue-500' />,
      items: [
        "Erilaiset ristit",
        "Linnut ja muut koristeet",
        "Kilpien piilokiinnitys",
      ],
    },
  ];
  
  const galleryItems = [
    { src: "/api/placeholder/400/300?text=Muistolaatta 1", alt: "Kaunis pronssinen muistolaatta" },
    { src: "/api/placeholder/400/300?text=Hautaristi", alt: "Yksityiskohtainen hautaristi" },
    { src: "/api/placeholder/400/300?text=Irtokirjaimet", alt: "Kultaiset irtokirjaimet kivessä" },
    { src: "/api/placeholder/400/300?text=Lemmikkilaatta", alt: "Sydämenmuotoinen lemmikkieläimen muistolaatta" },
    { src: "/api/placeholder/400/300?text=Koristelintu", alt: "Metallinen koristelintu" },
    { src: "/api/placeholder/400/300?text=Uurnakilpi", alt: "Kaiverrettu uurnakilpi" },
  ];

export default function Muistolaatat() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Muistolaatat ja kirjaimet, koristeet'
            alt='FINNMareka Oy Muistolaatat ja kirjaimet, koristeet'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Muistolaatat ja kirjaimet, koristeet
            </h1>
          </div>
        </div>
      </header>

      <main>
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Cross className='mr-2' />
            Muistolaatat ja koristeet
          </h2>
          <p className='text-lg mb-6'>
            FINNMareka Oy tarjoaa laajan valikoiman korkealaatuisia muistolaattoja, 
            kirjaimia ja koristeita. Oli kyseessä sitten perinteinen muistolaatta tai 
            yksilöllinen koristelu, meiltä löydät tarvitsemasi ratkaisut.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map((product, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <div className='flex items-center mb-4'>
                  {product.icon}
                  <h3 className='text-xl text-gray-800 font-bold ml-4'>{product.title}</h3>
                </div>
                <ul className='list-disc text-gray-600 pl-5 space-y-2'>
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Image className='mr-2' />
            Esimerkkejä töistämme
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {galleryItems.map((item, index) => (
              <div key={index} className='relative group'>
                <img
                  src={item.src}
                  alt={item.alt}
                  className='w-full h-64 object-cover rounded-lg'
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-white text-center p-2'>{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='bg-blue-50 p-8 rounded-lg'>
          <h2 className='text-2xl text-gray-800 font-bold mb-4 flex items-center'>
            <AlertTriangle className='mr-2 text-yellow-500' />
            Huomioitavaa
          </h2>
          <p className="text-gray-700">
            Tarjoamme räätälöityjä ratkaisuja kaikkiin muistolaatta- ja koristelutuotteisiin. 
            Ota yhteyttä asiantuntevaan henkilökuntaamme keskustellaksesi tarkemmin eri 
            vaihtoehdoista, materiaaleista ja suunnittelusta.
          </p>
        </section>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-800 font-bold mb-6 text-center'>
          Tarvitsetko apua sopivan muistolaatan tai koristeen valinnassa?
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
