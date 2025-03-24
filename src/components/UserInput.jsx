export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">initial investment</label>
          <input
            type="number"
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
  //   return (
  //     <section className="input-group">
  //       <form
  //         id="user-input"
  //         action="/submit"
  //         method="post"
  //       >
  //         <div className="input-row">
  //           <div className="input-field">
  //             <label htmlFor="initial-investment">Initial Investment</label>
  //             <input
  //               type="number"
  //               name="initial-investment"
  //               id="initial-investment"
  //             />
  //           </div>

  //           <div className="input-field">
  //             <label htmlFor="annual-investment">Annual Investment</label>
  //             <input
  //               type="number"
  //               name="annual-investment"
  //               id="annual-investment"
  //             />
  //           </div>
  //         </div>

  //         <div className="input-row">
  //           <div className="input-field">
  //             <label htmlFor="expected-return">Expected Return</label>
  //             <input
  //               type="number"
  //               name="expected-return"
  //               id="expected-return"
  //             />
  //           </div>

  //           <div className="input-field">
  //             <label htmlFor="duration">Duration</label>
  //             <input
  //               type="number"
  //               name="duration"
  //               id="duration"
  //             />
  //           </div>
  //         </div>
  //       </form>
  //     </section>
  //   );
}
