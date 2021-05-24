import { useState } from "react";
import { useInput } from './useInput';

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // console.log(firstName, lastName);


  // const [inputs, setInputs] = useState({firstName: '', lastName: ''})
  // console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ inputs", inputs)

  // const handleChange = (e) => {
  //   setInputs({...inputs, [e.target.name]: e.target.value })
  // }

  const [inputs, setInputs] = useInput({firstName: '', lastName: '', email: ''});
  console.log("🚀 ~ file: App.js ~ line 18 ~ App ~ inputs", inputs)
  

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <form>
        <label htmlFor="firstName">
          First Name:{" "}
          <input
            name="firstName"
            value={inputs.firstName}
            onChange={setInputs}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:{" "}
          <input
            name="lastName"
            value={inputs.lastName}
            onChange={setInputs}
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            name="email"
            value={inputs.email}
            onChange={setInputs}
          />
        </label>
      </form>
    </div>
  );
}

export default App;
