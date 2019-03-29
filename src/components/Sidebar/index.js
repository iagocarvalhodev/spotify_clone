import React from 'react';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';
// styles
import { Container, Nav, NewPlaylist } from './styled';

const Sidebar=() => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUAS BIBLIOTECAS</span>
        </li>
        <li>
          <a href="">Seu Daily Mix</a>
        </li>
        <li>
          <a href="">Tocados Recentemente</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Álbuns</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Estações</a>
        </li>
        <li>
          <a href="">Arquivos Locais</a>
        </li>
        <li>
          <a href="">Vídeos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a href="">Melhores do Rock</a>
        </li>
        <li>
          <a href="">Rock Internacional</a>
        </li>
        <li>
          <a href="">Melhores do Country</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar nova playlist" />
      Nova playlist
    </NewPlaylist>
  </Container>
)

export default Sidebar;