import React from "react";

export default function ButtonComponent(props) {
  return (
    <button
      onClick={() => {
        props.onClick("Нормально");
      }}
    >
      Мне норм
    </button>
  );
}
