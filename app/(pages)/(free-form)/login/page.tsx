import {
  Container,
  Paper,
  Typography,
  Box,
  Avatar,
  Button,
} from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LoginForm from "@/app/component/form/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Inbox Cleanse",
  description:
    "Take control of your inbox. Unsubscribe from unwanted emails with ease and keep your inbox clean and organized.",
};

export default function LoginPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 3,
            gap: 1.5,
          }}
        >
          <Avatar
            sx={{ bgcolor: "secondary.main", mb: 1, height: 48, width: 48 }}
          >
            <MailOutlinedIcon sx={{ color: "black", fontSize: "32px" }} />
          </Avatar>

          <Typography
            children="Inbox Cleanse"
            variant="h4"
            sx={{ fontWeight: "600" }}
          />

          <Typography
            children="Take control of your inbox. Unsubscribe from unwanted emails with ease and keep your inbox clean and organized."
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "center" }}
          />
        </Box>
        <LoginForm />
      </Paper>
    </Container>
  );
}
