import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import HttpPage from './components/pages/HttpPage';
import i18nInit from './translate/configInit';
import darkTheme from './theme/dark';
import { MainContainer } from './appStyle';

function App() {
  i18nInit();

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Header />
        <MainContainer>
          <Container>
            <Routes>
              <Route path="/HTTP" element={<HttpPage />} />
            </Routes>
          </Container>
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
