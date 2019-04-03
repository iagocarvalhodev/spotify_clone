import React from 'react';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import { Container, Header, SongList } from './styled';

const Playlist=() => (
  <Container>
    <Header>
      <img src="https://static3.tcdn.com.br/img/img_prod/224611/capital_inicial_via_brasil_27_04_18_americana_sp_16479_1_20180321180432.jpg" alt="Playlist" />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th></th>
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th><img src={ClockIcon} alt="Duração"/></th>
      </thead>

      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Natasha</td>
          <td>Capital Inicial</td>
          <td>Sornosa</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Natasha</td>
          <td>Capital Inicial</td>
          <td>Sornosa</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Natasha</td>
          <td>Capital Inicial</td>
          <td>Sornosa</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Natasha</td>
          <td>Capital Inicial</td>
          <td>Sornosa</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Natasha</td>
          <td>Capital Inicial</td>
          <td>Sornosa</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Natasha</td>
          <td>Capital Inicial</td>
          <td>Sornosa</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Natasha</td>
          <td>Capital Inicial</td>
          <td>Sornosa</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
)

export default Playlist;