
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MenuItem as MenuItemType } from "@/data/menuData";

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 transform ${
        isHovered ? 'scale-105 shadow-lg' : ''
      } bg-white bg-opacity-80`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4 flex flex-col items-center">
        <div className="h-32 w-32 mb-3 flex items-center justify-center rounded-full overflow-hidden bg-shinchan-sky bg-opacity-20">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-contain p-2" 
          />
        </div>
        <h3 className="font-bold text-shinchan-red text-lg mb-1">{item.name}</h3>
        <p className="text-shinchan-red font-bold">₹{item.price}/-</p>
        {isHovered && item.description && (
          <p className="text-sm mt-2 text-gray-700">{item.description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
