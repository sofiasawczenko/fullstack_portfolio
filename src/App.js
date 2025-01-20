import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { Navbar } from './components/Navbar.js';
import { theme } from './styles/theme';
import { Header } from './components/Header.js'
import { Spacer } from './components/Spacer.js';
import { AboutMe } from './components/AboutMe.js';
import { SocialMedia } from './components/SocialMedia.js';
import { Experiences } from './components/Experiences.js';
import { Technologies } from './components/Technologies.js';
import { ContactMe } from './components/ContactMe.js';
import { Footer } from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Project } from './components/Project.js';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <nav>
        <Navbar />
        <SocialMedia />
      </nav>
      <Spacer />
      <div>
        <Header />
        <Experiences />
        <Project />
        <Technologies />
        <ContactMe />
        <Footer />
      </div>
    </ThemeProvider>
  );
}


export default App;
