import React from 'react';

class DrumPad extends React.Component {
  constructor(props){
    super(props);
    this.playAudio = this.playAudio.bind(this);
  }
  playAudio() {
    const audio = document.getElementById(this.props.id);
    audio.play();
  }
  render() {
    return (
      <div className="drum-pad" id={this.props.keyTrigger}>
        <button onClick={this.playAudio}>
          <audio id={this.props.id}>
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