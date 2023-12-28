"use client";

import Scrollbar from "@/components/scrollbar";
import { RouterLink } from "@/routes/components";
import { paths } from "@/routes/paths";
import { Box, Link } from "@mui/material";

function Navbar() {
  return (
    <Box className="flex flex-col">
      <Link component={RouterLink} href={paths.home}>
        Robin Web
      </Link>
    </Box>
  );
}

export default Navbar;
