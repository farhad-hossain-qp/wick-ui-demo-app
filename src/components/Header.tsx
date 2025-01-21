import { WuAppHeader } from "@npm-questionpro/wick-ui-lib";
import useUserData from "../hooks/useUser";

export const Header: React.FC = () => {
  const { user } = useUserData();

  if (!user?.headerInfo[0].productSwitcher) {
    return null;
  }

  return (
    <WuAppHeader
      productName="Workforce"
      categories={user.headerInfo[0].productSwitcher.categories}
      user={user?.headerInfo[1].myAccount}
      breadcrumbs={[
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Components",
          link: "/",
          onClick: (): void => {
            console.log("click breadcrumb");
          },
        },
        {
          label: "Breadcrumb",
          link: "/",
        },
      ]}
      onLogout={() => console.log("Logout clicked")}
      homeLink="/home"
      dir="ltr"
      brandColor={{ base: "#0090d1", hover: "#22b6f9" }}
    >
      <div className="flex items-center justify-end">
        <span>Custom Content</span>
      </div>
    </WuAppHeader>
  );
};
