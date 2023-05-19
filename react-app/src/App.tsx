import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import { produce } from "immer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Expandable from "./components/Expandable/Expandable";

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

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleTagClick = () => {
    // add an element to state variable
    setTags([...tags, "excited"]);

    //remove an element to state variable
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleBugClick = () => {
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const [game, setGame] = useState({ id: 1, player: { name: "John" } });

  const handleGameClick = () => {
    setGame({ ...game, player: { ...game.player, name: "bob" } });
  };

  return (
    <div>
      <Expandable MaxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iste
        cumque veniam dolores itaque deserunt, repudiandae eaque provident quasi
        sed, voluptatem fugit nulla accusamus inventore! Officia impedit vitae
        quasi tenetur tempora porro, blanditiis deserunt sed repellat corporis
        eos aut quis temporibus ad similique, placeat quam cupiditate officiis
        necessitatibus, labore aspernatur nisi. Perferendis unde maxime
        voluptates aliquam magnam recusandae fuga, enim quas id repellendus
        tempora fugiat architecto nesciunt suscipit cupiditate necessitatibus
        soluta, nobis cum quod ipsam vero, sint impedit nostrum sequi!
        Perspiciatis sapiente quae ullam laboriosam, laborum, veritatis et saepe
        dolorum nostrum labore aperiam voluptatum quis vero reiciendis earum
        tenetur reprehenderit!
      </Expandable>
    </div>
  );
}

export default App;
