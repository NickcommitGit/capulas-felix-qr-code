import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MenuContent = () => {
  const fastFoodVeg = [
    { name: "Pizza Corn (8 inch)", price: "120₹" },
    { name: "Corn & Onion Pizza (8 inch)", price: "130₹" },
    { name: "Paneer Pizza (8 inch)", price: "150₹" },
    { name: "Sandwich (Vegies)", price: "55₹" },
    { name: "Cheese Sandwich", price: "70₹" },
    { name: "French Fries", price: "40₹" },
    { name: "Potato Chilli", price: "50/100₹" },
    { name: "Paneer Chilli", price: "70/140₹" },
    { name: "Burger", price: "55₹" },
    { name: "Cheese Burger", price: "65₹" },
    { name: "Veg Chowmin", price: "40/70₹" },
    { name: "Crispy Paneer Pakoda (5/10 pcs.)", price: "60/120₹" },
    { name: "Paneer Pakoda (5/10 pcs.)", price: "50/100₹" },
    { name: "Maggie (Masala)", price: "50₹" },
    { name: "Sweet corn (Masala)", price: "50₹" },
    { name: "Crispy momos (5/10 pcs.)", price: "50/100₹" },
    { name: "Mushroom chilli", price: "140₹" },
    { name: "White Sauce Pasta", price: "110₹" },
    { name: "Red Sauce Pasta", price: "55/110₹" },
    { name: "Momos Chilly (5/10 pcs.)", price: "70/140₹" },
    { name: "Fried Momos (5/10 pcs.)", price: "40/80₹" },
    { name: "Chole Bhature", price: "50₹" },
    { name: "Veg Roll", price: "50₹" },
    { name: "Paneer Roll", price: "70₹" },
    { name: "Paneer Samosa", price: "30₹/per Piece" }
  ];

  const fastFoodNonVeg = [
    { name: "Chicken Roll", price: "80₹" },
    { name: "Chicekn Roll single/Double Egg", price: "90/100₹" },
    { name: "Egg Roll Single/Double Egg", price: "60/70₹" },
    { name: "Chicken Chowmin", price: "70/140₹" },
    { name: "Chicken Pakoda", price: "70/140₹" },
    { name: "Crispy Chicken Pakoda", price: "90/180₹" },
    { name: "Kabab", price: "70/140₹" },
    { name: "Chicken fried rice", price: "80/140₹" },
    { name: "Chicken lolipop", price: "60₹" }
  ];

  const mealVeg = [
    { name: "Paneer Masala", price: "70/140₹" },
    { name: "Chola", price: "40/60₹" },
    { name: "Tadka", price: "50/70₹" },
    { name: "Mushroom Masala", price: "90/180₹" },
    { name: "Paneer Butter Masala", price: "90/180₹" },
    { name: "Mushroom Fried Rice", price: "80/140₹" },
    { name: "Paneer Fried Rice", price: "80/140₹" },
    { name: "Veg Thali", price: "60₹" }
  ];

  const mealNonVeg = [
    { name: "Chicenk Masala", price: "40/80₹" },
    { name: "Butter Chicken", price: "80/120₹" },
    { name: "Chicken Chawal", price: "60/100₹" },
    { name: "Chicken Biryani", price: "70/120₹" }
  ];

  const chapati = [
    { name: "Tawa Roti", price: "8₹" },
    { name: "Butter Tawa Roti", price: "12₹" }
  ];

  const hotDrinks = [
    { name: "Instant Coffee (Regular/Hard-5₹)", price: "25/50₹" },
    { name: "Beans Coffee (Regular/Hard-5₹)", price: "30/50₹" },
    { name: "Black coffee (Regular/Hard-5₹)", price: "25/50₹" },
    { name: "Espresso (Regular/Hard-5₹)", price: "40/60₹" },
    { name: "Cappuccino (Regular/Hard-5₹)", price: "55/85₹" },
    { name: "Mocha (Regular/Hard-5₹)", price: "60/90₹" },
    { name: "Tea (Regular/Hard-5₹)", price: "25₹" },
    { name: "Green Tea", price: "25₹" },
    { name: "Tomato Soup", price: "60₹" },
    { name: "Corn soup", price: "65₹" },
    { name: "Veg soup", price: "70₹" }
  ];

  const coldBeverages = [
    { name: "Cold Coffee (Regular/Hard-10)", price: "80₹" },
    { name: "Lemon drink", price: "35₹" },
    { name: "Milk shake", price: "90₹" },
    { name: "Milk shake (Strawberry)", price: "95₹" },
    { name: "Milk shake (Choclate)", price: "95₹" },
    { name: "Masala Cold drinks", price: "40₹" },
    { name: "Masala Chach", price: "20₹" }
  ];

  const MenuSection = ({ title, items, bgColor }: { title: string; items: any[]; bgColor: string }) => (
    <Card className="shadow-xl border-0 bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-md mb-8 overflow-hidden relative">
      {/* Subtle food image background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 via-orange-100/10 to-amber-100/20"></div>
      
      {/* Coffee stain effects */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-amber-200/30 rounded-full"></div>
      <div className="absolute bottom-6 left-6 w-6 h-6 bg-orange-200/20 rounded-full"></div>
      
      <CardHeader className={`${bgColor} text-white relative z-10`}>
        <CardTitle className="text-2xl font-bold text-center tracking-wide">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 relative z-10">
        <div className="grid gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-3 px-2 border-b border-amber-200/50 last:border-b-0 hover:bg-amber-100/30 transition-colors duration-200 rounded-lg">
              <span className="text-amber-900 font-medium text-lg">{item.name}</span>
              <span className="text-orange-700 font-bold text-xl bg-gradient-to-r from-orange-100 to-amber-100 px-3 py-1 rounded-full border border-orange-200">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 relative">
      {/* Decorative coffee elements */}
      <div className="absolute top-20 left-8 w-12 h-12 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-full blur-sm"></div>
      <div className="absolute bottom-32 right-12 w-16 h-16 bg-gradient-to-br from-yellow-600/20 to-amber-600/20 rounded-full blur-sm"></div>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <MenuSection title="🌿 Fast Food Items (Veg)" items={fastFoodVeg} bgColor="bg-gradient-to-r from-green-700 to-green-600" />
          <MenuSection title="🌿 Meal (Veg)" items={mealVeg} bgColor="bg-gradient-to-r from-green-700 to-green-600" />
          <MenuSection title="☕ Hot Drinks" items={hotDrinks} bgColor="bg-gradient-to-r from-amber-700 to-orange-700" />
        </div>
        <div className="space-y-6">
          <MenuSection title="🍗 Fast Food Items (Non-Veg)" items={fastFoodNonVeg} bgColor="bg-gradient-to-r from-red-700 to-red-600" />
          <MenuSection title="🍗 Meal (Non-Veg)" items={mealNonVeg} bgColor="bg-gradient-to-r from-red-700 to-red-600" />
          <MenuSection title="🍞 Chapati" items={chapati} bgColor="bg-gradient-to-r from-yellow-700 to-amber-700" />
          <MenuSection title="🥤 Cold Beverages" items={coldBeverages} bgColor="bg-gradient-to-r from-blue-700 to-cyan-600" />
        </div>
      </div>
    </main>
  );
};

export default MenuContent;
