"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const imageTopics = [
    'Irtokirjaimet', 'Maalatut irtokirjaimet', 'Maalattu Logo', 'Ms 600mm',
    'Ms kirjain lakkattu', 'Iso Kittilän', 'vaakuna', 'Lahden Hennalan',
    'muistotaulu', 'Alumiininen', 'Laser merkkaus', 'Opaskartta',
    'Profiilikilvet', 'Maalaussabluna', 'Automaattinen', 'Leimauslaite',
    'Talon numero', 'Polttolaatta', 'Valolaatikko', 'A-kyltti', 'Acryll'
  ];
  
  const images = imageTopics.map((topic, index) => ({
    title: topic,
    src: `https://picsum.photos/seed/${index}/800/600`
  }));

export default function Kuvia() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-4xl md:text-5xl pb-4 text-white font-bold text-center'>Kuvia tuotteista</h1>

      <div className='relative'>
        <img
          src={images[currentImage].src}
          alt={images[currentImage].title}
          className='w-full h-[350px] md:h-[600px] object-cover rounded-lg shadow-lg'
        />
        <div className='absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded'>
          {images[currentImage].title}
        </div>
        <button
          onClick={prevImage}
          className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition'
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition'
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className='mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {images.map((image, index) => (
          <div
            key={index}
            className='cursor-pointer'
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={image.src}
              alt={image.title}
              className='w-full h-32 object-cover rounded-lg shadow-md hover:opacity-75 transition'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
