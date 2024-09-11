import {
    Home,
    Layers,
    Scissors,
    Zap,
    Image,
    AlertTriangle,
  } from "lucide-react";
  
  const materials = [
    {
      title: "Ruostumaton teräs (RST)",
      icon: <Layers className='w-12 h-12 text-blue-300' />,
      items: [
        "Kiillotettu pinta",
        "Logon mukaiset muodot",
        "Kiinnitys tapeilla",
        "Saatavilla myös pienikokoisina (jopa 20mm korkeus)",
      ],
    },
    {
      title: "Muovi",
      icon: <Layers className='w-12 h-12 text-green-500' />,
      items: [
        "3mm paksu muovi",
        "Kullanvärinen pinta",
        "Akryyli (läpinäkyvä tai värillinen)",
      ],
    },
    {
      title: "Kromipelti",
      icon: <Layers className='w-12 h-12 text-gray-400' />,
      items: [
        "Opaali tausta",
        "Mahdollisuus taustavalaistukseen",
      ],
    },
  ];
  
  const features = [
    {
      title: "Kevyet ratkaisut",
      icon: <Scissors className='w-12 h-12 text-purple-500' />,
      description: "Tarjoamme kevyitä ratkaisuja, jotka soveltuvat erinomaisesti sisätiloihin ja seinäkiinnityksiin.",
    },
    {
      title: "Logojen toteutus",
      icon: <Image className='w-12 h-12 text-indigo-500' />,
      description: "Toteutamme logoja irtokirjaimin, joko maalattuna pohjalle tai erillisillä kirjaimilla.",
    },
    {
      title: "Erikoisratkaisut",
      icon: <Zap className='w-12 h-12 text-yellow-500' />,
      description: "Valmistamme erikoisratkaisuja, kuten akryyliin upotettuja kultaisia kirjaimia tai erittäin pieniä RST-kirjaimia.",
    },
  ];
  

export default function IrtokirjaimetSisalle() {


    return (
        <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Irtokirjaimet sisälle'
            alt='FINNMareka Oy Irtokirjaimet sisälle'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Irtokirjaimet sisälle
            </h1>
          </div>
        </div>
      </header>

      <main>
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Home className='mr-2' />
            Sisätilojen irtokirjaimet
          </h2>
          <p className='text-lg mb-6'>
            FINNMareka Oy tarjoaa laajan valikoiman irtokirjaimia ja logoja sisätiloihin. 
            Tuotteemme soveltuvat erinomaisesti toimistoihin, liiketiloihin ja muihin sisäympäristöihin, 
            tuoden tyylikkyyttä ja persoonallisuutta tiloihin.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {materials.map((material, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <div className='flex items-center mb-4'>
                  {material.icon}
                  <h3 className='text-xl text-gray-800 font-bold ml-4'>{material.title}</h3>
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
            <Zap className='mr-2' />
            Ominaisuudet ja erikoisratkaisut
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <div className='flex items-center mb-4'>
                  {feature.icon}
                  <h3 className='text-xl text-gray-800 font-bold ml-4'>{feature.title}</h3>
                </div>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='bg-blue-50 p-8 rounded-lg'>
          <h2 className='text-2xl text-gray-800 font-bold mb-4 flex items-center'>
            <AlertTriangle className='mr-2 text-yellow-500' />
            Huomioitavaa sisätilojen irtokirjaimissa
          </h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>Valaistus vaikuttaa merkittävästi kirjainten ulkonäköön - harkitse taustavalaistusta</li>
            <li>Sisätiloissa voidaan käyttää kevyempiä materiaaleja kuin ulkona</li>
            <li>Kiinnitystapa tulee valita seinämateriaalin mukaan</li>
            <li>Logon toteutuksessa huomioidaan brändin värit ja tyylit</li>
            <li>Pienissä kirjaimissa tarkkuus ja yksityiskohdat korostuvat</li>
          </ul>
        </section>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-800 font-bold mb-6 text-center'>
          Tarvitsetko apua sisätilojen irtokirjainten suunnittelussa?
        </h2>
        <p className='text-center text-gray-600 mb-6'>
          Ota yhteyttä asiantuntevaan henkilökuntaamme. Autamme sinua löytämään 
          parhaan ratkaisun juuri sinun sisätilojesi tarpeisiin.
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
    )
}