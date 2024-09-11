"use client";

const services = [
  "Kaiverrustyöt",
  "LASER merkintä ja -leikkaus",
  "Muut erikoistuotteet",
];
export default function Palvelut() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <main className='flex flex-col justify-start items-center'>
        <h1 className='text-4xl md:text-6xl pb-6 pt-2 text-white font-bold text-center'>
          Palvelut
        </h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <section
              key={service}
              className='bg-white cursor-pointer rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <div className='h-48 bg-gray-200 relative'>
                <img
                  src={`/api/placeholder/400/300?text=${encodeURIComponent(
                    service
                  )}`}
                  alt={service}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                  {service}
                </h2>
                <p className='text-gray-600 mb-4'>
                  {getServiceDescription(service)}
                </p>
                <a
                  href={`/palvelut/${service.toLowerCase().replace(/ /g, "-")}`}
                  className='inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300'
                >
                  Lue lisää
                </a>
              </div>
            </section>
          ))}
        </div>
      </main>

      <section className='mt-16 bg-gray-100 rounded-lg p-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
          Miksi valita meidän palvelumme?
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {[
            {
              title: "Ammattitaito",
              description:
                "Kokeneet ammattilaisemme takaavat laadukkaan lopputuloksen jokaisessa projektissa.",
            },
            {
              title: "Moderni teknologia",
              description:
                "Käytämme uusinta teknologiaa varmistaaksemme tarkkuuden ja tehokkuuden.",
            },
            {
              title: "Asiakaslähtöisyys",
              description:
                "Räätälöimme palvelumme asiakkaidemme yksilöllisten tarpeiden mukaan.",
            },
          ].map((feature, index) => (
            <div key={index} className='text-center'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-white text-2xl font-bold'>
                  {index + 1}
                </span>
              </div>
              <h3 className='text-xl text-gray-900 font-semibold mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-16 mb-8'>
        <h2 className='text-3xl font-bold mb-6 text-center'>
          Usein kysytyt kysymykset
        </h2>
        <div className='space-y-4'>
          {[
            {
              question: "Miten voin tilata palveluitanne?",
              answer:
                "Voit tilata palveluitamme ottamalla yhteyttä asiakaspalveluumme puhelimitse, sähköpostitse tai verkkosivujemme yhteydenottolomakkeen kautta. Kartoitamme tarpeesi ja teemme sinulle tarjouksen.",
            },
            {
              question: "Kuinka nopeasti palvelut toteutetaan?",
              answer:
                "Palveluiden toteutusaika riippuu projektin laajuudesta ja nykyisestä työtilanteestamme. Pyrimme aina toteuttamaan palvelut mahdollisimman nopeasti, kuitenkaan laadusta tinkimättä. Saat tarkan arvion aikataulusta tilauksen yhteydessä.",
            },
            {
              question: "Voitteko toteuttaa erikoistoiveita?",
              answer:
                "Kyllä, erikoistoiveiden toteuttaminen on yksi vahvuuksistamme. Ota yhteyttä asiakaspalveluumme keskustellaksesi tarpeistasi ja ideoidaksesi kanssamme parhaan mahdollisen ratkaisun.",
            },
          ].map((item, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl text-gray-900 font-semibold mb-2'>
                {item.question}
              </h3>
              <p className='text-gray-600'>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const getServiceDescription = (service: string): string => {
  const descriptions: { [key: string]: string } = {
    Kaiverrustyöt:
      "Tarjoamme tarkkoja ja laadukkaita kaiverrustöitä erilaisille materiaaleille. Soveltuu niin yksityishenkilöiden kuin yritysten tarpeisiin.",
    "LASER merkintä ja -leikkaus":
      "Modernilla laser-teknologialla toteutamme tarkkoja merkintöjä ja leikkauksia monenlaisille materiaaleille. Ihanteellinen ratkaisu monimutkaisiin ja yksityiskohtaisiin projekteihin.",
    "Muut erikoistuotteet":
      "Räätälöimme erikoistuotteita asiakkaidemme yksilöllisiin tarpeisiin. Oli kyseessä sitten uniikki design tai erikoismateriaali, löydämme ratkaisun.",
  };

  return (
    descriptions[service] ||
    "Tutustu monipuolisiin ja laadukkaisiin palveluihimme."
  );
};
