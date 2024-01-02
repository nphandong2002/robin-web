'use client';

import { RouterLink } from '@/routes/components';
import { paths } from '@/routes/paths';
import { Box, Link, Stack } from '@mui/material';
import { useMemo, useState } from 'react';
import Draggable, { DraggableData } from 'react-draggable';
import { Pacifico } from 'next/font/google';
import NavbarMenu from './navbar-menu';
import { navbarConfig } from '@/config/navbar';
const meos = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

function Navbar() {
  //dragg
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const bounds = { left: navbarConfig.minWidth + navbarConfig.minWidthDrag };
  const widthNarbar = useMemo(() => {
    let minWidth = navbarConfig.minWidth;
    position.x > 0 && (minWidth = position.x);
    return minWidth + navbarConfig.minWidthDrag;
  }, [position]);
  const trackPos = (data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  };
  return (
    <Stack direction="row">
      <Box
        className={'flex flex-col h-screen border-r-2'}
        sx={{
          width: `${widthNarbar}px`,
        }}
      >
        <Link
          component={RouterLink}
          href={paths.private.home}
          underline="none"
          style={{
            ...meos.style,
            fontWeight: 500,
            height: navbarConfig.heightLogo,
          }}
          className="text-[1.5rem] text-center flex justify-center items-center"
        >
          Robin Web
        </Link>
        <NavbarMenu />
      </Box>
      <Draggable
        bounds={bounds}
        axis="x"
        onDrag={(e, data) => trackPos(data)}
        defaultPosition={{ x: navbarConfig.minWidth, y: 0 }}
      >
        <Box
          sx={{ width: navbarConfig.minWidthDrag }}
          className="h-screen cursor-ew-resize border-r-1 absolute"
        ></Box>
      </Draggable>
    </Stack>
  );
}

export default Navbar;
