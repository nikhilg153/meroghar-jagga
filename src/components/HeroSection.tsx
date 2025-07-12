import Image from "next/image";
import CoverImage from "../../public/cover.jpg";
import { Text } from "@radix-ui/themes";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-5 gap-2 justify-center text-white absolute right-0 left-0">
        <Text className="text-6xl font-bold">मेरो घर जग्गा</Text>
        <Text className="text-2xl">
          हामीसँग जोडिनुहोस् र आफ्नो घरघडेरी विक्री गर्दा दिनुपर्ने कमिसनबाट
          मुक्ति पाउनुहोस् .
        </Text>
      </div>
      <div>
        <Image src={CoverImage} alt="cover" className="h-60" />
      </div>
    </div>
  );
};

export default HeroSection;
