import React from 'react';
import menuHeaderImage from '../images/menu-lumen-latte.webp';

interface MenuItemProps {
  name: string;
  enName?: string;
  description: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, enName, description, price }) => (
  <div className="flex justify-between items-start mb-8 group border-b border-dashed border-gray-200 pb-4 last:border-0">
    <div className="pr-4">
      <h4 className="text-lg font-bold text-cafe-black group-hover:text-cafe-accent transition-colors font-serif">
        {name} <span className="text-xs text-gray-400 font-sans font-normal ml-2">{enName}</span>
      </h4>
      <p className="text-gray-500 text-sm mt-1 font-light">{description}</p>
    </div>
    <div className="text-lg font-medium text-cafe-black whitespace-nowrap font-serif">
      {price}
    </div>
  </div>
);

const Menu: React.FC = () => {
  React.useEffect(() => {
    document.title = "メニュー | Kazushi's Urban Grind";
  }, []);

  return (
    <div className="bg-cafe-cream min-h-screen pb-20">
      {/* Header Image */}
      <div className="relative h-[40vh] w-full mb-16">
        <img 
          src={menuHeaderImage}
          alt="ルーメンラテ、カフェのシグネチャードリンク" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <span className="text-cafe-accent uppercase tracking-widest text-sm font-semibold block mb-2">Our Offerings</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">Menu</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gray-500 font-light">税込価格にて表示しております</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 bg-white p-8 md:p-12 shadow-xl rounded-sm">
          {/* Coffee Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-8 border-b-2 border-cafe-accent/30 pb-2 text-cafe-black inline-block">Espresso & Coffee</h3>
            <MenuItem name="アメリカーノ" enName="Americano" description="オリジナルブレンドを使用" price="¥500" />
            <MenuItem name="カフェラテ" enName="Cafe Latte" description="濃厚なエスプレッソとミルクのハーモニー" price="¥600" />
            <MenuItem name="オーツミルクラテ" enName="Oat Latte" description="香ばしいオーツミルクを使用（植物性）" price="¥700" />
            <MenuItem name="ハンドドリップ" enName="Pour Over" description="本日のおすすめシングルオリジン" price="¥650" />
            <MenuItem name="コールドブリュー" enName="Cold Brew" description="24時間かけてじっくり水出し抽出" price="¥600" />
          </div>

          {/* Tea & Others */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-8 border-b-2 border-cafe-accent/30 pb-2 text-cafe-black inline-block">Tea & Others</h3>
            <MenuItem name="抹茶ラテ" enName="Matcha Latte" description="京都宇治の最高級抹茶を使用" price="¥700" />
            <MenuItem name="ほうじ茶ラテ" enName="Hojicha Latte" description="香ばしい香りとミルクの甘み" price="¥650" />
            <MenuItem name="自家製レモネード" enName="Lemonade" description="国産レモンとハーブのシロップ" price="¥600" />
            <MenuItem name="クラフトコーラ" enName="Craft Cola" description="スパイス香る大人のコーラ" price="¥650" />
          </div>

          {/* Food Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-8 border-b-2 border-cafe-accent/30 pb-2 text-cafe-black inline-block">Sweets</h3>
            <MenuItem name="クラシックプリン" enName="Classic Pudding" description="固めの食感とほろ苦いカラメル" price="¥550" />
            <MenuItem name="バスクチーズケーキ" enName="Basque Cheesecake" description="濃厚でクリーミーな味わい" price="¥650" />
            <MenuItem name="抹茶のテリーヌ" enName="Matcha Terrine" description="ホワイトチョコと抹茶の濃厚な口溶け" price="¥700" />
            <MenuItem name="本日のスコーン" enName="Daily Scone" description="自家製ジャムとクロテッドクリーム添え" price="¥450" />
          </div>

           {/* Toast & Light Meal */}
           <div>
            <h3 className="text-xl font-serif font-bold mb-8 border-b-2 border-cafe-accent/30 pb-2 text-cafe-black inline-block">Toast & Light Meal</h3>
            <MenuItem name="小倉バタートースト" enName="Ogura Toast" description="北海道産小豆と発酵バター" price="¥600" />
            <MenuItem name="アボカドトースト" enName="Avocado Toast" description="ライ麦パンと新鮮なアボカド" price="¥900" />
            <MenuItem name="厚切りピザトースト" enName="Pizza Toast" description="昔ながらの喫茶店の味" price="¥850" />
            <MenuItem name="たまごサンド" enName="Egg Sandwich" description="だし巻き卵の優しい味わい" price="¥800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;