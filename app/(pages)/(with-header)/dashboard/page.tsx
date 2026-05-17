"use client";

import { Box, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
export default function DashboardPage() {
  const { data: session } = useSession();
  console.log("Session data on Dashboard:", session);
  return (
    <Box>
      <Typography children="Dashboard" variant="h4" gutterBottom />
    </Box>
  );
}
