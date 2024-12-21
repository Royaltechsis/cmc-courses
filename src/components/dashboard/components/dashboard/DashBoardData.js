import affiliateDashboardIcon from "../../../../assets/images/affiliate/affiliatedashboard.png";
import helpCenterIcon from "../../../../assets/images/affiliate/affiliatehelpcenter.png";
import profileIcon from "../../../../assets/images/affiliate/affiliateprofile.png";
import affiliateSalesIcon from "../../../../assets/images/affiliate/affiliatesales.png";
import telegramIcon from "../../../../assets/images/affiliate/affiliatetelegram.png";
import whatsappIcon from "../../../../assets/images/affiliate/affiliatewhatsapp.png";
import withdrawalsIcon from "../../../../assets/images/affiliate/affiliatewithdrawal.png";

export const sidebarItems = [
  {
    icon: affiliateDashboardIcon,
    text: "Affiliate Dashboard",
    path: "/dashboard",
  },
  { icon: affiliateSalesIcon, text: "Affiliate Sales", path: "/sales" },
  { icon: withdrawalsIcon, text: "Withdrawals", path: "/withdrawals" },
  { icon: profileIcon, text: "Profile", path: "/affiliate-profile" },
];

export const communityItems = [
  { icon: whatsappIcon, text: "Join Whatsapp", path: "/whatsapp" },
  { icon: telegramIcon, text: "Join Telegram", path: "/telegram" },
  { icon: helpCenterIcon, text: "Help Center", path: "/help-center" },
];

export const currencyOptions = [
  { value: "USD", label: "$ USD" },
  { value: "EUR", label: "€ EUR" },
  { value: "GHS", label: "₵ GHS" },
  { value: "NGN", label: "₦ NGN" },
  { value: "ZAR", label: "R ZAR" },
  { value: "KES", label: "Ksh KES" },
  { value: "FRANC", label: "XAF Franc" },
];
