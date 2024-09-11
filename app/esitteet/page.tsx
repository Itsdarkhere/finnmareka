import { FileText, Download, ExternalLink } from "lucide-react";

interface BrochureItem {
  name: string;
  size?: string;
  link: string;
}

const brochures: BrochureItem[] = [
  { name: "KD BOOK 2011", size: "75,2MB", link: "#" },
  { name: "DIGI digital print displays", size: "12,7MB", link: "#" },
  { name: "FISSO signs & fixings", size: "24,8MB", link: "#" },
  { name: "FLY suspension systems", size: "7,23MB", link: "#" },
  { name: "SHOP shop fitting & interiors", size: "9,17MB", link: "#" },
  { name: "SHOWROOM", size: "3,46MB", link: "#" },
  { name: "STOPPER crowd control systems", size: "4,47MB", link: "#" },
  { name: "ZIP presentation & brochure holders", size: "11,3MB", link: "#" },
];

export default function Esitteet() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Esitteet'
            alt='FINNMareka Oy Esitteet'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Esitteet
            </h1>
          </div>
        </div>
      </header>

      <main className='grid md:grid-cols-3 gap-8'>
        <div className='md:col-span-2'>
          <section className='mb-12'>
            <h2 className='text-3xl font-bold mb-6 text-blue-600'>
              Ladattavat esitteet
            </h2>
            <div className='grid gap-4'>
              {brochures.map((brochure, index) => (
                <div
                  key={index}
                  className='bg-white p-4 rounded-lg shadow-md flex items-center justify-between'
                >
                  <div className='flex items-center'>
                    <FileText className='mr-4 text-blue-500' />
                    <div>
                      <p className='font-semibold text-gray-900'>{brochure.name}</p>
                      {brochure.size && (
                        <p className='text-sm text-gray-500'>
                          Tiedostokoko: {brochure.size}
                        </p>
                      )}
                    </div>
                  </div>
                  <a
                    href={brochure.link}
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 flex items-center'
                    download
                  >
                    <Download className='mr-2' size={18} />
                    Lataa
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className='md:col-span-1'>
          <div className='bg-gray-100 p-6 rounded-lg shadow-md mb-8'>
            <h3 className='text-xl text-gray-800 font-bold mb-4'>Asennusohjeet</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-blue-600 hover:underline flex items-center'
                >
                  <FileText className='mr-2' size={18} />
                  Ovikilpimalleja
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-blue-600 hover:underline flex items-center'
                >
                  <FileText className='mr-2' size={18} />
                  Kilpien kiinnitysmalleja
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-blue-600 hover:underline flex items-center'
                >
                  <FileText className='mr-2' size={18} />
                  Liikennemerkit
                </a>
              </li>
            </ul>
          </div>

          <div className='bg-blue-100 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl text-gray-800 font-bold mb-4'>Hyödyllisiä linkkejä</h3>
            <a
              href='#'
              className='bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center mb-4'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ExternalLink className='mr-2' size={18} />
              Valmistajan kotisivut
            </a>
            <p className='text-sm text-gray-600'>
              Löydät lisätietoja tuotteistamme ja palveluistamme valmistajan
              kotisivuilta.
            </p>
          </div>
        </div>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-800 font-bold mb-6 text-center'>
          Tarvitsetko apua?
        </h2>
        <p className='text-center mb-6 text-gray-600'>
          Jos tarvitset apua esitteiden kanssa tai sinulla on kysyttävää
          tuotteistamme, ota yhteyttä asiakaspalveluumme.
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
