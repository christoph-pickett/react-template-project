import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { LoginForm } from "./views/LoginForm";
import { WelcomePage } from "./views/WelcomePage";
import { MainProvider } from "./store/mainStore";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";

const App = () => {
  //RETURN
  return (
    <MainProvider>
      <Box display={'flex'} flexDirection={'column'} height={'100vh'}>
      <Navbar />

      <Routes>
        <Route index element={<LoginForm />} />

        <Route path="home" element={<WelcomePage />} />

        <Route
          path="*"
          element={<div>Hey this path doesnt exist yet...</div>}
        />
      </Routes>

      <Footer />

      </Box>
    </MainProvider>
  );
};

export default App;
