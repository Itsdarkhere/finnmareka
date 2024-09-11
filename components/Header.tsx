"use client";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const navItems = [
  {
    name: "Tuotteet",
    items: [
      "Leimasimet",
      "Kilvet, Kyltit ja Laatat",
      "Ulko-opasteet",
      "Sisäopasteet",
      "Tarrat ja teippaukset",
      "Valomainokset",
      "Liikennemerkit ja Tienviitat, lisätarvikkeet",
      "Leimasin- ja merkintävärit",
      "Maalaussablunat",
      "Polttoleimasimet",
      "Nimineulat ja rintamerkit",
      "Ovisummeritaulut",
      "Muistolaatat ja kirjaimet, Koristeet",
      "Postilaatikkokilvet ja Talonnumerot",
    ],
  },
  {
    name: "Palvelut",
    items: [
      "Kaiverrustyöt",
      "LASER merkintä ja -leikkaus",
      "Muut erikoistuotteet",
    ],
  },
  { name: "Esitteet", items: [] },
  { name: "Tietoa meistä", items: [] },
  { name: "Yhteystiedot", items: [] },
  { name: "Tiedostojen siirto-ohjeet", items: [] },
  { name: "Kuvia", items: [] },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  const toggleAccordion = (name: string) => {
    setOpenAccordions((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <>
      <header className='bg-blue-600 text-white p-4 flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold'>FINNMareka Oy</h1>
          <p className='text-xl'>Leimasintehdas, kilpitehdas, kaivertamo</p>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {isMenuOpen && (
        <nav className='bg-gray-100 p-4'>
          <ul className='space-y-2'>
            {navItems.map((item) => (
              <li key={item.name} className='border-b border-gray-200 pb-2'>
                {item.items.length > 0 ? (
                  <div>
                    <button
                      onClick={() => toggleAccordion(item.name)}
                      className='flex justify-between items-center w-full text-left text-blue-600 hover:underline'
                    >
                      {item.name}
                      {openAccordions.includes(item.name) ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                    {openAccordions.includes(item.name) && (
                      <ul className='pl-4 mt-2 space-y-1'>
                        {item.items.map((subItem: string) => (
                          <li key={subItem}>
                            <a
                              href={`/${item.name.toLowerCase()}/${subItem
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                              className='text-blue-600 hover:underline block'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={`#${item.name.toLowerCase().replace(/ /g, "-")}`}
                    className='text-blue-600 hover:underline block'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
