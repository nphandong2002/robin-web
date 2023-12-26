import { Box } from "@mui/material";

import Header from "./header";
import Navbar from "./navbar";
import React from "react";

function LayoutMain({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box className="flex">
        <Navbar />
        <Box
          component="main"
          sx={{
            minHeight: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}

export default LayoutMain;
