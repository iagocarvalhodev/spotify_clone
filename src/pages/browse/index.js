import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../../components/Loading';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
import { Container, List, Playlist, Title } from './styled';

class Browser extends Component {
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }
  render() {
    return (
      <Container>
        <Title>Navegar {this.props.playlists.loading && <Loading/>}</Title>

        <List>
          {this.props.playlists.data.map(playlist => (
            <Playlist key={playlist.id} to={`playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
      </List>
    </Container>
    )
  }
}

const mapStateToProps=state => ({
  playlists: state.playlists,
})

const mapDispatchToProps=dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browser);