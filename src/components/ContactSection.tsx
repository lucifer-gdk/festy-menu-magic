
import { contactInfo } from "@/data/menuData";

const ContactSection = () => {
  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-4 border-2 border-blue-300">
      <h3 className="font-bold text-shinchan-red text-xl mb-2">CONTACT US</h3>
      <div className="flex flex-col">
        <span>{contactInfo.phone1}</span>
        <span>{contactInfo.phone2}</span>
        <span>{contactInfo.phone3}</span>
        <span>{contactInfo.phone4}</span>
      </div>
    </div>
  );
};

export default ContactSection;
