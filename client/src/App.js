import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepages";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
import JsConverter from "./pages/JsConverter";
import SciFiImage from "./pages/SciFiImage";
import TextToCommand from "./pages/TextToCommand";

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const theme = useMemo(() => createTheme(themeSettings(), []));
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/scifi-image" element={<SciFiImage />} />
          <Route path="/text-to-command" element={<TextToCommand />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
