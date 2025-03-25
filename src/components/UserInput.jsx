export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">initial investment</label>
          <input
            type="number"
            value={1}
            name="initial-investment"
            id="initial-investment"
          />
        </div>
        <div>
          <label htmlFor="annual-investment">annual investment</label>
          <input
            type="number"
            name="annual-investment"
            id="annual-investment"
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">expected return</label>
          <input
            type="number"
            name="expected-return"
            id="expected-return"
          />
        </div>
        <div>
          <label htmlFor="duration">duration</label>
          <input
            type="number"
            name="duration"
            id="duration"
          />
        </div>
      </div>
    </section>
  );
 
}
