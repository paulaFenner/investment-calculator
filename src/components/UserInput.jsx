import { useState } from "react";

export default function UserInput() {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id='user-input'>
      <div className='input-group'>
        <div>
          <label>initial investment</label>
          <input
            type='number'
            required
            value={UserInput.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
          />
        </div>
        <div>
          <label>annual investment</label>
          <input
            type='number'
            required
            value={UserInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </div>
      </div>
      <div className='input-group'>
        <div>
          <label>expected return</label>
          <input
            type='number'
            required
            value={UserInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </div>
        <div>
          <label>duration</label>
          <input
            type='number'
            required
            value={UserInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
