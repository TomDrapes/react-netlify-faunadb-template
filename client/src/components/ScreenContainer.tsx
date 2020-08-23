import React, { ReactNode } from "react";
import { Box } from "@material-ui/core";

interface Props {
  children: ReactNode;
}

export const ScreenContainer = ({ children }: Props) => (
  <Box display="flex" flex={1} bgcolor={"#fff"} boxSizing="border-box">
    {children}
  </Box>
);
