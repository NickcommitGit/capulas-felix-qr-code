
import { Coffee } from 'lucide-react';

const MenuHeader = () => {
  return (
    <header className="bg-gradient-to-r from-amber-900 via-orange-800 to-yellow-800 text-white py-12 shadow-2xl relative overflow-hidden">
      {/* Coffee beans background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-10 w-8 h-12 bg-amber-600 rounded-full transform rotate-12"></div>
        <div className="absolute top-16 right-20 w-6 h-9 bg-orange-700 rounded-full transform -rotate-45"></div>
        <div className="absolute bottom-8 left-1/4 w-10 h-14 bg-yellow-700 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-12 right-1/3 w-7 h-10 bg-amber-700 rounded-full transform -rotate-12"></div>
      </div>
      
      {/* Subtle coffee texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-4 shadow-lg border-4 border-amber-200">
            <Coffee className="h-16 w-16 text-amber-800" />
          </div>
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-wide text-amber-50 drop-shadow-lg">
              Capulas Felix
            </h1>
            <p className="text-2xl text-amber-100 mt-3 font-medium">
              Authentic Flavors • Fresh Ingredients • Cozy Atmosphere
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-red-700 to-red-600 px-8 py-4 rounded-xl shadow-lg border-2 border-red-500">
            <h2 className="text-3xl font-bold text-white tracking-wider">MENU</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;
