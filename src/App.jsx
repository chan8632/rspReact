import Box from "./components/Box";
import "./App.css";
import { useState } from "react";
const choice = {
  initial: {
    name: "question",
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
    setUserSelect(choice[userChoice]);
  };
  const [userSelect, setUserSelect] = useState(choice["initial"]);
  
  return (
    <div>
      <div className="main">
        <Box title={"You"} item={userSelect} />
        <Box title={"Computer"} />
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
