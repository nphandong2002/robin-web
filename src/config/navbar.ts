import { paths } from "@/routes/paths";

export const navbarConfig = {
  minWidth: 200,
  heightLogo: 90,
};
export const navbarMenu: tnavbarMenu[] = [
  {
    title: "Trang chủ",
    iconOn: "material-symbols:home-outline",
    iconOff: "material-symbols:home",
    path: paths.home,
  },
];
export type tnavbarMenu = {
  title: string;
  iconOn?: string;
  iconOff?: string;
  path: string;
};
