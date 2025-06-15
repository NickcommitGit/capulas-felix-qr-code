
import MenuHeader from '@/components/MenuHeader';
import MenuContent from '@/components/MenuContent';
import MenuFooter from '@/components/MenuFooter';

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <MenuHeader />
      <MenuContent />
      <MenuFooter />
    </div>
  );
};

export default Menu;
