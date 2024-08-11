import React, { useState } from 'react';

const Demo1 = () => {
  const [humanChoice, setHumanChoice] = useState(null);
  const [result, setResult] = useState(null);

  const botChoice = "Paper"; // Assuming the bot's choice is fixed for this example

  const gameResults = (humanPlayer, botPlayer) => {
    if (humanPlayer === botPlayer) {
      return "DRAW";
    } else if (
      (humanPlayer === "Rock" && botPlayer === "Scissors") ||
      (humanPlayer === "Paper" && botPlayer === "Rock") ||
      (humanPlayer === "Scissors" && botPlayer === "Paper")
    ) {
      return "You win";
    } else {
      return "You Lose";
    }
  };
d
  const handleButtonClick = (choice) => {
    setHumanChoice(choice);
    setResult(gameResults(choice, botChoice));
  };

  return (
    <>
      <div className="">
        <img className="absolute -z-20 inset-0 h-full w-full object-cover" src="src/assets/images/air.png" alt="Background" />
      </div>
      <div id='container' className="flex flex-row text-white pt-[100px] px-8 justify-between">
        <div className="flex flex-col h-full gap-[150px]">
          <div className=" font-extralight w-[260px]">
            <p>
              Move around your city safely and comfortably, while reducing your carbon footprint and helping to keep the air we breathe clean.
            </p>
          </div>
          <div>
            <div className="flex flex-row gap-5 font-extralight text-[14px] ">
              <button className="border-b-2" onClick={() => handleButtonClick("Rock")}>ROCK</button>
              <button className="border-b-2" onClick={() => handleButtonClick("Paper")}>PAPER</button>
              <button className="border-b-2" onClick={() => handleButtonClick("Scissors")}>SCISSORS</button>
            </div>
          </div>
          <div className="">
            <p className="uppercase font-large tracking-widest">Human Victory</p>
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
