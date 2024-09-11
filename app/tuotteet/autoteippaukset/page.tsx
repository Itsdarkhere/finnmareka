import { Car, Scissors, Shield, Sun, Image, AlertTriangle } from "lucide-react";

const services = [
  {
    title: "Auton yliteippaus",
    icon: <Car className='w-12 h-12 text-blue-500' />,
    description:
      "Täydellinen auton ulkonäön muutos kestävällä ja laadukkaalla teippauksella.",
  },
  {
    title: "Osittainen teippaus",
    icon: <Scissors className='w-12 h-12 text-blue-500' />,
    description:
      "Teippaa vain tietyt osat autostasi, kuten katto, konepelti tai peilit.",
  },
  {
    title: "Ikkunoiden tummennuskalvot",
    icon: <Sun className='w-12 h-12 text-blue-500' />,
    description:
      "Paranna yksityisyyttä ja vähennä auringon häikäisyä ikkunoiden tummennuskalvoilla.",
  },
  {
    title: "Kiveniskusuojatarrat",
    icon: <Shield className='w-12 h-12 text-blue-500' />,
    description:
      "Suojaa autosi maalipintaa kiveniskuilta ja naarmuilta laadukkailla suojatarroilla.",
  },
];

const examples = [
  {
    title: "Auton yliteippaus - Ennen",
    src: "/api/placeholder/400/300?text=Yliteippaus Ennen",
    description: "Auton alkuperäinen väri ennen yliteippausta.",
  },
  {
    title: "Auton yliteippaus - Jälkeen",
    src: "/api/placeholder/400/300?text=Yliteippaus Jälkeen",
    description: "Sama auto yliteippauksen jälkeen - täysin uusi ilme!",
  },
  {
    title: "Katon teippaus",
    src: "/api/placeholder/400/300?text=Katon teippaus",
    description: "Esimerkki auton katon teippauksesta kontrastivärillä.",
  },
  {
    title: "Ikkunoiden tummennuskalvot",
    src: "/api/placeholder/400/300?text=Ikkunatummennukset",
    description:
      "Auto ikkunoiden tummennuksen jälkeen - tyylikäs ja yksityinen.",
  },
];

export default function AutoTeippaukset() {
  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Autoteippaukset'
            alt='FINNMareka Oy Autoteippaukset'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Autoteippaukset
            </h1>
          </div>
        </div>
      </header>

      <main>
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Car className='mr-2' />
            Autoteippauspalvelumme
          </h2>
          <p className='text-lg mb-6'>
            FINNMareka Oy tarjoaa kattavat autoteippauspalvelut. Oli kyseessä
            sitten täydellinen yliteippaus, osittainen teippaus tai ikkunoiden
            tummennukset, meiltä saat laadukkaat ja kestävät ratkaisut autosi
            ilmeen muuttamiseen ja suojaamiseen.
          </p>
          <div className='grid md:grid-cols-2 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <div className='flex items-center mb-4'>
                  {service.icon}
                  <h3 className='text-xl text-gray-800 font-bold ml-4'>
                    {service.title}
                  </h3>
                </div>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-gray-100 flex items-center'>
            <Image className='mr-2' />
            Esimerkkejä töistämme
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {examples.map((example, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <img
                  src={example.src}
                  alt={example.title}
                  className='w-full h-48 object-cover mb-4 rounded'
                />
                <h3 className='text-xl text-gray-800 font-bold mb-2'>
                  {example.title}
                </h3>
                <p className='text-gray-600'>{example.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='bg-blue-50 p-8 rounded-lg'>
          <h2 className='text-2xl text-gray-800 font-bold mb-4 flex items-center'>
            <AlertTriangle className='mr-2 text-yellow-500' />
            Huomioitavaa autoteippauksissa
          </h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>
              Auton pinnan tulee olla puhdas ja hyväkuntoinen ennen teippausta
            </li>
            <li>
              Teippauksen kesto riippuu käytöstä ja hoidosta - kysy meiltä
              hoito-ohjeita
            </li>
            <li>
              Ikkunatummennuksissa on huomioitava lain sallima tummuusaste
            </li>
            <li>Kiveniskusuojatarrat kannattaa asentaa heti uuteen autoon</li>
          </ul>
        </section>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl text-gray-800 font-bold mb-6 text-center'>
          Haluatko uudistaa autosi ilmeen tai suojata sen pintaa?
        </h2>
        <p className='text-center text-gray-600 mb-6'>
          Ota yhteyttä asiantuntevaan henkilökuntaamme. Autamme sinua löytämään
          parhaan ratkaisun juuri sinun autollesi.
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
