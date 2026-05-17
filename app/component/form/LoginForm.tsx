"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSnackbar } from "@/app/lib/Context/Snackbar";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { openSnackbar } = useSnackbar();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(`Selected Tab: ${selectedTab}`);

  const handlesubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (selectedTab) {
      case "login":
        if (!email || !password) {
          openSnackbar("Please fill in all required fields", "error");
          return;
        }

        const result = await signIn("credentials", {
          email: email,
          password: password,
          redirect: false,
        });

        console.log("SignIn result:", result);
        if (result?.error) {
          openSnackbar(result.error || "Login failed", "error");
        } else {
          openSnackbar("Login successful!", "success");
          router.push("/dashboard");
        }
        break;

      case "register":
        if (!email || !password || !confirmPassword) {
          openSnackbar("Please fill in all required fields", "error");
          return;
        }
        if (password !== confirmPassword) {
          openSnackbar("Passwords do not match", "error");
          return;
        }
        break;
    }
  };

  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 0.5,
          backgroundColor: "secondary.main",
          width: "100%",
          borderRadius: 1,
        }}
      >
        <Button
          variant="contained"
          onClick={() => setSelectedTab("login")}
          sx={{
            flex: 1,
            height: 30,
            backgroundColor: selectedTab === "login" ? "white" : "inherit",
            color: selectedTab === "login" ? "primary.main" : "inherit",
            "&:hover": {
              backgroundColor: selectedTab === "login" ? "white" : "inherit",
            },
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          onClick={() => setSelectedTab("register")}
          sx={{
            flex: 1,
            height: 30,
            backgroundColor: selectedTab === "register" ? "white" : "inherit",
            color: selectedTab === "register" ? "primary.main" : "inherit",
            "&:hover": {
              backgroundColor: selectedTab === "register" ? "white" : "inherit",
            },
          }}
        >
          Register
        </Button>
      </Box>

      <Box
        component="form"
        onSubmit={handlesubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Box>
          <Typography children="Email" variant="subtitle2" gutterBottom />
          <TextField
            fullWidth
            required
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box>
          <Typography children="Password" variant="subtitle2" gutterBottom />
          <TextField
            fullWidth
            required
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      sx={{ textTransform: "none" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon
                          sx={{ color: "primary.main", height: 20, width: 20 }}
                        />
                      ) : (
                        <VisibilityIcon
                          sx={{ color: "primary.main", height: 20, width: 20 }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        {selectedTab === "register" && (
          <Box>
            <Typography
              children="Confirm Password"
              variant="subtitle2"
              gutterBottom
            />
            <TextField
              fullWidth
              required
              placeholder="Confirm your password"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Box>
        )}

        <Button variant="contained" fullWidth size="small" type="submit">
          {selectedTab === "login" ? "Login" : "Register"}
        </Button>
      </Box>
    </Box>
  );
}
