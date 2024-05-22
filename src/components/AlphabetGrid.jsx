import React, { useState } from "react";
import "../css/AlphabetGrid.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetGrid = () => {
  const [outputString, setOutputString] = useState("");

  const handleClick = (letter) => {
    let newOutput = outputString + letter;

    // Replace consecutive letters
    newOutput = newOutput.replace(/(.)\1{2,}/g, (match) =>
      "_".repeat(match.length)
    );

    setOutputString(newOutput);
  };

  return (
    <div className="alphabet-grid">
        <div id="outputString"> 
            <h3>Output String:</h3> {outputString}
        </div>
        <div className="grid">
            {alphabet.map((letter) => (
            <button key={letter} onClick={() => handleClick(letter)}>
                {letter}
            </button>
            ))}
        </div>
    </div>
  );
};

export default AlphabetGrid;
