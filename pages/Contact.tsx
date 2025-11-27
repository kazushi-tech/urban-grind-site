import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import contactBannerImage from '../images/gallery-cafe-exterior.webp';

const Contact: React.FC = () => {
  React.useEffect(() => {
    document.title = "アクセス・お問い合わせ | Kazushi's Urban Grind";
  }, []);

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
          alt="カフェの外観、アーバンビルの1階" 
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
            {/* Store Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-cafe-black mb-6">店舗情報</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-cafe-accent shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cafe-black">住所</h4>
                    <p className="text-gray-600 font-light">
                      〒673-0891<br/>
                      兵庫県明石市大明石町1-1-1<br/>
                      アーバンビル 1F
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-cafe-accent shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cafe-black">電話番号</h4>
                    <p className="text-gray-600 font-light">078-000-1234</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-cafe-accent shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cafe-black">メール</h4>
                    <p className="text-gray-600 font-light">info@kazushis-urban-grind.jp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-cafe-black mb-6">営業時間</h2>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-cafe-accent shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-600 font-light">平日: 8:00 - 20:00</p>
                  <p className="text-gray-600 font-light">土日祝: 9:00 - 21:00</p>
                  <p className="text-gray-500 text-sm mt-1">※不定休</p>
                </div>
              </div>
            </div>

            {/* Access */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-cafe-black mb-6">アクセス</h2>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                <strong className="text-cafe-black">JR明石駅</strong>（JR神戸線・山陽電鉄）より徒歩約4～5分。<br/>
                駅前の賁わいを抜け、静かな裏通りに面した場所にございます。<br/>
                ショッピングの合間や、お仕事帰りにぜひお立ち寄りください。
              </p>
              
              <div className="w-full h-64 bg-gray-300 rounded-sm overflow-hidden relative mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.596964434686!2d134.9922753762963!3d34.64629798379655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35552eb321606709%3A0x628042456046460!2sAkashi%20Station!5e0!3m2!1sen!2sjp!4v1709820000000!5m2!1sen!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
              <a 
                href="https://www.google.com/maps/search/JR%E6%98%8E%E7%9F%B3%E9%A7%85/@34.6462979,134.9922753,17z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cafe-accent hover:text-cafe-black transition-colors text-sm font-medium inline-flex items-center gap-1"
              >
                Googleマップで開く <ArrowRight className="h-4 w-4" />
              </a>
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
                送信する
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;