import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Item from "../components/Expenseitem";

const Expenselist = ({ expenses, clearItems, editItems, deleteItems }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item list-group-item-success text-center">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              deleteItems={deleteItems}
              editItems={editItems}
            />
          );
        })}
      </li>
      {expenses.length > 0 && (
        <button className="btn btn-danger m-2" onClick={clearItems}>
          Clear Expense
          <MdDeleteForever className="btn-icon" />
        </button>
      )}
    </ul>
  );
};

export default Expenselist;
