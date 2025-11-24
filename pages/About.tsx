import React from 'react';
import bannerImage from '../images/concept-cafe-window.png';
import sustainabilityImage from '../images/hero-cafe-city.png';
import craftImage from '../images/gallery-barista-hands.png';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={bannerImage}
          alt="Restaurant interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-widest">Our Story</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-lg mx-auto text-gray-600">
          <h2 className="text-3xl font-serif font-bold text-cafe-black mb-8 text-center leading-relaxed">
            一杯のコーヒーから始まる、<br/>豊かな日常。
          </h2>
          <p className="mb-6 leading-loose font-light">
            2025年11月、兵庫県明石市に Kazushi's Urban Grind はオープンしました。
            目まぐるしく変化する都会の中で、ふと立ち止まり、自分自身と向き合える場所を作りたい。
            そんな想いから、私たちのカフェ作りは始まりました。
          </p>
          <p className="mb-12 leading-loose font-light">
            私たちが大切にしているのは「調和」です。
            厳選された豆の個性と焙煎の技術、洗練された空間と温かいおもてなし。
            それら全てが調和した時、心に残る一杯が生まれると信じています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="bg-cafe-cream p-10 rounded-sm">
            <h3 className="text-xl font-bold font-serif mb-6 text-cafe-black">サステナビリティへの取り組み</h3>
            <ul className="list-disc pl-5 space-y-4 text-sm leading-relaxed text-gray-700">
              <li>ダイレクトトレードによる公正な豆の取引</li>
              <li>植物由来の生分解性ストロー・カップの使用</li>
              <li>フードロスの削減とコンポストの活用</li>
              <li>地域コミュニティとの連携</li>
            </ul>
          </div>
          <div>
            <img 
              src={sustainabilityImage}
              alt="Coffee Beans" 
              className="rounded-sm shadow-lg w-full h-auto"
            />
          </div>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={craftImage}
              alt="Barista Hand Drip" 
              className="rounded-sm shadow-lg w-full h-auto"
            />
          </div>
          <div className="bg-cafe-black text-white p-10 rounded-sm order-1 md:order-2">
            <h3 className="text-xl font-bold font-serif mb-6">職人の技 - Craftsmanship</h3>
            <p className="leading-loose text-gray-300 font-light">
              私たちのバリスタは、コーヒー豆の状態、その日の気温や湿度に合わせて、
              挽き目や抽出時間を微調整しています。<br/><br/>
              マニュアル通りの味ではなく、その瞬間に最高の一杯を提供すること。
              それが私たちの誇りであり、約束です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;