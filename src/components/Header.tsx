import Image from "next/image";
import Logo from "../../public/logo.png";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { TfiTime } from "react-icons/tfi";

import { Flex, Text } from "@radix-ui/themes";

const items = [
  {
    id: 1,
    icon: BsTelephone,
    title: "9852068761, 9803959648",
    details: "merogharjaga2079@gmail.com",
  },
  {
    id: 2,
    icon: IoLocationOutline,
    title: "Itahari-6, Sunsari",
    details: "Itahari Chok, Western Line",
  },
  {
    id: 3,
    icon: TfiTime,
    title: "9 am to 6 pm",
    details: "Sunday to Friday",
  },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between px-56">
      <Image src={Logo} alt="Logo" />
      <Flex>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex items-center gap-5 px-4">
              <Icon className="h-8 w-8 text-green-900" />
              <Flex direction="column">
                <Text weight="bold" className="text-green-900">
                  {item.title}
                </Text>
                <Text weight="light" className="text-green-900">
                  {item.details}
                </Text>
              </Flex>
            </div>
          );
        })}
      </Flex>
    </div>
  );
};

export default Header;
