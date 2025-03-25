export default function UserInput({ onChange, userInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <div>
          <label>initial investment</label>
          <input
            type='number'
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </div>
        <div>
          <label>annual investment</label>
          <input
            type='number'
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </div>
      </div>
      <div className='input-group'>
        <div>
          <label>expected return</label>
          <input
            type='number'
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </div>
        <div>
          <label>duration</label>
          <input
            type='number'
            required
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
