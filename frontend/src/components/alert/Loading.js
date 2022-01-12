import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      className="position-fixed w-100 h-100 loading"
      style={{
        background: "#0005",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      <Loader type="ThreeDots" color="black" height={100} width={100} />
    </div>
  );
};

export default Loading;
