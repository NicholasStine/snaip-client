import React from 'react';
import Gist from 'react-gist';
import FirstClickGif from '../images/minesweeper_first_clicks.gif';
import MinesweepBuggyOnes from '../images/minesweeper_buggy_ones.gif';

const MinesweeperBot = () => {

    return (
        <div>
        <Gist id='30e647aff477308e618a0e7255a6e438' />
        <p>Update</p>
        <img alt=" " src={FirstClickGif}/>
        <p>
            I've got it right clicking all detected bombs based only on the 1's in the "Game State".
        </p>
        <p>
            It doesn't always work so great, probably because I'm not yet accounting for already flagged squares, but this is my stopping point for the day!
        </p>
        <img alt=" " src={MinesweepBuggyOnes} />
        <Gist id='1655590f662c5e0925fcea77d804d5ca' />
        </div>
    );
}

export default MinesweeperBot;