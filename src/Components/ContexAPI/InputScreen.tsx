import React, { useContext, useState } from "react";
import DisplayScreen from "./DisplayScreen";
import { UserContext } from "./GlobalState";

const InputScreen = () => {
  const [name, setName] = useState<string>("");
  const [stack, setStack] = useState<string>("");
  const value = useContext(UserContext);

  const addData = () => {
    value?.setData((el) => [
      ...el,
      {
        id: Math.floor(Math.random() * 100),
        name: name,
        stack: stack,
      },
    ]);
  };
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
      <button onClick={addData}>Submmit</button>
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
