import React, { useState } from 'react';
import BackgroundImage from '/src/assets/biker.jpeg';

const Demo1 = () => {
  const [humanChoice, setHumanChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  const gameResults = (humanPlayer, botPlayer) => {
    if (humanPlayer === botPlayer) {
      return "DRAW";
    } else if (
      (humanPlayer === "rock" && botPlayer === "scissors") ||
      (humanPlayer === "paper" && botPlayer === "rock") ||
      (humanPlayer === "scissors" && botPlayer === "paper")
    ) {
      return "You win";
    } else {
      return "You Lose";
    } 
  };

  const handleButtonClick = (choice) => {
    const botChoice = choices[Math.floor(Math.random() * choices.length)]; // Get the bot's actual choice
    setHumanChoice(choice);
    setResult(gameResults(choice, botChoice));
  };

  return (
    <>
      <div className="">
      <img className="absolute -z-20 inset-0 h-full w-full object-cover" src={BackgroundImage} alt="Background" />
      </div>
      <div id='container' className="flex flex-row text-white pt-[100px] px-8 justify-between">
        <div className="flex flex-col h-full gap-[150px]">
          <div className=" font-extralight w-[260px]">
            <p>
            I don't play games, but I'll be back... for a rematch.
            </p>
          </div>
          <div>
            <div className="flex flex-row gap-5 font-extralight text-[14px] ">
              <button className="border-b-2" onClick={() => handleButtonClick("rock")}>ROCK</button>
              <button className="border-b-2" onClick={() => handleButtonClick("paper")}>PAPER</button>
              <button className="border-b-2" onClick={() => handleButtonClick("scissors")}>SCISSORS</button>
            </div>
          </div>
          <div className="">
            <p className="uppercase font-large tracking-widest">Human VS Terminator</p>
            <h1 className="text-8xl font-serif">{result}</h1>
          </div>
        </div>
        <div className="pt-[645px] text-gray-50">
          <a href='https://patricktuyishime.com' target='_blank' rel='noopener noreferrer'>Patrick Tuyishime</a>
        </div>
      </div>
    </>
  );
};

export default Demo1;
