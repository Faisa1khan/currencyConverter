import React, { useState } from "react";
import Currecy from "../../currencyByCountryName";
import useDropdown from "./useDropdown";
const Form = () => {
  const [amount, setAmount] = useState("");
  const [fromDropdownValue, FromDropdown] = useDropdown("From", "INR", Currecy);
  const [ToDropdownValue, ToDropdown] = useDropdown("To", "INR", Currecy);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(`${amount} || ${fromDropdownValue} || ${ToDropdownValue}`);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Amount
          <input
            id="amount"
            value={amount}
            placeholder="Amount"
            onChange={e => setAmount(e.target.value)}
          />
        </label>
        <FromDropdown />
        <ToDropdown />
        <button type="submit">Convert</button>
      </form>
    </React.Fragment>
  );
};

export default Form;
