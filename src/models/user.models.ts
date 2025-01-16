export interface IUser {
  firstName: string;
  lastName: string;
  emailAddress: string;
  initials: string;
  profilePic: string;
  isAdmin: boolean;
  userId: number;
  orgId: number;
  userApiKey: string;
  primaryUserApiKey: string;
  isPrimaryUser: boolean;
  headerInfo: HeaderInfo[];
}

interface HeaderInfo {
  productSwitcher?: ProductSwitcher;
  myAccount?: MyAccount;
  footer?: Footer;
}

interface ProductSwitcher {
  categories: Category[];
}

interface Category {
  name: string;
  active: boolean;
  logo: string;
  order: number;
  desc: string;
  products: Product[];
}

interface Product {
  name: string;
  icon: string;
  link: string;
  active: boolean;
  logo: string;
  order: number;
}

interface MyAccount {
  license: License;
  settings: Setting[];
  profile: Profile;
  usage: Usage;
  invoice: Invoice;
  issueTrackerCount: number;
}

interface License {
  expiryDate: string;
  expiryAfterQuarter: boolean;
  expiryDatePostFixString: string;
  subtitle: string;
  showExpiryDate: boolean;
  title: string;
  upgradeLink: boolean;
  currentLicenseExpiryDays: number;
  url: string;
  expiryBeforeTwoMonth: boolean;
}

interface Setting {
  canDisplay: boolean;
  displayIcon: boolean;
  icon?: string;
  title: string;
  betaIconHTML: string;
  url: string;
}

interface Profile {
  sentimentIndustry: string;
  profilePicture: string;
  initials: string;
  subtitle: string;
  companyName: string;
  title: string;
  url: string;
}

interface Usage {
  collectedResponseCount: string;
  displayResponseProgressBar: boolean;
  title: string;
  url: string;
  responseCountPercentage: number;
}

interface Invoice {
  size: number;
  title: string;
  url: string;
}

interface Footer {
  canShowPerformanceMonitor: boolean;
  appName: string;
  evalOrFreeLicence: boolean;
  livePersonURL: string;
  licenseName: string;
}
