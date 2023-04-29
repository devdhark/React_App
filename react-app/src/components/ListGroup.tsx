import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Chicago", "Tokyo", "Atlanta", "Dallas"];
  let selectedIndex = 0;

  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
