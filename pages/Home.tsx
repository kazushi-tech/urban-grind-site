import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, BatteryCharging, Coffee } from 'lucide-react';
import heroImage768 from '../images/hero-cafe-interior-768.webp';
import heroImage1280 from '../images/hero-cafe-interior-1280.webp';
import heroImage1920 from '../images/hero-cafe-interior-1920.webp';
import latteArtImage from '../images/menu-latte-art.webp';

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = "Kazushi's Urban Grind | 都会の喧騒を忘れる至福の一杯";
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source media="(min-width: 1280px)" srcSet={heroImage1920} />
            <source media="(min-width: 768px)" srcSet={heroImage1280} />
            <img 
              src={heroImage768}
              alt="明石のカフェ店内、落ち着いた照明とカウンター席" 
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-cafe-accent font-medium tracking-[0.2em] text-sm md:text-base uppercase mb-4 block animate-fade-in">
            Est. 2025 Akashi
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-5 leading-[1.2] drop-shadow-2xl">
            都会の喧騒を忘れる<br/>
            <span className="italic text-cafe-accent">至福のひととき</span>
          </h1>
          <p className="text-gray-100 text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
            都会の喧騒を忘れて、丁寧に淹れた一杯でリセットできる場所。<br className="hidden sm:block"/>
            オーナー Kazushi が選び抜いた豆と、こだわりの空間でお待ちしています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/menu" 
              className="px-10 py-4 bg-cafe-accent text-white font-semibold text-base rounded-sm hover:bg-cafe-accent/90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
            >
              メニューを見る <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="px-10 py-4 border-2 border-white/80 text-white font-medium text-base rounded-sm hover:bg-white hover:text-cafe-black transition-all duration-300"
            >
              私たちのこだわり
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cafe-cream rounded-full flex items-center justify-center mb-6 text-cafe-accent">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">自家焙煎スペシャリティ</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                世界各地から厳選した豆を、店内で丁寧に少量焙煎。<br/>
                豆本来の個性を最大限に引き出します。
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cafe-cream rounded-full flex items-center justify-center mb-6 text-cafe-accent">
                <Wifi className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">高速Wi-Fi完備</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                クリエイティブな作業にも最適な環境。<br/>
                ストレスフリーな接続環境を提供します。
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cafe-cream rounded-full flex items-center justify-center mb-6 text-cafe-accent">
                <BatteryCharging className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">全席電源あり</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                PC作業や充電もご自由に。<br/>
                長時間の滞在も歓迎いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[600px]">
        <div className="bg-cafe-black text-white p-12 md:p-20 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6 leading-normal">
            「明石で見つけた、<br/>私だけの隠れ家。」
          </h2>
          <p className="text-cafe-accent text-lg italic mb-8">- Hyogo Cafe Magazine</p>
          <div className="w-12 h-0.5 bg-cafe-accent mb-8"></div>
          <p className="text-gray-400 font-light leading-relaxed">
            コーヒーは単なる飲み物ではありません。それは日常を豊かにする儀式です。<br/>
            バリスタが一杯一杯丁寧に抽出するエスプレッソ、そして季節を感じるスイーツと共に、特別な時間をお過ごしください。
          </p>
        </div>
        <div className="relative h-full">
           <img 
            src={latteArtImage}
            alt="ラテアートのクローズアップ、ハート模様のミルクフォーム" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
