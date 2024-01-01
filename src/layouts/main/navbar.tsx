"use client";

import { configRoot } from "@/config";
import { RouterLink } from "@/routes/components";
import { paths } from "@/routes/paths";
import { Box, Link, Stack } from "@mui/material";
import { useMemo, useState } from "react";
import Draggable, { DraggableData } from "react-draggable";
import { Pacifico } from "next/font/google";
import NavbarMenu from "./navbar-menu";
const meos = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

function Navbar() {
  //dragg
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const bounds = { left: configRoot.navbarConfig.minWidth + configRoot.navbarConfig.minWidthDrag };
  const widthNarbar = useMemo(() => {
    let minWidth = configRoot.navbarConfig.minWidth;
    position.x > 0 && (minWidth = position.x);
    return minWidth + configRoot.navbarConfig.minWidthDrag;
  }, [position]);
  const trackPos = (data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  };
  return (
    <Stack direction="row">
      <Box
        className={"flex flex-col h-screen border-r-2"}
        sx={{
          width: `${widthNarbar}px`,
        }}
      >
        <Link
          component={RouterLink}
          href={paths.home}
          underline="none"
          style={{
            ...meos.style,
            fontWeight: 500,
            height: configRoot.navbarConfig.heightLogo,
          }}
          className="text-[1.5rem] text-center flex justify-center items-center"
        >
          Robin Web
        </Link>
        <NavbarMenu />
      </Box>
      <Draggable bounds={bounds} axis="x" onDrag={(e, data) => trackPos(data)} defaultPosition={{ x: configRoot.navbarConfig.minWidth, y: 0 }}>
        <div className={`h-screen w-[${configRoot.navbarConfig.minWidthDrag}px] cursor-ew-resize border-r-1 absolute`}></div>
      </Draggable>
    </Stack>
  );
}

export default Navbar;
