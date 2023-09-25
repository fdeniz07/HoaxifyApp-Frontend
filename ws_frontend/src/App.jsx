import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { LanguageSelector } from "./shared/components/LanguageSelector";
import {  NavBar } from "./shared/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
        <LanguageSelector />
      </Container>
    </>
  );
}

export default App;
