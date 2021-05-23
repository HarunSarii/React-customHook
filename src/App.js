import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName, lastName);
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <form>
        <label htmlFor="firstName">
          First Name:{" "}
          <input
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:{" "}
          <input
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}

export default App;
