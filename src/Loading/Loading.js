import React from "react";
import loading from "./loading.gif";

const Loading = () => {
  const style = {
    width: "100px",
    margin: "250px auto",
    display: "block",
  };
  return (
    <div>
      <img src={loading} style={style} alt="Loading..." />
    </div>
  );
};

export default Loading;
