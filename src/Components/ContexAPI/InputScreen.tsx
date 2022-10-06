import React, { useState } from "react";
import DisplayScreen from "./DisplayScreen";

const InputScreen = () => {
  const [name, setName] = useState<string>("");
  const [stack, setStack] = useState<string>("");
  return (
    <div>
      <h2>This Is The Input Screen</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <input
        placeholder="Stack"
        value={stack}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStack(e.target.value)
        }
      />
      <button>Submmit</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DisplayScreen />
    </div>
  );
};

export default InputScreen;
