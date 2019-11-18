import React, { useState } from "react";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("PKR");

  const handleSubmit = e => {
    e.preventDefault();

    console.log(`${amount} || ${from} || ${to}`);
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
        <select
          className="from"
          value={from}
          onChange={e => setFrom(e.target.value)}
          onBlur={e => setFrom(e.target.value)}
        >
          <option>{from}</option>
          <option>PNR</option>
          <option>MAD</option>
        </select>
        <select
          className="to"
          value={to}
          onChange={e => setTo(e.target.value)}
          onBlur={e => setTo(e.target.value)}
        >
          <option>{to}</option>
          <option>PNR</option>
          <option>MAD</option>
        </select>
        <button type="submit">Convert</button>
      </form>
    </React.Fragment>
  );
};

export default Form;
