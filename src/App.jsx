import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";

export default function App() {
  const [userInputState, setUserInputState] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // const inputIsValid = userInputState.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInputState((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />;
      <UserInput
        onChange={handleChange}
        userInput={userInputState}
      />
      {/* {!inputIsValid && (
        <p className='center'>Please enter a duration greater than zero.</p>
      )}
      {inputIsValid &&  */}
      <ResultsTable userInput={userInputState} />
    </>
  );
}
