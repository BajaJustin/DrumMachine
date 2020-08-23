import React from 'react';

// Components
import DrumPad from './drumPad';

class Display extends React.Component {
  render() {
    return (
      <div id="display">
        <DrumPad pad="Q" beat="http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Drum%20Kick%2016-924-Free-Loops.com.mp3"/>{/* Drum Kick */}
        <DrumPad pad="W" beat="http://www.denhaku.com/r_box/sr16/sr16bd/md%20stomp.wav"/> {/* bass drum */}
        <DrumPad pad="E" beat="http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Drum%20Snare%203-945-Free-Loops.com.mp3"/> {/* snare drum */}
        <DrumPad pad="A" beat="http://cd.textfiles.com/maxsounds/WAV/EFEITOS/MT10.WAV"/> {/* tom tom */}
        <DrumPad pad="S" beat="http://electrongate.com/dmxfiles/RIDE2A.wav"/> {/* ride cymbal */}
        <DrumPad pad="D" beat="http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Ludwig%20Mid%20Tom%202-8118-Free-Loops.com.mp3"/> {/* medium tom */}
        <DrumPad pad="Z" beat="http://electrongate.com/dmxfiles/SFLTOM2.wav"/> {/* large tom */}
        <DrumPad pad="X" beat="http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Hi%20Hat%2005-5835-Free-Loops.com.mp3"/>{/* hi-hat */}
        <DrumPad pad="C" beat="http://electrongate.com/dmxfiles/CRASH.wav"/> {/* crash cymbal */}
      </div>
    )
  }
}

export default Display;