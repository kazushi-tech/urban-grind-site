import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import contactBannerImage from '../images/gallery-cafe-exterior.png';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("お問い合わせありがとうございます。内容を確認次第ご連絡いたします。");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-cafe-cream min-h-screen">
      <div className="relative h-[40vh] w-full">
         <img 
          src={contactBannerImage}
          alt="Cafe Exterior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cafe-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-widest">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Section */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-cafe-black mb-6">Access</h2>
              <p className="text-gray-600 mb-8 font-light">
                明石駅から徒歩5分。静かな裏通りに面した場所にございます。<br/>
                ショッピングの合間や、お仕事帰りにぜひお立ち寄りください。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-cafe-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cafe-black">住所</h4>
                    <p className="text-gray-600 font-light">〒673-0891<br/>兵庫県明石市大明石町 1-1-1<br/>アーバンビル 1F</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-cafe-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cafe-black">電話番号</h4>
                    <p className="text-gray-600 font-light">078-123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-cafe-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cafe-black">メール</h4>
                    <p className="text-gray-600 font-light">hello@kazushis-urbangrind.jp</p>
                  </div>
                </div>

                 <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-cafe-accent">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cafe-black">営業時間</h4>
                    <p className="text-gray-600 font-light">平日: 8:00 - 20:00</p>
                    <p className="text-gray-600 font-light">土日祝: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Simple Map Placeholder */}
            <div className="w-full h-64 bg-gray-300 rounded-sm overflow-hidden relative">
               <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                alt="Map Background" 
                className="w-full h-full object-cover grayscale opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-white/90 px-6 py-3 shadow-lg font-bold text-cafe-black rounded-sm backdrop-blur-sm">Google Map</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 md:p-12 shadow-xl rounded-sm border-t-4 border-cafe-accent">
            <h2 className="text-xl font-serif font-bold text-cafe-black mb-2">お問い合わせ</h2>
            <p className="text-gray-500 mb-8 font-light text-sm">ご予約、イベント、取材等のご依頼はこちらから。</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-cafe-accent focus:border-cafe-accent outline-none transition-all bg-gray-50"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-cafe-accent focus:border-cafe-accent outline-none transition-all bg-gray-50"
                  placeholder="taro@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">お問い合わせ内容</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-cafe-accent focus:border-cafe-accent outline-none transition-all resize-none bg-gray-50"
                  placeholder="ご自由にご記入ください"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cafe-black text-white font-bold py-4 rounded-sm hover:bg-cafe-accent transition-colors duration-300 tracking-wider"
              >
                送 信
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;