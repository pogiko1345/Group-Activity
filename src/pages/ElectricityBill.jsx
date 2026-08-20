import { useState } from "react";

function ElectricityBill() {
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [bill, setBill] = useState(null);
  const [error, setError] = useState("");

  function handleCalculate(event) {
    event.preventDefault();

    const trimmedName = customerName.trim();
    const numericConsumption = Number(consumption);

    if (trimmedName === "" || consumption === "") {
      setBill(null);
      setError("Please enter the customer name and consumption.");
      return;
    } else if (Number.isNaN(numericConsumption)) {
      setBill(null);
      setError("Please enter a valid consumption value.");
      return;
    } else if (numericConsumption < 0) {
      setBill(null);
      setError("Consumption cannot be negative.");
      return;
    }

    let rate = 0;
    let status = "";

    if (numericConsumption <= 100) {
      rate = 5;
      status = "Low Usage";
    } else if (numericConsumption <= 300) {
      rate = 7.5;
      status = "Moderate Usage";
    } else {
      rate = 10;
      status = "High Usage";
    }

    const total = numericConsumption * rate;

    setBill({
      customerName: trimmedName,
      consumption: `${numericConsumption} kWh`,
      rate: `PHP ${rate.toFixed(2)} per kWh`,
      total: `PHP ${total.toFixed(2)}`,
      status
    });
    setError("");
  }

  function handleClear() {
    setCustomerName("");
    setConsumption("");
    setBill(null);
    setError("");
  }

  return (
    <section className="activity-page">
      <div className="mini-card">
        <div className="mini-card-header">
          <p>Activity 4</p>
          <h2>Electricity Bill Calculator</h2>
        </div>

        <div className="mini-card-body">
          <form onSubmit={handleCalculate} className="form-grid">
            <label>
              Customer Name
              <input value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Enter customer name" />
            </label>

            <label>
              Consumption (kWh)
              <input type="number" min="0" step="0.01" value={consumption} onChange={(event) => setConsumption(event.target.value)} placeholder="Enter kWh" />
            </label>

            <div className="button-row">
              <button type="submit">Calculate Bill</button>
              <button type="button" className="secondary" onClick={handleClear}>Clear</button>
            </div>
          </form>

          {error && <p className="feedback error-feedback">{error}</p>}

          {bill && (
            <div className="result-panel">
              <p>Customer: {bill.customerName}</p>
              <p>Consumption: {bill.consumption}</p>
              <p>Rate Applied: {bill.rate}</p>
              <p>Total Bill: {bill.total}</p>
              <p>Usage Status: {bill.status}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ElectricityBill;
