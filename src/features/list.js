import React from "react";

const todos = [
  {
    title: 'item 1',
  },
  {
    title: 'item 2',
  },
  {
    title: 'item 3',
  }
];
const List = () => {
  return (
    <div>
      <ul data-testid="item-list-wrap">
        {todos.map((item, index) => (
          <li key={index} className="list-item" data-testid="item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;