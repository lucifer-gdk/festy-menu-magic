
import { cn } from "@/lib/utils";

const Banner = () => {
  return (
    <div className="relative bg-white bg-opacity-90 p-6 rounded-lg border-4 border-shinchan-red mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">Shinchan</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-shinchan-red leading-tight">THE CHILL SPOT...</h2>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg border-2 border-white max-w-xs rotate-3 shadow-lg">
          <p className="text-lg md:text-xl font-bold">
            BUY NOW, BEFORE SHINCHAN DRINKS THE WHOLE STOCK!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
