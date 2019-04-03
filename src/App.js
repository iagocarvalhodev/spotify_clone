import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import './config/reactotron';
import Routes from './routes';
import store from './store';
import { Container, Content, Wrapper } from './styles/component';
import { GlobalStyle } from './styles/global';

const App=() => (
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
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
      </Provider>
  </Fragment>
)

export default App;
