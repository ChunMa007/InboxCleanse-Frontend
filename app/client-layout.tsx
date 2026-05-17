"use client";

import Providers from "./providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { SnackbarProvider } from "@/app/lib/Context/Snackbar";
import { SessionProvider } from "next-auth/react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <SnackbarProvider>
        <SessionProvider>
          <Providers>{children}</Providers>
        </SessionProvider>
      </SnackbarProvider>
    </AppRouterCacheProvider>
  );
}
