import { IWuAppHeaderAccount } from "@npm-questionpro/wick-ui-lib";

interface Product {
  name: string;
  icon: string;
  link: string;
  active: boolean;
  logo: string;
  order: number;
}

interface Category {
  name: string;
  active: boolean;
  logo: string;
  order: number;
  desc: string;
  products: Product[];
}

interface ProductSwitcher {
  categories: Category[];
}

export interface IMyAccount {
  sentimentIndustry: string;
  profilePicture: string;
  initials: string;
  subtitle: string;
  companyName: string;
  title: string;
  url: string;
}

interface HeaderInfo {
  productSwitcher: ProductSwitcher;
  myAccount: IMyAccount;
}

export interface DataFromApi {
  headerInfo: HeaderInfo[];
}

export const accountData: IWuAppHeaderAccount = {
  profile: {
    title: "Mr.",
    subtitle: "Senior Developer",
    companyName: "Tech Innovations Inc.",
    profilePicture: "https://picsum.photos/200/300",
    initials: "JD",
    sentimentIndustry: "Technology",
    url: "https://example.com/profile",
  },
  license: {
    expiryDate: "2025-12-31",
    expiryAfterQuarter: true,
    expiryDatePostFixString: "Expires",
    subtitle: "Pro License",
    showExpiryDate: true,
    title: "License Expiry",
    upgradeLink: true,
    currentLicenseExpiryDays: 90,
    url: "https://example.com/upgrade-license",
    expiryBeforeTwoMonth: false,
  },
  settings: [
    {
      canDisplay: true,
      displayIcon: true,
      icon: "https://example.com/settings-icon.png",
      title: "My Account",
      betaIconHTML: "<svg>...</svg>",
      url: "https://example.com/settings",
    },
    {
      canDisplay: true,
      displayIcon: false,
      title: "Organization",
      betaIconHTML: "<svg>...</svg>",
      url: "https://example.com/privacy-settings",
    },
    {
      canDisplay: true,
      displayIcon: false,
      title: "Compliance",
      betaIconHTML: "<svg>...</svg>",
      url: "https://example.com/privacy-settings",
    },
    {
      canDisplay: true,
      displayIcon: false,
      title: "Issue Tracker",
      betaIconHTML: "<svg>...</svg>",
      url: "https://example.com/privacy-settings",
    },
    {
      canDisplay: true,
      displayIcon: false,
      title: "Global Settings",
      betaIconHTML: "<svg>...</svg>",
      url: "https://example.com/privacy-settings",
    },
  ],
  usage: {
    collectedResponseCount: "245",
    displayResponseProgressBar: true,
    title: "Response Progress",
    url: "https://example.com/usage",
    responseCountPercentage: 75,
  },
  invoice: {
    size: 1.5,
    title: "Monthly Subscription",
    url: "https://example.com/invoice",
  },
  issueTrackerCount: 5,
};

export const DataFromApi: DataFromApi = {
  headerInfo: [
    {
      productSwitcher: {
        categories: [
          {
            name: "Research Suite",
            active: true,
            logo: "https://www.questionpro.com/images/appnavigation/research-suite.svg",
            order: 1,
            desc: "",
            products: [
              {
                name: "Surveys",
                icon: "e308",
                link: "https://www.questionpro.com/a/listSurveys.do",
                active: true,
                logo: "https://www.questionpro.com/images/appnavigation/survey-product.png",
                order: 1,
              },
              {
                name: "Communities",
                icon: "e314",
                link: "https://www.questionpro.com/a/showPanelManagement.do",
                active: true,
                logo: "https://www.questionpro.com/images/appnavigation/communities-product.png",
                order: 2,
              },
            ],
          },
          {
            name: "Customer Experience",
            active: true,
            logo: "https://www.questionpro.com/images/appnavigation/customer-experience.svg",
            order: 2,
            desc: "",
            products: [
              {
                name: "CX",
                icon: "e313",
                link: "https://www.questionpro.com/a/showCXFeedback.do",
                active: true,
                logo: "https://www.questionpro.com/images/appnavigation/cx-product.png",
                order: 1,
              },
              // Add other products here...
            ],
          },
          // Add other categories here...
        ],
      },

      myAccount: {
        sentimentIndustry: "automotive",
        profilePicture: "https://picsum.photos/200/300",
        initials: "MI",
        subtitle: "saiful.islam@questionpro.com",
        companyName: "Untitled - Company Name",
        title: "Md. Saiful Islam",
        url: "https://www.questionpro.com/a/showUpgradeUser.do?payment=creditCardUpdate",
      },
    },
  ],
};
