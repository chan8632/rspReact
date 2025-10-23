import Box from "./components/Box";
import "./App.css";
import { useState } from "react";
import defaultImg from "./assets/question.jpg";
import rockImg from "./assets/rock.jpg";
import scissorsImg from "./assets/scissors.jpg";
import paperImg from "./assets/paper.jpg";
const choice = {
  default: {
    name: "initial",
    img: defaultImg,
  },
  rock: {
    name: "rock",
    img: rockImg,
  },
  scissors: {
    name: "scissors",
    img: scissorsImg,
  },
  paper: {
    name: "paper",
    img: paperImg,
  },
};
function App() {
  const play = (userChoice) => {
    let userPick = choice[userChoice];
    setUserSelect(userPick);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    let userIsWin = judgement(userPick, computerChoice);
    let computerIsWin = comJudgement(userIsWin);
    setMyResult(userIsWin);
    setComResult(computerIsWin);
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
  const comJudgement = (userResult) => {
    if (userResult === "tie") return "tie";
    else if (userResult === "win") return "lose";
    else if (userResult === "lose") return "win";
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * (itemArray.length - 1) + 1);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const [userSelect, setUserSelect] = useState(choice["default"]);
  const [computerSelect, setComputerSelect] = useState(choice["default"]);
  const [myResult, setMyResult] = useState("");
  const [comResult, setComResult] = useState("");

  return (
    <div className="container">
      <div className="main">
        <Box
          title={"You"}
          item={userSelect}
          result={myResult}
          borderColor={myResult}
        />
        <Box
          title={"Computer"}
          item={computerSelect}
          result={comResult}
          borderColor={comResult}
        />
      </div>
      <div className="buttonMain">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
