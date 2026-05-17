// "use client";

// import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
// import { Alert } from "@mui/material";
// import { useState } from "react";

// interface SnackbarProps {
//   message: string;
//   severity?: "success" | "error" | "warning" | "info";
// }

// export default function SnackbarComponent({
//   message,
//   severity,
// }: SnackbarProps) {
//   const [snackbarOpen, setSnackbarOpen] = useState<boolean>(true);

//   const handleSnackbarClose = (
//     event: React.SyntheticEvent | Event,
//     reason?: SnackbarCloseReason,
//   ) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setSnackbarOpen((prev) => !prev);
//   };

//   return (
//     <Snackbar
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       open={snackbarOpen}
//       autoHideDuration={3000}
//       onClose={handleSnackbarClose}
//     >
//       <Alert severity={severity} variant="filled" sx={{ width: "100%" }}>
//         {message}
//       </Alert>
//     </Snackbar>
//   );
// }

"use client";

import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { Alert, Slide } from "@mui/material";
import React, { useState, createContext, useContext } from "react";
import { TransitionProps } from "@mui/material/transitions";

interface SnackbarContextType {
  openSnackbar: (
    message: string,
    severity?: "success" | "error" | "warning" | "info",
  ) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined,
);

function SlideTransition(props: any) {
  return <Slide {...props} direction="left" />;
}

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("info");
  const SNACKBAR_DURATION = 2000;

  const openSnackbar = (
    message: string,
    severity: "success" | "error" | "warning" | "info" = "info",
  ) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar }}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={SNACKBAR_DURATION}
        onClose={handleSnackbarClose}
        slots={{
          transition: SlideTransition,
        }}
      >
        <Alert
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
}
