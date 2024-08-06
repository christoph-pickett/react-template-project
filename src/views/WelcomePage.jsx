import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const WelcomePage = () => {
  // STATES / VAR

  // FUNCTIONS

  //RETURN
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      width={"inherit"}
      height={"inherit"}
    >
      <Box flex={10}>
        <Typography variant="h3" textAlign={"center"}>
          Welcome Page
        </Typography>
        <Typography variant="h4" textAlign={"center"}>
          Content goes here
        </Typography>
      </Box>
    </Box>
  );
};
