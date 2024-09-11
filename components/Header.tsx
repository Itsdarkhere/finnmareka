"use client";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const navItems = [
    {
      name: "Tuotteet",
      link: "tuotteet",
      items: [
        { name: "Leimasimet", link: "leimasimet" },
        { name: "Kilvet, Kyltit ja Laatat", link: "kilvet-kyltit-ja-laatat" },
        { name: "Ulko-opasteet", link: "ulko-opasteet" },
        { name: "Tarrat ja teippaukset", link: "tarrat-ja-teippaukset" },
        { name: "Valomainokset", link: "valomainokset" },
        { name: "Liikennemerkit ja Tienviitat, lisätarvikkeet", link: "liikennemerkit-ja-tienviitat-lisatarvikkeet" },
        { name: "Leimasin- ja merkintävärit", link: "leimasin-ja-merkintavarit" },
        { name: "Maalaussablunat", link: "maalaussablunat" },
        { name: "Polttoleimasimet", link: "polttoleimasimet" },
        { name: "Nimineulat ja rintamerkit", link: "nimineulat-ja-rintamerkit" },
        { name: "Alue kartat", link: "alue-kartat" },
        { name: "Ovisummeritaulut", link: "ovisummeritaulut" },
        { name: "Muistolaatat ja kirjaimet, Koristeet", link: "muistolaatat-ja-kirjaimet-koristeet" },
        { name: "Postilaatikkokilvet ja Talonnumerot", link: "postilaatikkokilvet-ja-talonnumerot" },
        { name: "Painotyöt ja Tulosteet", link: "painotyot-ja-tulosteet" },
        { name: "UIMAHALLIOPASTEET", link: "uimahalliopasteet" },
        { name: "AUTOTEIPPAUKSET", link: "autoteippaukset" },
        { name: "Irtokirjaimet", link: "irtokirjaimet" },
        { name: "Irtokirjaimet sisalle", link: "irtokirjaimet-sisalle" }
      ],
    },
    {
      name: "Palvelut",
      link: "palvelut",
      items: [
        { name: "Kaiverrustyöt", link: "kaiverrustyot" },
        { name: "LASER merkintä ja -leikkaus", link: "laser-merkinta-ja-leikkaus" },
        { name: "Muut erikoistuotteet", link: "muut-erikoistuotteet" },
      ],
    },
    { name: "Esitteet", link: "esitteet", items: [] },
    { name: "Tietoa meistä", link: "tietoa-meista", items: [] },
    { name: "Yhteystiedot", link: "yhteystiedot", items: [] },
    { name: "Tiedostojen siirto-ohjeet", link: "tiedostojen-siirto-ohjeet", items: [] },
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
    <div className=" w-full gap-3 bg-header-pattern bg-repeat flex flex-col justify-center items-center">
      <header className=' max-w-7xl p-4 w-full  text-white flex justify-between items-center'>
        <Link href={"/"}>
          <h1 className='text-3xl text-white font-bold'>FINNMareka Oy</h1>
          <p className='text-sm text-white'>Leimasintehdas, kilpitehdas, kaivertamo</p>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {isMenuOpen && (
        <nav className='bg-gray-100 max-w-7xl rounded-sm w-full p-4'>
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
                        {item.items.map((subItem) => (
                          <li key={subItem.name}>
                            <a
                              href={`/${item.name.toLowerCase()}/${subItem.link
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                              className='text-blue-600 hover:underline block'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={`/${item.link.toLowerCase().replace(/ /g, "-")}`}
                    className='text-blue-600 hover:underline block'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
