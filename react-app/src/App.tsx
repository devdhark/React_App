import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  let items = ["New York", "Chicago", "Tokyo", "Atlanta", "Dallas"];

  return (
    <>
      <div>
        {<Button onClick={() => setAlertVisible(true)}>My Button</Button>}
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
        )}
      </div>

      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        <BsFillCalendarFill color="red" size="40" />
      </div>
      <div>
        <Like onClick={() => console.log("clicked")}></Like>
      </div>
    </>
  );
}

export default App;
