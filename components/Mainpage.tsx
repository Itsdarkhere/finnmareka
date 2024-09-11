"use client";
import { navItems } from "./Header";

export default function Mainpage() {
  return (
    <main className='w-full max-w-7xl mx-auto p-4'>
      <section className='mb-12'>
        <div className='relative h-64 md:h-96 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400'
            alt='FINNMareka Oy showcase'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-6xl text-white font-bold text-center'>
              Laatua ja tarkkuutta <br /> jokaiseen yksityiskohtaan
            </h1>
          </div>
        </div>
        <p className='text-lg text-gray-400 max-w-3xl mx-auto text-center'>
          FINNMareka Oy tarjoaa laajan valikoiman korkealaatuisia leimasin-,
          kilpi- ja kaiverrustuotteita sekä palveluita yrityksille ja
          yksityishenkilöille.
        </p>
      </section>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {navItems.map((item) => (
          <section
            key={item.name}
            id={item.name.toLowerCase().replace(/ /g, "-")}
            className='mb-8 cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <div className='h-48 bg-gray-200 relative'>
              <img
                src={`/api/placeholder/400/300?text=${item.name}`}
                alt={item.name}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                {item.name}
              </h2>
              {item.items.length > 0 ? (
                <ul className='space-y-2'>
                  {item.items.slice(0, 5).map((subItem) => (
                    <li key={subItem}>
                      <a
                        href={`/${item.name.toLowerCase()}/${subItem
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className='text-blue-600 hover:underline block'
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                  {item.items.length > 5 && (
                    <li>
                      <a
                        href={`/${item.name.toLowerCase()}`}
                        className='text-blue-600 hover:underline font-semibold'
                      >
                        Katso kaikki {item.items.length} vaihtoehtoa
                      </a>
                    </li>
                  )}
                </ul>
              ) : (
                <a
                  href={`/${item.name.toLowerCase().replace(/ /g, "-")}`}
                  className='text-blue-600 hover:underline inline-block mt-2'
                >
                  {item.name === "Tietoa meistä"
                    ? "Lue lisää meistä"
                    : `Katso ${item.name.toLowerCase()}`}
                </a>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className='mt-16 bg-gray-100 rounded-lg p-8 mb-8'>
        <h2 className='text-3xl text-gray-800 font-bold mb-6 text-center'>
          Miksi valita FINNMareka Oy?
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {[
            {
              title: "Korkea laatu",
              description: "Käytämme vain parhaita materiaaleja ja tekniikoita",
            },
            {
              title: "Laaja valikoima",
              description:
                "Kattava tuote- ja palveluvalikoima kaikkiin tarpeisiin",
            },
            {
              title: "Asiantunteva palvelu",
              description: "Ammattitaitoinen henkilökuntamme auttaa sinua",
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
    </main>
  );
}
