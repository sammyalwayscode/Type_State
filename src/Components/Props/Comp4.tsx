import React from "react";

type Props = {
  data: number;
  setData: React.Dispatch<React.SetStateAction<number>>;
};

const Comp4: React.FC<Props> = ({ data, setData }) => {
  return (
    <div>
      <div>This is Component 4</div>
      <span>This is The State: {data} </span>
    </div>
  );
};

export default Comp4;
