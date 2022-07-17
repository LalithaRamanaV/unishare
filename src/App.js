import styled, { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./utils/Theme";
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
padding: 22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
    <BrowserRouter>
      <Menu/>
      <Main>
        <Navbar/>
        <Wrapper>
        <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
