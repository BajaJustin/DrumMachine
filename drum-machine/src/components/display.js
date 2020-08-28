import React from 'react';

// Components
import DrumPad from './drumPad';

class Display extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pressedKey: ''
    };
    this.testing = this.testing.bind(this);
  }

  testing() {
    alert("works!");
  }

  render() {
    const drumNotes = [{
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Drum Kick',
      url: "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Drum%20Kick%2016-924-Free-Loops.com.mp3"
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Bass Drum',
      url: "http://www.denhaku.com/r_box/sr16/sr16bd/md%20stomp.wav"
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Snare Drum',
      url: "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Drum%20Snare%203-945-Free-Loops.com.mp3"
    },
    {
      keyCoe: 65,
      keyTrigger: 'A',
      id: 'Tom Tom',
      url: "http://cd.textfiles.com/maxsounds/WAV/EFEITOS/MT10.WAV"
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Ride Cymbal',
      url: "http://electrongate.com/dmxfiles/RIDE2A.wav"
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Medium Tom Tom',
      url: "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Ludwig%20Mid%20Tom%202-8118-Free-Loops.com.mp3"
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Large Tom Tom',
      url: "http://electrongate.com/dmxfiles/SFLTOM2.wav"
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Hi-Hat',
      url: "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Hi%20Hat%2005-5835-Free-Loops.com.mp3"
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Crash Cymbal',
      url: "http://electrongate.com/dmxfiles/CRASH.wav"
    }
  ];
    return (
      <div id="display">
        <DrumPad keyTrigger={drumNotes[0].keyTrigger} beat={drumNotes[0].url} id={drumNotes[0].id} keycode={drumNotes[0].keyCode} />
        <DrumPad keyTrigger={drumNotes[1].keyTrigger} beat={drumNotes[1].url} id={drumNotes[1].id} keycode={drumNotes[1].keyCode}/>
        <DrumPad keyTrigger={drumNotes[2].keyTrigger} beat={drumNotes[2].url} id={drumNotes[2].id} keycode={drumNotes[2].keyCode}/>
        <DrumPad keyTrigger={drumNotes[3].keyTrigger} beat={drumNotes[3].url} id={drumNotes[3].id} keycode={drumNotes[3].keyCode}/>
        <DrumPad keyTrigger={drumNotes[4].keyTrigger} beat={drumNotes[4].url} id={drumNotes[4].id} keycode={drumNotes[4].keyCode}/>
        <DrumPad keyTrigger={drumNotes[5].keyTrigger} beat={drumNotes[5].url} id={drumNotes[5].id} keycode={drumNotes[5].keyCode}/>
        <DrumPad keyTrigger={drumNotes[6].keyTrigger} beat={drumNotes[6].url} id={drumNotes[6].id} keycode={drumNotes[6].keyCode}/>
        <DrumPad keyTrigger={drumNotes[7].keyTrigger} beat={drumNotes[7].url} id={drumNotes[7].id} keycode={drumNotes[7].keyCode}/>
        <DrumPad keyTrigger={drumNotes[8].keyTrigger} beat={drumNotes[8].url} id={drumNotes[8].id} keycode={drumNotes[8].keyCode}/>
      </div>
    )
  }
}

export default Display;