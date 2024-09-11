import { FileText, Image, Mail, Phone, HelpCircle } from "lucide-react";

export default function TiedostojenSiirto() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Tiedostojen siirto-ohjeet'
            alt='FINNMareka Oy Tiedostojen siirto-ohjeet'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Tiedostojen siirto-ohjeet
            </h1>
          </div>
        </div>
      </header>

      <main className='grid md:grid-cols-3 gap-8'>
        <div className='md:col-span-2'>
          <section className='mb-12'>
            <h2 className='text-3xl font-bold mb-6 text-blue-600'>
              Ohjelmatiedostot
            </h2>
            <ul className='list-disc pl-5 space-y-2'>
              <li>FreeHand - MX (vanhemmatkin versiot käyvät)</li>
              <li>Adobe Illustrator</li>
              <li>Corel Draw</li>
              <li>Taitto-ohjelman .eps muoto</li>
            </ul>
            <p className='mt-4'>
              Leikkaus- ja kaiverrustiedostot oltava aina vektorimuodossa
              (ääriviivoina) myös fontit, tai sitten fontti toimitettava meille
              käyttöön.
            </p>
            <a
              href='#'
              className='text-blue-600 hover:underline mt-2 inline-block'
            >
              Opastus vektorointiin tästä.
            </a>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold mb-6 text-blue-600'>
              Värikoodit
            </h2>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='bg-gray-100 p-4 rounded-lg'>
                <h3 className='text-xl text-gray-800 font-bold mb-2'>PMS värisävyt</h3>
                <a href='#' className='text-blue-600 hover:underline'>
                  PMS Värikartta täältä
                </a>
              </div>
              <div className='bg-gray-100 p-4 rounded-lg'>
                <h3 className='text-xl text-gray-800 font-bold mb-2'>RAL värisävy</h3>
                <a href='#' className='text-blue-600 hover:underline'>
                  RAL-varikartta.pdf
                </a>
              </div>
            </div>
            <p className='mt-4 text-sm text-gray-500'>
              (huomioithan näytön kalibroinnin sävyerot)
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold mb-6 text-blue-600'>
              Tiedostomuodot
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-xl font-bold mb-4 flex items-center'>
                  <FileText className='mr-2' />
                  Vektorigrafiikka
                </h3>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>.pdf</li>
                  <li>.eps</li>
                  <li>.fh11</li>
                  <li>.ai</li>
                </ul>
                <p className='mt-4 text-sm'>Muuteltavissa olevia muotoja</p>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-4 flex items-center'>
                  <Image className='mr-2' />
                  Bittikuvatiedostot
                </h3>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>.jpeg</li>
                  <li>.tiff</li>
                  <li>.giff</li>
                  <li>.psd</li>
                </ul>
                <p className='mt-4 text-sm'>Valokuvat</p>
              </div>
            </div>
          </section>
        </div>

        <div className='md:col-span-1'>
          <div className='bg-blue-100 p-6 rounded-lg shadow-md mb-8'>
            <h3 className='text-xl text-gray-900 font-bold mb-4'>Huomioitavaa</h3>
            <ul className='space-y-2 text-gray-700'>
              <li>Kuvaresuluutio 100-600 dpi riippuen tulostuskoosta</li>
              <li>
                Mitä parempi alkuperäinen dokumentti on, sitä parempi lopputulos
                saadaan aikaiseksi.
              </li>
              <li>
                Piirrämme asiakkaan logot tarvittaessa vektorimuotoon, joten ei
                huolta jos ei vektoriointi onnistu!
              </li>
            </ul>
          </div>

          <div className='bg-gray-100 p-6 rounded-lg shadow-md mb-8'>
            <h3 className='text-xl text-gray-900 font-bold mb-4'>Muut toimitustavat</h3>
            <ul className='space-y-2 text-gray-700'>
              <li>CD, DVD</li>
              <li>USB-muistitikku</li>
              <li>Korppu</li>
              <li>Suoraan kamerasta</li>
            </ul>
          </div>

          <div className='bg-green-100 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl text-gray-900 font-bold mb-4'>Ota yhteyttä</h3>
            <p className='mb-4 text-gray-700'>
              Jos tarvitset lisätietoja tai on jotain kysyttävää:
            </p>
            <div className='space-y-2'>
              <a
                href='tel:037354931'
                className='flex items-center text-blue-600 hover:underline'
              >
                <Phone className='mr-2' size={18} />
                03 - 735 49 31
              </a>
              <a
                href='tel:0509185475'
                className='flex items-center text-blue-600 hover:underline'
              >
                <Phone className='mr-2' size={18} />
                050 - 918 54 75
              </a>
              <a
                href='mailto:myynti@finnmareka.fi'
                className='flex items-center text-blue-600 hover:underline'
              >
                <Mail className='mr-2' size={18} />
                myynti@finnmareka.fi
              </a>
            </div>
          </div>
        </div>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-900 font-bold mb-6 text-center flex items-center justify-center'>
          <HelpCircle className='mr-2' />
          Tarvitsetko apua suurten tiedostojen kanssa?
        </h2>
        <p className='text-center text-gray-700 mb-6'>
          Isot tiedostot (yli 20 Mt) voit lähettää FTP-palvelimen kautta. Pyydä
          osoite ja tunnus FTP-palvelimelle ottamalla yhteyttä meihin.
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
