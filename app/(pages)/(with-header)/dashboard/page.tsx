"use client";

import { Box, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Inbox Cleanse",
  description:
    "Take control of your inbox. Unsubscribe from unwanted emails with ease and keep your inbox clean and organized.",
};

export default function DashboardPage() {
  return (
    <Box>
      <Typography children="Dashboard" variant="h4" gutterBottom />
    </Box>
  );
}
