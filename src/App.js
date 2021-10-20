import { useMemo, useState } from "react";
import "./App.css";

function isNumber(text) {
  const regex = new RegExp(/^\d+$/);
  console.log("TEST" + regex.test(text));
  return regex.test(text);
}

function App() {
  const [text, setText] = useState();
  const isNum = useMemo(() => isNumber(text), [text]);

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span className="icon is-small is-right">
          <i className={isNum ? "fas fa-check" : "fas fa-times"} />
        </span> 
      </div>
    </div>
  );
}

export default App;
