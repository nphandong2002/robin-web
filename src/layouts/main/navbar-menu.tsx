import Iconify from "@/components/iconify";
import { configRoot } from "@/config";
import { RouterLink } from "@/routes/components";
import { usePathname } from "@/routes/hooks";
import { paths } from "@/routes/paths";
import { alpha, Link, ListItemButton, Stack, useTheme } from "@mui/material";
import { tnavbarMenu } from "./type";

const navbarMenu: tnavbarMenu[] = [
  {
    title: "Trang chủ",
    iconOn: <Iconify icon="material-symbols:home" />,
    iconOff: <Iconify icon="material-symbols:home-outline" />,
    path: paths.home,
  },
  {
    title: "Tin nhắn",
    iconOn: <Iconify icon="mdi:message" />,
    iconOff: <Iconify icon="mdi:message-outline" />,
    path: paths.message,
  },
];

function NavbarMenu() {
  const theme = useTheme();
  const active = (path: string) => {
    const pathname = usePathname();

    const checkPath = path.startsWith("#");

    const currentPath = path === "/" ? "/" : `${path}`;
    return !checkPath && pathname === currentPath;
  };

  const renderContent = ({ title, iconOn, iconOff }: tnavbarMenu, active: boolean) => {
    const IconOn = iconOn || iconOff;
    const IconOff = iconOff || iconOn;

    return (
      <ListItemButton
        sx={{
          color: theme.palette.text.secondary,
          ...(active && {
            color: theme.palette.mode === "light" ? theme.palette.primary.main : theme.palette.primary.light,
            backgroundColor: alpha(theme.palette.primary.main, 0.3),
            "&:hover": {
              backgroundColor: alpha(theme.palette.primary.main, 0.16),
            },
          }),
        }}
      >
        {active && IconOn && IconOn}
        {!active && IconOff && IconOff}
        {title}
      </ListItemButton>
    );
  };
  return (
    <Stack spacing={0.5}>
      {navbarMenu.map((menu: tnavbarMenu) => (
        <Link
          key={"navbar" + menu.path}
          component={RouterLink}
          href={menu.path}
          underline="none"
          sx={{
            width: 1,
          }}
        >
          {renderContent(menu, active(menu.path))}
        </Link>
      ))}
    </Stack>
  );
}

export default NavbarMenu;
