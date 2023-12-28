import { memo, forwardRef } from "react";

import { Box } from "@mui/material";
import { Theme, SxProps } from "@mui/material/styles";

export interface ScrollbarProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>(({ children, sx, ...other }, ref) => {
  return (
    <Box ref={ref} sx={{ overflow: "auto", ...sx }} {...other}>
      {children}
    </Box>
  );
});

export default memo(Scrollbar);
