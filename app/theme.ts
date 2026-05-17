"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2B2B2B", // primary (oklch 0.205 0 0)
      contrastText: "#FAFAFA", // primary-foreground
    },
    secondary: {
      main: "#F5F5F5", // secondary (oklch 0.97 0 0)
      contrastText: "#1A1A1A", // foreground
    },
    background: {
      default: "#FFFFFF", // background
      paper: "#FFFFFF", // card
    },
    text: {
      primary: "#1A1A1A", // foreground
      secondary: "#737373", // muted-foreground
    },
    error: {
      main: "#DC2626", // destructive
    },
    warning: {
      main: "#ed6c02", // Using destructive for warnings too
    },
    info: {
      main: "#0288d1", // Using primary for info
    },
    success: {
      main: "#2e7d32", // Using primary for success
    },
    divider: "#E5E5E5", // border
    action: {
      active: "#1A1A1A",
      hover: "#F5F5F5",
      selected: "#F5F5F5",
      disabled: "#E5E5E5",
      disabledBackground: "#F5F5F5",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#1A1A1A",
    },
  },
  typography: {
    fontFamily:
      '"Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.2,
      color: "#1A1A1A",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
      color: "#1A1A1A",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
      color: "#1A1A1A",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#1A1A1A",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#1A1A1A",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "#1A1A1A",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#1A1A1A",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#737373", // muted-foreground
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#1A1A1A",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#737373",
    },
    caption: {
      fontSize: "0.75rem",
      color: "#737373",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      color: "#737373",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 1px 2px rgba(0,0,0,0.05)",
    "0px 1px 3px rgba(0,0,0,0.1)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 4px 6px rgba(0,0,0,0.05)",
    "0px 6px 8px rgba(0,0,0,0.05)",
    "0px 8px 12px rgba(0,0,0,0.05)",
    "0px 10px 14px rgba(0,0,0,0.05)",
    "0px 12px 16px rgba(0,0,0,0.05)",
    "0px 14px 18px rgba(0,0,0,0.05)",
    "0px 16px 20px rgba(0,0,0,0.05)",
    "0px 20px 24px rgba(0,0,0,0.05)",
    "0px 24px 28px rgba(0,0,0,0.05)",
    "0px 28px 32px rgba(0,0,0,0.05)",
    "0px 32px 36px rgba(0,0,0,0.05)",
    "0px 36px 40px rgba(0,0,0,0.05)",
    "0px 40px 44px rgba(0,0,0,0.05)",
    "0px 44px 48px rgba(0,0,0,0.05)",
    "0px 48px 52px rgba(0,0,0,0.05)",
    "0px 52px 56px rgba(0,0,0,0.05)",
    "0px 56px 60px rgba(0,0,0,0.05)",
    "0px 60px 64px rgba(0,0,0,0.05)",
    "0px 64px 68px rgba(0,0,0,0.05)",
    "0px 68px 72px rgba(0,0,0,0.05)",
    "0px 72px 76px rgba(0,0,0,0.05)",
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FFFFFF",
          color: "#1A1A1A",
          scrollBehavior: "smooth",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "8px 16px",
          fontWeight: 500,
          fontSize: "0.875rem",
          transition: "all 0.2s ease",
          fontFamily: "Geist",
        },
        // Respect size prop: smaller paddings for `size="small"`
        sizeSmall: {
          padding: "6px 10px",
          fontSize: "0.8125rem",
        },
        sizeMedium: {
          padding: "8px 14px",
        },
        contained: {
          backgroundColor: "#2B2B2B",
          color: "#FAFAFA",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#404040",
            boxShadow: "none",
          },
          "&:active": {
            backgroundColor: "#1A1A1A",
          },
          "&.Mui-disabled": {
            backgroundColor: "#F5F5F5",
            color: "#A3A3A3",
          },
        },
        outlined: {
          borderColor: "#E5E5E5",
          color: "#1A1A1A",
          "&:hover": {
            borderColor: "#2B2B2B",
            backgroundColor: "#FAFAFA",
          },
        },
        text: {
          color: "#1A1A1A",
          "&:hover": {
            backgroundColor: "#F5F5F5",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          border: "1px solid #E5E5E5",
          boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
          transition: "box-shadow 0.2s ease",
          "&:hover": {
            boxShadow: "0px 4px 6px rgba(0,0,0,0.05)",
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "20px 24px",
          borderBottom: "1px solid #E5E5E5",
        },
        title: {
          fontSize: "1.125rem",
          fontWeight: 600,
          color: "#1A1A1A",
        },
        subheader: {
          fontSize: "0.875rem",
          color: "#737373",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
          "&:last-child": {
            paddingBottom: "24px",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            backgroundColor: "#FFFFFF",
            "& fieldset": {
              borderColor: "#E5E5E5",
            },
            "&:hover fieldset": {
              borderColor: "#2B2B2B",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2B2B2B",
              borderWidth: 1,
            },
          },
          // Reduce default input padding for outlined TextField
          "& .MuiOutlinedInput-input": {
            padding: "8px 12px",
            fontWeight: 500,
            fontFamily:
              'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          },
          "& .MuiInputLabel-root": {
            color: "#737373",
            "&.Mui-focused": {
              color: "#2B2B2B",
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
        input: {
          color: "#1A1A1A",
          padding: "10px 12px",
          fontWeight: 500,
          fontFamily:
            'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          "&::placeholder": {
            color: "#A3A3A",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          border: "1px solid #E5E5E5",
          boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
        },
        elevation1: {
          boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
        },
        elevation2: {
          boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#E5E5E5",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
    // MuiAlert: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 8,
    //       border: "1px solid",
    //       "&.MuiAlert-standardError": {
    //         backgroundColor: "#FEF2F2",
    //         borderColor: "#DC2626",
    //         color: "#991B1B",
    //       },
    //     },
    //   },
    // },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          fontSize: "0.75rem",
        },
        filled: {
          backgroundColor: "#F5F5F5",
          color: "#1A1A1A",
        },
        outlined: {
          borderColor: "#E5E5E5",
          color: "#1A1A1A",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F5F5F5",
          "& .MuiTableCell-root": {
            fontWeight: 600,
            color: "#1A1A1A",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #E5E5E5",
          padding: "12px 16px",
        },
        head: {
          fontWeight: 600,
          color: "#1A1A1A",
          backgroundColor: "#F5F5F5",
        },
        body: {
          color: "#1A1A1A",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#737373",
          "&:hover": {
            backgroundColor: "#F5F5F5",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFFFFF",
          borderRight: "1px solid #E5E5E5",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#1A1A1A",
          borderBottom: "1px solid #E5E5E5",
          boxShadow: "none",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#F5F5F5",
            "&:hover": {
              backgroundColor: "#F5F5F5",
            },
          },
          "&:hover": {
            backgroundColor: "#FAFAFA",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "4px 8px",
          "&.Mui-selected": {
            backgroundColor: "#F5F5F5",
            "&:hover": {
              backgroundColor: "#F5F5F5",
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.875rem",
          color: "#737373",
          "&.Mui-selected": {
            color: "#1A1A1A",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#2B2B2B",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#E5E5E5",
          "&.Mui-checked": {
            color: "#2B2B2B",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#E5E5E5",
          "&.Mui-checked": {
            color: "#2B2B2B",
          },
        },
        track: {
          backgroundColor: "#E5E5E5",
        },
      },
    },
  },
});

// Extend theme types for custom properties
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    destructive: true;
  }
}

export default theme;
