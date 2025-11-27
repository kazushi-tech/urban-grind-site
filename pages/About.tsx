import React from 'react';
import bannerImage from '../images/concept-cafe-window.webp';
import sustainabilityImage from '../images/hero-cafe-city.webp';
import craftImage from '../images/gallery-barista-hands.webp';
import portraitImage768 from '../images/kazushi-portrait-768.webp';
import portraitImage1280 from '../images/kazushi-portrait-1280.webp';

const About: React.FC = () => {
  React.useEffect(() => {
    document.title = "私たちについて | Kazushi's Urban Grind";
  }, []);

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={bannerImage}
          alt="窓際から見るカフェの店内風景" 
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
            2025年11月、明石の地に Kazushi's Urban Grind は誕生しました。
            「都会の喧騒を忘れて、丁寧に淹れた一杯でリセットできる場所を作りたい」。
            そんなオーナー Kazushi の想いから、この店は始まりました。
          </p>
          <p className="mb-12 leading-loose font-light">
            毎朝、豆の状態を確認し、その日の天候や湿度に合わせて焙煎を調整する。
            一杯一杯、丁寧に抽出する。そんな当たり前のことを、ただ真摯に続けています。
            ここに訪れる皆さまが、ほんの少しでも心を落ち着けられる時間を過ごせたら。それが私たちの願いです。
          </p>
        </div>

        {/* Owner's Message */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 items-center">
          <div className="order-2 md:order-1">
            <picture>
              <source media="(min-width: 768px)" srcSet={portraitImage1280} />
              <img 
                src={portraitImage768}
                alt="野菜とパンに囲まれて座るオーナーKazushiのポートレート"
                className="rounded-sm shadow-lg w-full h-auto"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="bg-cafe-black text-white p-8 md:p-12 rounded-sm order-1 md:order-2">
            <h3 className="text-xl font-serif font-bold mb-4">オーナー Kazushi からのひと言</h3>
            <p className="leading-loose text-gray-300 font-light">
              僕は毎日、野菜をたっぷり食べることを大切にしています。トレーニングと仕事、そして美味しいコーヒー。
              そのバランスを保つことが、心身ともに健やかでいるための僕なりの答えです。<br/><br/>
              
              この店のメニューや空間にも、そんな想いが反映されています。
              忙しい日常の中で少し立ち止まり、体に優しい一杯や軽食でリセットする。
              シンプルだけれど、心を満たす時間をお届けしたい。<br/><br/>
              
              明石の皆さま、そしてこの街を訪れる皆さまが、ここで穏やかなひとときを過ごせますように。
              心よりお待ちしております。
            </p>
          </div>
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
              alt="都会の街並みとコーヒーカップ" 
              className="rounded-sm shadow-lg w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={craftImage}
              alt="バリスタの手元、ハンドドリップでコーヒーを淹れる様子" 
              className="rounded-sm shadow-lg w-full h-auto"
              loading="lazy"
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