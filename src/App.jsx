import Box from "./components/Box";
import "./App.css";

function App() {
  return (
    <div>
      <div className="main">
        <Box title={"You"} />
        <Box title={"Computer"} />
      </div>
      <div className="main">
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  );
}

export default App;
