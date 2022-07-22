import React, { useState } from "react";
import DelayedInput from "typescript-react-test";
import './App.css';

function App() {

  const [value, setValue] = useState<string>("Test");

  return (
    <div className="App">
      {/* <Demo value="test" /> */}
      <DelayedInput value={value} onChange={(newValue: string) => setValue(newValue)} delay={1000} />
      <p>test test</p>
    </div>
  );
}

export default App;
