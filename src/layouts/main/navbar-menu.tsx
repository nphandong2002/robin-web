import { configRoot } from "@/config";
import { tnavbarMenu } from "@/config/navbar";
import { RouterLink } from "@/routes/components";
import { usePathname } from "@/routes/hooks";
import { Box, Link, ListItemButton, Stack } from "@mui/material";

function NavbarMenu() {
  const lstMenu = configRoot.navbarMenu;
  const active = (path: string) => {
    const pathname = usePathname();

    const checkPath = path.startsWith("#");

    const currentPath = path === "/" ? "/" : `${path}/`;
    return !checkPath && pathname === currentPath;
  };

  const renderContent = ({ title, iconOn, iconOff }: tnavbarMenu, active: boolean) => {
    const IconOn = iconOn || iconOff;
    const IconOff = iconOff || iconOn;
    return (
      <ListItemButton>
        {active}
        {title}
      </ListItemButton>
    );
  };
  return (
    <Stack spacing={0.5}>
      {lstMenu.map((menu) => (
        <Link
          component={RouterLink}
          href={menu.path}
          underline="none"
          sx={{
            width: 1,
          }}
        >
          {menu.title}
        </Link>
      ))}
    </Stack>
  );
}

export default NavbarMenu;
