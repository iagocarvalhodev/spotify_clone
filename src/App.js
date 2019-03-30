import React, { Fragment } from 'react';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { Container, Wrapper } from './styles/component';
import { GlobalStyle } from './styles/global';

const App=() => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Sidebar/>
      </Container>
      <Player></Player>
    </Wrapper>
  </Fragment>
)

export default App;
