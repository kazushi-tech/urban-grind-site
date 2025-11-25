import React from 'react';
import img1 from '../images/gallery-cafe-exterior.jpg';
import img2 from '../images/menu-latte-art.jpg';
import img3 from '../images/menu-coldbrew.jpg';
import img4 from '../images/gallery-barista-hands.jpg';
import img5 from '../images/menu-earlgrey.jpg';
import img6 from '../images/hero-cafe-interior.jpg';
import img7 from '../images/menu-financier.jpg';
import img8 from '../images/menu-fruit-tart.jpg';

const Gallery: React.FC = () => {
  const images = [
    { url: img1, span: 'col-span-1 md:col-span-2 row-span-2', height: 'h-96' }, // Exterior
    { url: img2, span: 'col-span-1', height: 'h-48' }, // Latte Art
    { url: img3, span: 'col-span-1', height: 'h-48' }, // Cold Brew
    { url: img4, span: 'col-span-1 row-span-2', height: 'h-96' }, // Barista Hands
    { url: img5, span: 'col-span-1', height: 'h-48' }, // Earl Grey
    { url: img6, span: 'col-span-1 md:col-span-2', height: 'h-64' }, // Interior
    { url: img7, span: 'col-span-1', height: 'h-64' }, // Financier
    { url: img8, span: 'col-span-1 md:col-span-2', height: 'h-64' }, // Fruit Tart
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cafe-accent uppercase tracking-widest text-sm font-semibold">Visuals</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-3 text-cafe-black">Gallery</h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto font-light">
            Kazushi's Urban Grind の日常。<br/>
            光、香り、そして音。五感で感じる空間。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(100px,_auto)]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group ${img.span} ${img.height}`}
            >
              <img
                src={img.url}
                alt="Cafe Gallery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
