export default function TietoaMeista() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Tietoa meistä'
            alt='FINNMareka Oy toimisto'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Tietoa meistä
            </h1>
          </div>
        </div>
      </header>

      <main className='grid md:grid-cols-3 gap-8'>
        <div className='md:col-span-2'>
          <section className='mb-12'>
            <h2 className='text-3xl font-bold mb-4 text-white'>
              Tervetuloa maailmaan minun silmin nähtynä
            </h2>
            <p className='text-lg mb-4'>MERKILLISTÄ MERKINTÄÄ :-)</p>
            <p className='mb-4'>
              Me täällä Finn Marekassa olemme erikoistuneet kaikenlaiseen
              merkitsemiseen. Laaja ja monipuolinen tuotevalikoimamme kattaa
              koko merkitsemisalan.
            </p>
            <p className='mb-4'>
              Jo alkaen 1977 vuodesta suunnittelemme, valmistamme, opastamme ja
              maahantuomme sekä huollamme. Meiltä saat leimasintuotteet ja
              -tarvikkeet, monenlaiset kilvet ja opasteet kaiverruksineen ja
              tarratöineen eri materiaaleille.
            </p>
            <p className='font-bold'>YRITYKSILLE JA YKSITYISHENKILÖILLE</p>
          </section>

          <section className='mb-12'>
            <h2 className='text-2xl font-bold mb-4 text-white'>
              Asiat kerralla kuntoon
            </h2>
            <p className='mb-4'>
              Erottuakseen muista uusi yritys tarvitsee yksilölliset leimasimet,
              kilvet, opasteet ja tarrat. Samantapainen tilanne on yrityksellä,
              joka remontoi toimitilaansa, muuttaa uusiin tiloihin tai jonka
              nimi tai yhteystiedot (esim. puhelinnumero) vaihtuvat.
            </p>
            <p className='mb-4'>
              On järkevää keskittää tilauksensa luotettavaan, asiansa osaavaan
              toimittajaan, jolla on riittävän laaja tuotevalikoima. Siinä
              säästää sekä aikaa että energiaa ja usein myös rahaa.
            </p>
            <p>
              Kun logot ja muut tiedot ovat meillä valmiina, lisätilauksetkin
              sujuvat helposti vaikkapa puhelimitse tai sähköpostilla.
            </p>
          </section>
        </div>

        <div className='md:col-span-1'>
          <div className='bg-gray-100 p-6 rounded-lg shadow-md mb-8'>
            <h3 className='text-xl text-gray-900 font-bold mb-4'>Yhteystiedot</h3>
            <p className='mb-2 text-gray-700'>Puh: 03 - 735 49 31 tai 050 - 918 5475</p>
            <p className='mb-2 text-gray-700'>FAX: 03 - 735 49 34</p>
            <p className='mb-2 text-gray-700'>Sähköposti: myynti@finnmareka.fi</p>
          </div>

          <div className='bg-blue-100 p-6 rounded-lg shadow-md mb-8'>
            <h3 className='text-xl font-bold mb-4 text-gray-900'>Tuotekategoriat</h3>
            <ul className='list-disc pl-5 space-y-1 text-gray-700'>
              <li>Leimasimet</li>
              <li>Kilvet ja opasteet</li>
              <li>Kaiverrukset</li>
              <li>Tarrat ja teippaukset</li>
              <li>Liikennemerkit</li>
              <li>Erikoistuotteet</li>
            </ul>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/api/placeholder/200/200?text=Toimisto 1'
              alt='FINNMareka toimisto'
              className='w-full h-auto rounded-lg shadow-md'
            />
            <img
              src='/api/placeholder/200/200?text=Toimisto 2'
              alt='FINNMareka tuotantotila'
              className='w-full h-auto rounded-lg shadow-md'
            />
          </div>
        </div>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-900 font-bold mb-6 text-center'>
          Palvelumme kattavat
        </h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {[
            "Leimasimet ja tarvikkeet",
            "Kilvet ja opasteet",
            "Kaiverrukset",
            "Tarrat ja teippaukset",
            "Liikennemerkit ja tienviitat",
            "Logosuunnittelu",
            "Käyntikortit",
            "Henkilökortit",
            "Erikoistuotteet",
          ].map((service, index) => (
            <div key={index} className='bg-white p-4 rounded-lg shadow-md'>
              <p className='text-center text-gray-800 font-semibold'>{service}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
