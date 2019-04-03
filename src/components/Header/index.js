import React from 'react';
import { Container, Search, User } from './styled';

const Header=() => (
  <Container>
    <Search>
      <input type="text" placeholder="Search"/>
    </Search>

    <User>
      <img src="https://avatars2.githubusercontent.com/u/29288264?v=4" alt="Avatar" />
      Iago Carvalho
    </User>
  </Container>
)

export default Header;