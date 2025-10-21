import Box from "./components/Box";
import "./App.css";
import { useState } from "react";
const choice = {
  default: {
    name: "initial",
    img: "https://agreatdream.com/wp-content/uploads/2012/04/question-mark.jpg",
  },
  rock: {
    name: "rock",
    img: "https://img.freepik.com/free-psd/grey-boulder-rock-isolated-transparent-background_632498-25568.jpg?semt=ais_hybrid&w=740&q=80",
  },
  scissors: {
    name: "scissors",
    img: "https://i.namu.wiki/i/PGp3JnsDa9eaMKBC1OwnSU4M0vLE0d_40ehrl0aUYum98U6tg0Nnl8W6_c0bQk2Bp9mQCMTe7eQt32pszxoQGw.webp",
  },
  paper: {
    name: "paper",
    img: "https://img.freepik.com/free-photo/white-paper-texture_1194-2301.jpg?semt=ais_hybrid&w=740&q=80",
  },
};
function App() {
  const play = (userChoice) => {
    let userPick = choice[userChoice];
    setUserSelect(userPick);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    let isWin = judgement(userPick, computerChoice);
    setResult(isWin);
  };
  const judgement = (user, computer) => {
    
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    }
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * (itemArray.length - 1) + 1);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const [userSelect, setUserSelect] = useState(choice["default"]);
  const [computerSelect, setComputerSelect] = useState(choice["default"]);
  const [result, setResult] = useState("");

  return (
    <div>
      <div className="main">
        <Box title={"You"} item={userSelect} result={result} />
        <Box title={"Computer"} item={computerSelect} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
