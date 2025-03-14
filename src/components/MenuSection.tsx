
import { MenuItem as MenuItemType } from "@/data/menuData";
import MenuItem from "./MenuItem";

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <div className="menu-section relative my-8">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <div className="cloud-title">
          <span className="relative z-10 font-bold text-shinchan-red text-2xl">{title}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-10">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
