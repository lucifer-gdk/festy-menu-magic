
import { cn } from "@/lib/utils";

interface CharacterProps {
  className?: string;
  imageUrl: string;
  alt: string;
}

const Character: React.FC<CharacterProps> = ({ className, imageUrl, alt }) => {
  return (
    <div className={cn("absolute", className)}>
      <img 
        src={imageUrl} 
        alt={alt} 
        className="w-full h-full object-contain animate-bounce-slow"
      />
    </div>
  );
};

export default Character;
