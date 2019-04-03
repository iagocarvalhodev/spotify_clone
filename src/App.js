import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import Routes from './routes';
import { Container, Content, Wrapper } from './styles/component';
import { GlobalStyle } from './styles/global';

const App=() => (
  <Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes/>
          </Content>
        </Container>
        <Player></Player>
      </Wrapper>
    </BrowserRouter>
  </Fragment>
)

export default App;
