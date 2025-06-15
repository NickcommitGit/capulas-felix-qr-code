
import { Coffee } from 'lucide-react';

const MenuHeader = () => {
  return (
    <header className="bg-gradient-to-r from-amber-800 to-orange-700 text-white py-8 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="bg-white rounded-full p-3">
            <Coffee className="h-12 w-12 text-amber-800" />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-wide">Capulas Felix</h1>
            <p className="text-xl text-amber-100 mt-2">Authentic Flavors • Fresh Ingredients</p>
          </div>
        </div>
        <div className="text-center">
          <div className="inline-block bg-red-600 px-6 py-3 rounded-lg">
            <h2 className="text-2xl font-bold">MENU</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;
