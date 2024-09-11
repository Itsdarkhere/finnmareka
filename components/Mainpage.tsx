'use client'
import { navItems } from "./Header";

export default function Mainpage() {
  return (
    <main className='container mx-auto p-4'>
      {navItems.map((item) => (
        <section
          key={item.name}
          id={item.name.toLowerCase().replace(/ /g, "-")}
          className='mb-8'
        >
          <h2 className='text-2xl font-bold mb-4'>{item.name}</h2>
          {item.items.length > 0 ? (
            <ul className='list-disc pl-5'>
              {item.items.map((subItem) => (
                <li key={subItem}>
                  <a
                    href={`/${item.name.toLowerCase()}/${subItem
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className='text-blue-600 hover:underline'
                  >
                    {subItem}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <a
              href={`/${item.name.toLowerCase().replace(/ /g, "-")}`}
              className='text-blue-600 hover:underline'
            >
              {item.name === "Tietoa meistä"
                ? "Lue lisää meistä"
                : `Katso ${item.name.toLowerCase()}`}
            </a>
          )}
        </section>
      ))}
    </main>
  );
}
