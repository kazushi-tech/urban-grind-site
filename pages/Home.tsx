import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, BatteryCharging, Coffee } from 'lucide-react';
import heroImage from '../images/hero-cafe-interior.png';
import latteArtImage from '../images/menu-latte-art.png';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Japanese Cafe Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-cafe-accent font-medium tracking-[0.2em] text-sm md:text-base uppercase mb-4 block animate-fade-in">
            Est. 2025 Akashi
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            都会の喧騒を忘れる<br/>
            <span className="italic text-cafe-accent">至福の一杯</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            忙しい日常の中に、ほっと一息つける場所を。<br/>
            厳選された豆と、心地よい空間がお待ちしています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/menu" 
              className="px-8 py-3 bg-cafe-accent text-white font-medium rounded-sm hover:bg-white hover:text-cafe-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              メニューを見る <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-3 border border-white text-white font-medium rounded-sm hover:bg-white hover:text-cafe-black transition-all duration-300"
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
            alt="Latte Art" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;