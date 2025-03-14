
import { useState, useEffect } from 'react';
import { menuItems } from '@/data/menuData';
import MenuSection from '@/components/MenuSection';
import Banner from '@/components/Banner';
import PromoMessage from '@/components/PromoMessage';
import ContactSection from '@/components/ContactSection';
import Character from '@/components/Character';

const Index = () => {
  const milkshakes = menuItems.filter(item => item.category === 'milkshakes');
  const specials = menuItems.filter(item => item.category === 'specials');
  const combos = menuItems.filter(item => item.category === 'combos');
  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a slight delay to ensure smooth animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 py-8 relative">
        {/* Characters */}
        <Character 
          imageUrl="/characters/shinchan1.png" 
          alt="Shinchan"
          className="w-24 h-24 bottom-10 left-5 z-20 hidden md:block" 
        />
        <Character 
          imageUrl="/characters/shinchan2.png" 
          alt="Shinchan"
          className="w-24 h-24 top-20 right-10 z-20 hidden md:block" 
        />
        
        <Banner />
        
        <MenuSection title="MILKSHAKES" items={milkshakes} />
        
        <div className="flex flex-col md:flex-row gap-8 my-8">
          <div className="flex-1">
            <MenuSection title="SPECIALS" items={specials} />
          </div>
          <div className="w-full md:w-64 flex flex-col justify-center space-y-6">
            <PromoMessage />
            <ContactSection />
          </div>
        </div>
        
        <MenuSection title="COMBOS" items={combos} />
        
        <div className="text-center py-8">
          <div className="inline-block bg-white rounded-full px-8 py-3 border-2 border-blue-300">
            <h3 className="text-shinchan-red font-bold text-2xl">THANK YOU</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
