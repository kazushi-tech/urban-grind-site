import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Coffee, MapPin, Instagram, Facebook, Twitter, Menu as MenuIcon, X } from 'lucide-react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// --- Components defined here to ensure single file structure for shared layout ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'ホーム' },
    { path: '/menu', label: 'メニュー' },
    { path: '/about', label: 'コンセプト' },
    { path: '/gallery', label: 'ギャラリー' },
    { path: '/contact', label: 'アクセス' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-cafe-black/95 text-white backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 font-serif text-xl md:text-2xl font-bold tracking-wider">
              <Coffee className="h-6 w-6 md:h-8 md:w-8 text-cafe-accent" />
              <span>URBAN GRIND</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 tracking-wide ${
                    isActive(link.path)
                      ? 'text-cafe-accent'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cafe-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-cafe-accent bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-cafe-black text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-serif font-bold mb-4">KAZUSHI'S URBAN GRIND</h3>
          <p className="text-sm leading-relaxed font-light">
            都会の喧騒の中に佇む、静寂の空間。<br/>
            こだわりの豆と職人の技で、<br/>
            最高の一杯をお届けします。
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-serif font-bold mb-4">営業時間</h3>
          <ul className="text-sm space-y-2 font-light">
            <li className="flex justify-between max-w-[200px]"><span>平日</span> <span>8:00 - 20:00</span></li>
            <li className="flex justify-between max-w-[200px]"><span>土日祝</span> <span>9:00 - 21:00</span></li>
            <li className="mt-2 text-xs text-cafe-accent">*定休日：不定休</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-serif font-bold mb-4">アクセス & SNS</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-cafe-accent transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-cafe-accent transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-cafe-accent transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
          <div className="flex items-start gap-2 text-sm font-light">
            <MapPin className="h-4 w-4 text-cafe-accent mt-1" />
            <span>〒107-0062<br/>東京都港区南青山 5-12-3<br/>アーバンビル 1F</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Urban Grind Tokyo. All rights reserved.
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;