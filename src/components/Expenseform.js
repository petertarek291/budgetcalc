import React from "react";
import { MdSend } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
const Expenseform = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) => {
  return (
    <form className="form-center" onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label className="form-label">Charge</label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="charge"
          name="charge"
          placeholder="e.g. rent"
          value={charge}
          onChange={handleCharge}
        />
        <div className="form-group mb-3 ">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control form-control-md"
            id="amount"
            name="amount"
            placeholder="e.g. 1000"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button className="btn btn-danger my-2" type="submit">
        {edit ? "Edit" : "Submit"}
        {edit ? <AiFillEdit /> : <MdSend />}
      </button>
    </form>
  );
};

export default Expenseform;
