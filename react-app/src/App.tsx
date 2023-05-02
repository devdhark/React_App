import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="success" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
