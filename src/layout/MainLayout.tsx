import { AppRoute } from "../AppRoutes";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex h-screen w-full">
        <Sidebar />
        <AppRoute />
      </div>
    </div>
  );
};
