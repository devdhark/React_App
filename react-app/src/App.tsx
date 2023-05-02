import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {
        <Button color="success" onClick={() => setAlertVisible(true)}>
          My Button
        </Button>
      }
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
    </div>
  );
}

export default App;
