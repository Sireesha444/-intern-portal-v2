import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Stack } from "@mui/material";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Student",
    feedback:
      "This platform helped me land my first internship! The UI is clean and easy to navigate.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Priya Verma",
    role: "Company HR",
    feedback:
      "We received so many qualified applicants through this portal. The 2FA login is a great security feature.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Rohan Mehta",
    role: "Student",
    feedback:
      "Amazing experience! The application process was smooth, and I got a great internship match.",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const Testimonials: React.FC = () => {
  return (
    <Box sx={{ py: 6, px: 3, textAlign: "center", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        What Our Users Say
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        {testimonials.map((t, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 320,
              borderRadius: 4,
              boxShadow: 3,
              backgroundColor: "#fff",
              p: 2,
            }}
          >
            <CardContent>
              <Avatar
                src={t.image}
                alt={t.name}
                sx={{ width: 64, height: 64, mx: "auto", mb: 2 }}
              />
              <Typography variant="subtitle1" fontWeight="bold">
                {t.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {t.role}
              </Typography>
              <Typography variant="body2" color="text.primary">
                “{t.feedback}”
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Testimonials;
