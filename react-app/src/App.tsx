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

  const [drink, setDrink] = useState({ title: "Americano", price: 5 });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  const [isLoading, setLoading] = useState(false);
  const fullName = person.firstName + " " + person.lastName;

  let items = ["New York", "Chicago", "Tokyo", "Atlanta", "Dallas"];

  const [customer, setCustomer] = useState({
    name: "John",
    address: { city: "San Francisco", zipCode: 94111 },
  });

  const handleCustomerClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <>
      <div>
        <button onClick={handleCustomerClick}>Click me</button>
      </div>
    </>
  );
}

export default App;
