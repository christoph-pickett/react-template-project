import { useEffect, useState } from "react";
import {
  TextField,
  Checkbox,
  Button,
  Paper,
  Box,
  Typography,
  Alert,
} from "@mui/material";
import { FormControl, FormControlLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
  // states
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [hasSubmit, setHasSubmit] = useState(false);

  const standardTopPadding = { pt: "10px" };
  const standardTopMargin = { mt: "10px" };

  useEffect(() => {
    if (hasSubmit) {
      navigateTo("/home");
    }
  }, [hasSubmit]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = () => {
    setHasSubmit(true);
  };

  const displayAlert = () => {
    // WHAT IF FAILED?
    return hasSubmit ? (
      <Alert severity="success">welcome back, {email}</Alert>
    ) : (
      <></>
    );
  };

  return (
    <Box
      display={"flex"}
      bgcolor={"lightblue"}
      width={"100%"}
      height={"88%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box position={"absolute"} top="150px">
        {displayAlert()}
      </Box>

      <Paper sx={{ padding: "10px" }}>
        <Typography variant="h4">Login</Typography>
        <FormControl>
          <TextField
            label="Email"
            variant="outlined"
            sx={standardTopPadding}
            onChange={handleEmailChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            sx={standardTopPadding}
            onChange={handlePasswordChange}
          />
          <FormControlLabel
            control={
              <Checkbox value={rememberMe} onChange={handleRememberMeChange} />
            }
            label="Remember Me"
          />

          <Button
            variant="contained"
            sx={standardTopMargin}
            disabled={!email || !password}
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Box sx={standardTopMargin}>
            <Link to="/register">Register</Link>
          </Box>
        </FormControl>
      </Paper>
    </Box>
  );
};
