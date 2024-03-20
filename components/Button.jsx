"use client";

function Button() {
  return (
    <button onClick={() => alert("soy un componente de lado del cliente")}>
      soy del cliente
    </button>
  );
}

export default Button;
