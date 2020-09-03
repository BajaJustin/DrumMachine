import React from 'react';

// CSS Import
import '../css/drumPad.css';

const activeStyle = {
  backgroundColor: '#E9C46A',
  boxShadow: "0 5px #666",
  height: 70
}

const inactiveStyle = {
  backgroundColor: '#CCCCCC'
}
class DrumPad extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      padStyle: inactiveStyle
    }
    this.playAudio = this.playAudio.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.activatePad = this.activatePad.bind(this);
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
  activatePad() {
      this.state.padStyle.backgroundColor === '#E9C46A' ?
        this.setState({
          padStyle: inactiveStyle
        }) :
        this.setState({
          padStyle: activeStyle
        });
  }
  playAudio() {
    const audio = document.getElementById(this.props.keyTrigger);
    const innerText = document.getElementById("notePlayed");
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    innerText.innerHTML = this.props.id;
    audio.currentTime = 0;
    audio.play();
  }
  render() {
    return (
      <div className="drum-pad" id={this.props.id}>
        <button onClick={this.playAudio}
                style={this.state.padStyle}>
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