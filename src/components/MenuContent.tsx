
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
    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm mb-8">
      <CardHeader className={`${bgColor} text-white`}>
        <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-3">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-800 font-medium">{item.name}</span>
              <span className="text-orange-600 font-bold text-lg">{item.price}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <MenuSection title="Fast Food Items (Veg)" items={fastFoodVeg} bgColor="bg-green-600" />
          <MenuSection title="Meal (Veg)" items={mealVeg} bgColor="bg-green-600" />
          <MenuSection title="Hot Drinks" items={hotDrinks} bgColor="bg-orange-600" />
        </div>
        <div>
          <MenuSection title="Fast Food Items (Non-Veg)" items={fastFoodNonVeg} bgColor="bg-red-600" />
          <MenuSection title="Meal (Non-Veg)" items={mealNonVeg} bgColor="bg-red-600" />
          <MenuSection title="Chapati" items={chapati} bgColor="bg-amber-600" />
          <MenuSection title="Cold Beverages" items={coldBeverages} bgColor="bg-blue-600" />
        </div>
      </div>
    </main>
  );
};

export default MenuContent;
