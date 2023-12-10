import React from 'react';

const Button = (props) => {
  return (
    <button style={{ fontSize: `${props.size}px`, fontWeight: "bold", color: "white", fontFamily: "Lato" }}
     className="px-5 py-2.5 bg-cyan-700 rounded-full justify-center items-center gap-2.5 inline-flex">
      {props.title}
    </button>
  );
};

export default Button;
