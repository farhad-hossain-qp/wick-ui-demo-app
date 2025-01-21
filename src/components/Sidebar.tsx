import { Link } from "react-router-dom";

const sideMenu = [
  { key: "pathos-ai", route: "/", name: "Pathos AI" },
  { key: "bi-dashboard", route: "/bi-dashboard", name: "Bi Dashboard" },
  { key: "survey", route: "/survey", name: "Survey" },
  { key: "user", route: "/user", name: "User" },
];

export const Sidebar: React.FC = () => {
  return (
    <ul className="flex w-[200px] flex-col list-none min-h-full bg-gray-200 pt-2">
      {sideMenu.map((item) => (
        <Link to={item.route} key={item.key}>
          <li className="px-3 py-2.5 hover:bg-gray-300 w-full transition duration-200 cursor-pointer">
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
