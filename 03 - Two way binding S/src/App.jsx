import React, { useState } from "react";

function App() {
  const [gender, setGender] = useState("others");
  const [city, setCity] = useState("city");
  const [check, setCheck] = useState(true);
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault(e);
          console.log(gender, city, check);
          console.log(e.target.username.value);
        }}
      >
        <input name="username" type="text" />
        <input
          checked={gender === "others" ? true : false}
          onChange={(e) => {
            setGender("others");
          }}
          value="Others"
          type="radio"
        />
        Other
        <input
          checked={gender === "male" ? true : false}
          onChange={(e) => {
            setGender("male");
          }}
          value="Male"
          type="radio"
        />
        Male
        <input
          checked={gender === "female" ? true : false}
          onChange={(e) => {
            setGender("female");
          }}
          value="Female"
          type="radio"
        />
        Female
        <select
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          <option value="city">City</option>
          <option value="bhopal">Bhopal</option>
          <option value="indore">Indore</option>
          <option value="ujjain">Ujjain</option>
        </select>
        <input
          onChange={(e) => {
            setCheck(e.target.checked);
          }}
          checked={check}
          type="checkbox"
        />
        18+
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
