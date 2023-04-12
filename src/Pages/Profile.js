import React from "react";
import profile from "../assets/img/profile.jpg";
//////////////////////////////////////////////////
import { Button, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Profile = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        top: "70px",
      }}
    >
      <Stack sx={{ mt: 5, position: "relative", zIndex: 100 }}>
        <Avatar
          alt="Remy Sharp"
          src={profile}
          sx={{ width: 100, height: 100 }}
        />
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          "& > :not(style)": {
            p: 1,
            mt: 10,
            width: {
              xs: 300, //0
              sm: 400, //600
              md: 500, //900
              lg: 600, //1200
              xl: 500, //1536
            },
          },
        }}
      >
        <Paper elevation={3} sx={{ pt: 50 }}>
          <Toolbar>
            <Box display="flex">
            <Typography sx={{ mt: 10 }} variant="p">
              <p>name:</p>
              <p>F name:</p>
              <p>Gender</p>
              <p>age:</p>
              <p>Education:</p>
            </Typography>
            </Box>
            <Box display="flex" marginLeft="auto">
              <Stack spacing={2} direction="row">
                <Typography sx={{ mt: 10 }} variant="p">
                  <p>Shoaib Raza &#x28;Senior React Developer&#x29;</p>
                  <p>Ghulam Ali</p>
                  <p>Male</p>
                  <p>28 years</p>
                  <p> BS&#x28;hons&#x29; from NCBA&amp;E</p>
                </Typography>
              </Stack>
            </Box>
          </Toolbar>

        </Paper>
      </Box>
    </div>
  );
};

export default Profile;
