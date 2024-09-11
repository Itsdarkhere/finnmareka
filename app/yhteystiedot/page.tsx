import { MapPin, Phone, Mail, Clock, User } from "lucide-react";

export default function Yhteystiedot() {
  const activeStaff = [
    {
      name: "Mirva Vesterinen",
      phone: "040-506 23 06",
      email: "mirva.vesterinen@finnmareka.fi",
    },
    {
      name: "Raimo Vesterinen",
      phone: "040-587 40 87",
      email: "raimo.vesterinen@finnmareka.fi",
    },
    {
      name: "Sirpa Pietilä",
      phone: "03-735 49 31",
      email: "sirpa.pietila@finnmareka.fi",
    },
  ];

  const retiredStaff = [
    {
      name: "Marjatta Vesterinen",
      phone: "040-5685 337",
      email: "marjatta.vesterinen@finnmareka.fi",
    },
    {
      name: "Reino Vesterinen",
      phone: "040-5027 931",
      email: "reino.vesterinen@finnmareka.fi",
    },
  ];

  const StaffCard = ({
    person,
  }: {
    person: { name: string; phone: string; email: string };
  }) => (
    <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
      <div className='w-16 h-16 bg-gray-300 rounded-full mr-4 flex items-center justify-center'>
        <User className='text-gray-600' size={32} />
      </div>
      <div>
        <h3 className='font-bold text-gray-900'>{person.name}</h3>
        <p className='text-sm text-gray-700'>{person.phone}</p>
        <a
          href={`mailto:${person.email}`}
          className='text-sm text-blue-600 hover:underline'
        >
          {person.email}
        </a>
      </div>
    </div>
  );

  return (
    <div className='w-full max-w-7xl mx-auto p-4'>
      <header className='mb-12'>
        <div className='relative h-64 md:h-80 rounded-lg overflow-hidden mb-6'>
          <img
            src='/api/placeholder/1200/400?text=Yhteystiedot'
            alt='FINNMareka Oy toimisto'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>
              Yhteystiedot
            </h1>
          </div>
        </div>
      </header>

      <main className='grid md:grid-cols-2 gap-8'>
        <div>
          <section className='mb-8'>
            <h2 className='text-3xl font-bold mb-4 text-blue-600'>
              Toimipisteemme
            </h2>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='flex items-center text-gray-800 mb-2'>
                <MapPin className='mr-2 text-blue-500' />
                PATOKOSKENKATU 10, 15700 LAHTI, FINLAND
              </p>
              <p className='text-sm text-gray-600 ml-6 mb-4'>
                Jokimaan Ravirataa vastapäätä Etelä Lahdessa
              </p>
              <p className='flex text-gray-800 items-center mb-2'>
                <Phone className='mr-2 text-blue-500' />
                03 - 735 49 31
              </p>
              <p className='flex text-gray-800 items-center mb-2'>
                <Mail className='mr-2 text-blue-500' />
                myynti@finnmareka.fi
              </p>
              <p className='flex text-gray-800 items-center'>
                <Phone className='mr-2 text-blue-500' />
                FAX: 03 - 735 49 34
              </p>
            </div>
          </section>

          <section className='mb-8'>
            <h2 className='text-3xl font-bold mb-4 text-blue-600'>
              Aukioloajat
            </h2>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='flex text-gray-800 items-center mb-2'>
                <Clock className='mr-2 text-blue-500' />
                Arkisin 8 - 16
              </p>
              <p className='ml-6 text-gray-600 mb-2'>Muulloinkin tarvittaessa</p>
              <p className='flex text-gray-800 items-center'>
                <Phone className='mr-2 text-blue-500' />
                050 - 918 54 75
              </p>
            </div>
          </section>

          <section>
            <h2 className='text-3xl font-bold mb-4 text-blue-600'>Kartta</h2>
            <div className='bg-gray-200 h-64 rounded-lg flex items-center justify-center'>
              <p className='text-gray-600'>Kartta sijainnista tähän</p>
            </div>
          </section>
        </div>

        <div>
          <section className='mb-8'>
            <h2 className='text-3xl font-bold mb-4 text-blue-600'>
              Henkilöstö
            </h2>
            <div className='grid gap-4'>
              {activeStaff.map((person, index) => (
                <StaffCard key={index} person={person} />
              ))}
            </div>
          </section>

          <section className='mb-8'>
            <h2 className='text-3xl font-bold mb-4 text-blue-600'>
              Siirtyneet eläkkeelle
            </h2>
            <div className='grid gap-4'>
              {retiredStaff.map((person, index) => (
                <StaffCard key={index} person={person} />
              ))}
            </div>
          </section>

          <section>
            <h2 className='text-3xl font-bold mb-4 text-blue-600'>
              Kuvagalleria
            </h2>
            <div className='grid grid-cols-2 gap-4'>
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className='bg-gray-200 h-32 rounded-lg flex items-center justify-center'
                >
                  <p className='text-gray-600'>Kuva {num}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <section className='mt-12 bg-gray-100 p-8 rounded-lg mb-8'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4 text-center'>Huomioitavaa</h2>
        <p className='text-center text-gray-700'>
          Marjatta ja Reino Vesterinen siirtyivät ansaitulle eläkkeelle vuonna
          2012.
        </p>
      </section>
    </div>
  );
}
