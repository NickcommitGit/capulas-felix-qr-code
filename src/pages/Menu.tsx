
import MenuHeader from '@/components/MenuHeader';
import MenuContent from '@/components/MenuContent';
import MenuFooter from '@/components/MenuFooter';

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative">
      {/* Coffee bean pattern background */}
      <div className="absolute inset-0 opacity-5 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23654321' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Coffee cup steam effect */}
      <div className="absolute top-0 left-1/4 w-1 h-32 bg-gradient-to-t from-transparent via-amber-200 to-transparent opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-1/3 w-1 h-40 bg-gradient-to-t from-transparent via-orange-200 to-transparent opacity-20 animate-pulse delay-300"></div>
      
      <div className="relative z-10">
        <MenuHeader />
        <MenuContent />
        <MenuFooter />
      </div>
    </div>
  );
};

export default Menu;
