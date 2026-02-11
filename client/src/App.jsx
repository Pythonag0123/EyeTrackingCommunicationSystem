import Header from "./components/Header";
import Camera from "./components/Camera";
import Keyboard from "./components/Keyboard";
import Output from "./components/Output";

function App() {
  return (
    <div>
      <Header />

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "10px",
        padding: "10px"
      }}>
        <Camera />
        <Keyboard />
        <Output />
      </div>
    </div>
  );
}

export default App;
