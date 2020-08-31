import React from 'react';

// CSS Import
import '../css/drumPad.css';
class DrumPad extends React.Component {
  constructor(props){
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleEvent);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEvent)
  }
  handleEvent(e) {
    if(e.keyCode === this.props.keycode){
      this.playAudio();
    }
  }
  playAudio() {
    const audio = document.getElementById(this.props.keyTrigger);
    const innerText = document.getElementById("notePlayed");
    innerText.innerHTML = this.props.id;
    audio.currentTime = 0;
    audio.play();
  }
  render() {
    return (
      <div className="drum-pad" id={this.props.id}>
        <button onClick={this.playAudio}>
          <audio id={this.props.keyTrigger}>
            <source 
              src={this.props.beat} 
              type="audio/mpeg"
              className="clip"/>
          </audio>
          {this.props.keyTrigger}
        </button>
      </div>
    )
  }

}

export default DrumPad;