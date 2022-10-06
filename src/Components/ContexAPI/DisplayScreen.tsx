import React, { useContext } from "react";
import { UserContext } from "./GlobalState";

const DisplayScreen = () => {
  const value = useContext(UserContext);
  console.log(value?.data);
  return (
    <div>
      <h5>Thsi is the Dispaly Screen</h5>
      {value?.data.map((props) => (
        <div key={props.id}>
          <div> {props.name} </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayScreen;
