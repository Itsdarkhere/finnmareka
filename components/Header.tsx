"use client";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const navItems = [
  {
    name: "Tuotteet",
    link: "tuotteet",
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
      "Alue kartat",
      "Ovisummeritaulut",
      "Muistolaatat ja kirjaimet, Koristeet",
      "Postilaatikkokilvet ja Talonnumerot",
      "Painotyöt ja Tulosteet"
    ],
  },
  {
    name: "Palvelut",
    link: "palvelut",
    items: [
      "Kaiverrustyöt",
      "LASER merkintä ja -leikkaus",
      "Muut erikoistuotteet",
    ],
  },
  { name: "Esitteet", link: "esitteet", items: [] },
  { name: "Tietoa meistä", link: "tietoa-meista", items: [] },
  { name: "Yhteystiedot", link: "yhteystiedot", items: [] },
  { name: "Tiedostojen siirto-ohjeet", link: "tiedostojen-siirto", items: [] },
  { name: "Kuvia", link: "kuvia", items: [] },
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
    <div className=" w-full gap-3 bg-blue-600 flex flex-col justify-center items-center">
      <header className=' max-w-7xl p-4 w-full  text-white flex justify-between items-center'>
        <Link href={"/"}>
          <h1 className='text-3xl font-bold'>FINNMareka Oy</h1>
          <p className='text-xl'>Leimasintehdas, kilpitehdas, kaivertamo</p>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {isMenuOpen && (
        <nav className='bg-gray-100 max-w-7xl w-full p-4'>
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
    </div>
  );
}
