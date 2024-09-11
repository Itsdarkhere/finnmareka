import {
  Printer,
  FileText,
  AlertTriangle,
  CreditCard,
  Users,
  Shirt,
  Flag,
} from "lucide-react";

const products = [
  {
    title: "Kilvet ja opasteet",
    icon: <FileText className='w-12 h-12 text-blue-500' />,
    items: [
      "Jälkivalaistut opasteet",
      "Poistumistie-, palo-, LVI-, ja sähkökilvet",
      "Kerrosopasteet",
      "Numerot",
    ],
  },
  {
    title: "Käyntikortit",
    icon: <CreditCard className='w-12 h-12 text-blue-500' />,
    items: ["Yksiväriset", "Moniväriset", "Eri materiaaleille"],
  },
  {
    title: "Esitteet ja mainokset",
    icon: <FileText className='w-12 h-12 text-blue-500' />,
    items: ["Esitteet", "Mainokset", "Julisteet"],
  },
  {
    title: "Henkilö- ja kulkulupakortit",
    icon: <Users className='w-12 h-12 text-blue-500' />,
    items: ["Henkilökortit", "Kulkulupakortit"],
  },
  {
    title: "Etiketit ja tarrat",
    icon: <FileText className='w-12 h-12 text-blue-500' />,
    items: ["Etiketit", "Mainostarrat"],
  },
  {
    title: "Vaatteet",
    icon: <Shirt className='w-12 h-12 text-blue-500' />,
    items: ["Pelipaidat", "Ajopaidat"],
  },
  {
    title: "Liput ja banderollit",
    icon: <Flag className='w-12 h-12 text-blue-500' />,
    items: ["Liput", "Viirit", "Banderollit"],
  },
];
export default function Paino() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Painotyöt ja tulosteet'
            alt='FINNMareka Oy Painotyöt ja tulosteet'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Painotyöt ja tulosteet
            </h1>
          </div>
        </div>
      </header>

      <main>
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Printer className='mr-2' />
            Painotuotteet ja tulosteet
          </h2>
          <p className='text-lg mb-6'>
            FINNMareka Oy tarjoaa laajan valikoiman korkealaatuisia
            painotuotteita ja tulosteita. Oli kyseessä sitten yrityksen
            markkinointimateriaali tai turvallisuuteen liittyvät opasteet,
            meiltä löydät tarvitsemasi ratkaisut.
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

        <section className='bg-blue-50 p-8 rounded-lg'>
          <h2 className='text-2xl text-gray-800 font-bold mb-4 flex items-center'>
            <AlertTriangle className='mr-2 text-yellow-500' />
            Huomioitavaa
          </h2>
          <p className=" text-gray-700">
            Tarjoamme räätälöityjä ratkaisuja kaikkiin painotuote- ja
            tulostustarpeisiisi. Ota yhteyttä asiantuntevaan henkilökuntaamme
            keskustellaksesi tarkemmin eri vaihtoehdoista ja materiaaleista.
          </p>
        </section>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-800 font-bold mb-6 text-center'>
          Tarvitsetko apua sopivan painotuotteen valinnassa?
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
