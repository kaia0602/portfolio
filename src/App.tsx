import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./app/theme";
import { GlobalStyle } from "./styles/global";
import { useThemeMode } from "./app/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Skills from "./components/Skills";

function ThemedApp(){
  const { mode } = useThemeMode();
  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default ThemedApp;
