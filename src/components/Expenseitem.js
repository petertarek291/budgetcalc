import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
const Expenseitem = ({ expense, deleteItems, editItems }) => {
  const { id, charge, amount } = expense;
  return (
    <>
      <li className="item">
        <div>
          <span>{charge}</span>:<span> $ {amount}</span>
        </div>
        <div>
          <button onClick={() => editItems(id)}>
            <MdEdit style={{ color: "green" }} />
          </button>
          <button onClick={() => deleteItems(id)}>
            <MdDelete style={{ color: "red" }} />
          </button>
        </div>
      </li>
    </>
  );
};

export default Expenseitem;
