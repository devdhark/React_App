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

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const [isLoading, setLoading] = useState(false);
  const fullName = firstName + " " + lastName;

  let items = ["New York", "Chicago", "Tokyo", "Atlanta", "Dallas"];

  return (
    <>
      <div>{fullName}</div>
    </>
  );
}

export default App;
