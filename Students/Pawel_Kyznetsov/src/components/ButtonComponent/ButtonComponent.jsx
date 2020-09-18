import React from "react";

export default function ButtonComponent(props) {
  return (
    <button type="button" class="btn btn-warning"
      onClick={() => {
        props.onClick("Нормально");
      }}
    >
      Нормально
    </button>
  );
}
