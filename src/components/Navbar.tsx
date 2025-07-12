import { Text } from "@radix-ui/themes";

const navItems = [
  {
    id: 1,
    title: "HOME",
  },
  {
    id: 2,
    title: "ON SALE",
  },
  {
    id: 3,
    title: "ON RENT",
  },
  {
    id: 4,
    title: "ABOUT US",
  },
  {
    id: 5,
    title: "CONTACT US",
  },
  {
    id: 6,
    title: "HELP",
  },
];

const Navbar = () => {
  return (
    <div className="bg-green-900 px-56 my-5 text-white">
      <div className="flex items-center justify-between">
        <div className="flex">
          {navItems.map((item) => (
            <Text
              className="border-green-800 border-1 p-4 cursor-pointer hover:bg-green-800 hover:text-green-500 font-bold"
              key={item.id}
            >
              {item.title}
            </Text>
          ))}
        </div>
        <div className="flex gap-4 font-bold">
          <Text className="cursor-pointer hover:text-green-500">Login</Text>
          <Text className="cursor-pointer hover:text-green-500">Register</Text>
          <Text className="cursor-pointer hover:text-green-500">
            Create a Listing
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
