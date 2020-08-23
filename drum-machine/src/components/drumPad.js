import React from 'react';

class DrumPad extends React.Component {

  render() {
    return (
      <div className="drum-pad" id={this.props.pad}>
        <button>
          <audio controls>
            <source 
              src={this.props.beat} 
              type="audio/mpeg"
              className="clip"
              id={this.props.pad} />
          </audio>
          {this.props.pad}
        </button>
      </div>
    )
  }

}

export default DrumPad;