import React from "react";

const ComboList = ({ combos = [], handleAddCombo, handleAddMoreCombo }) => {
  return (
    <div>
      {combos.map((combo) => (
        <div key={combo.id}>
          <span>{combo.name} - ${combo.price}</span>
          <button onClick={() => handleAddCombo(combo)}>Agregar</button>
          <button onClick={() => handleAddMoreCombo(combo)}>Agregar más</button>
        </div>
      ))}
    </div>
  );
};

export default ComboList;
