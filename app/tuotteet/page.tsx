"use client";

import { navItems } from "@/components/Header";

export default function Tuotteet() {
  const productCategories =
    navItems.find((item) => item.name === "Tuotteet")?.items || [];

  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <main className="flex flex-col justify-start items-center">
        <h1 className="text-4xl md:text-6xl pb-6 pt-2 text-white font-bold text-center">Tuotteet</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {productCategories.map((category, index) => (
            <section
              key={index}
              className='bg-white cursor-pointer rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <div className='h-48 bg-gray-200 relative'>
                <img
                  src={`/api/placeholder/400/300?text=${category}`}
                  alt={category.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                  {category.name}
                </h2>
                <p className='text-gray-600 mb-4'>
                  {getProductDescription(category.name)}
                </p>
                <a
                  href={`/tuotteet/${category.link
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className='inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300'
                >
                  Tutustu tarkemmin
                </a>
              </div>
            </section>
          ))}
        </div>
      </main>

      <section className='mt-16 bg-gray-100 rounded-lg p-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
          Miksi valita meidän tuotteemme?
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {[
            {
              title: "Korkea laatu",
              description:
                "Kaikki tuotteemme valmistetaan korkealaatuisista materiaaleista ja tarkkuudella.",
            },
            {
              title: "Mukautettavuus",
              description:
                "Tarjoamme laajan valikoiman mukauttamisvaihtoehtoja jokaiseen tuotteeseen.",
            },
            {
              title: "Nopea toimitus",
              description:
                "Tehokas tuotanto ja logistiikka takaavat nopeat toimitusajat.",
            },
          ].map((feature, index) => (
            <div key={index} className='text-center'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-white text-2xl font-bold'>
                  {index + 1}
                </span>
              </div>
              <h3 className='text-xl text-gray-900 font-semibold mb-2'>{feature.title}</h3>
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
              question: "Miten voin tilata tuotteita?",
              answer:
                "Voit tilata tuotteita verkkosivujemme kautta, sähköpostitse tai puhelimitse. Autamme sinua mielellämme löytämään sopivimman ratkaisun.",
            },
            {
              question: "Kuinka nopeasti saan tilaukseni?",
              answer:
                "Toimitusaika riippuu tuotteesta ja tilauksen koosta. Yleensä toimitusaika on 1-2 viikkoa tilauksesta. Tarkemman arvion saat tilauksen yhteydessä.",
            },
            {
              question: "Voiko tuotteita muokata?",
              answer:
                "Kyllä, useimpia tuotteitamme voidaan muokata asiakkaan toiveiden mukaan. Ota yhteyttä asiakaspalveluumme keskustellaksesi muokkausvaihtoehdoista.",
            },
          ].map((item, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl text-gray-900 font-semibold mb-2'>{item.question}</h3>
              <p className='text-gray-600'>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const getProductDescription = (category: string): string => {
  const descriptions: { [key: string]: string } = {
    Leimasimet:
      "Korkealaatuiset leimasimet yrityksille ja yksityishenkilöille. Laaja valikoima eri kokoja ja malleja.",
    "Kilvet, Kyltit ja Laatat":
      "Kestävät ja tyylikkäät kilvet, kyltit ja laatat kaikkiin tarpeisiin. Saatavana eri materiaaleista.",
    "Ulko-opasteet":
      "Säänkestävät ja näkyvät ulko-opasteet kiinteistöihin ja julkisiin tiloihin.",
    Sisäopasteet:
      "Tyylikkäät ja selkeät sisäopasteet toimistoihin, liiketiloihin ja julkisiin rakennuksiin.",
    "Tarrat ja teippaukset":
      "Monipuoliset tarrat ja teippaukset mainontaan, merkintään ja koristeluun.",
    Valomainokset:
      "Huomiota herättävät valomainokset yrityksille. Energiatehokkaat LED-ratkaisut.",
    "Liikennemerkit ja Tienviitat":
      "Standardien mukaiset liikennemerkit ja tienviitat. Kestävät ja hyvin näkyvät.",
    // Add more descriptions for other categories as needed
  };

  return (
    descriptions[category] ||
    "Tutustu laajaan valikoimaamme korkealaatuisia tuotteita."
  );
};
