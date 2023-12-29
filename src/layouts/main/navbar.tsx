'use client';

import { configRoot } from '@/config';
import { RouterLink } from '@/routes/components';
import { paths } from '@/routes/paths';
import { Box, Link, Stack } from '@mui/material';
import { useMemo, useState } from 'react';
import Draggable, { DraggableData } from 'react-draggable';

function Navbar() {
  console.log('render');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const widthNarbar = useMemo(() => {
    let minWidth = configRoot.navbarConfig.minWidth;
    position.x > 0 && (minWidth = position.x + 20);
    return minWidth;
  }, [position]);
  const trackPos = (data: DraggableData) => {
    console.log(data.x, widthNarbar);

    setPosition({ x: data.x, y: data.y });
  };
  return (
    <>
      <Box
        className={'flex flex-col h-screen '}
        sx={{
          width: `${widthNarbar}px`,
        }}
      >
        <Link component={RouterLink} href={paths.home}>
          Robin Web
        </Link>
      </Box>
      <Draggable
        axis="x"
        onDrag={(e, data) => trackPos(data)}
        defaultPosition={{ x: configRoot.navbarConfig.minWidth - 20, y: 0 }}
      >
        <Box className="h-screen w-[20px] cursor-ew-resize border border-r-1 absolute"></Box>
      </Draggable>
    </>
  );
}

export default Navbar;
