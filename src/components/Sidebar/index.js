import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
// styles
import { Container, Nav, NewPlaylist } from './styled';

class Sidebar extends Component {
  static propTypes={
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
      })),
    }).isRequired
  };
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }
  render() {
    return (
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
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
             </li>
          ))}
        </Nav>
      </div>
      <NewPlaylist>
        <img src={AddPlaylistIcon} alt="Adicionar nova playlist" />
        Nova playlist
      </NewPlaylist>
    </Container>
    )
  }
}

const mapStateToProps=state => ({
  playlists: state.playlists,
});

const mapDispatchToProps=dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);