import Slider from 'rc-slider';
import React from 'react';
import BackwardIcon from '../../assets/images/backward.svg';
// import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import PlayIcon from '../../assets/images/play.svg';
import RepeatIcon from '../../assets/images/repeat.svg';
import ShuffeIcon from '../../assets/images/shuffle.svg';
// imagens
import VolumeIcon from '../../assets/images/volume.svg';
import { Container, Controls, Current, Progress, ProgressSlider, Time, Volume } from './styled';

const Player=() => (
  <Container>
    <Current>
      <img src="https://static3.tcdn.com.br/img/img_prod/224611/capital_inicial_via_brasil_27_04_18_americana_sp_16479_1_20180321180432.jpg" alt="Capital Inicial" />

      <div>
        <span>Natasha</span>
        <small>Capital Inicial</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ ShuffeIcon } alt="ShuffeIcon"/>
        </button>
        <button>
          <img src={ BackwardIcon } alt="BackwardIcon"/>
        </button>
        <button>
          <img src={ PlayIcon } alt="PlayIcon"/>
        </button>
        <button>
          <img src={ ForwardIcon } alt="ForwardIcon"/>
        </button>
        <button>
          <img src={ RepeatIcon } alt="RepeatIcon"/>
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:34</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{display: 'none'}}
        value={100}
    />
    </Volume>
  </Container>
);

export default Player;