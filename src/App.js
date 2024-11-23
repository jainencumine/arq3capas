import React, { useState } from "react";
import ComboList from "./components/ComboList";
import Pedidos from "./components/Pedidos";
import combosDisponibles from "./data/combos";
import { agregarCombo, confirmarPedido } from "./services/pedidoService";
import "./App.css";

const App = () => {
  const [pedidoActual, setPedidoActual] = useState([]);
  const [pedidosConfirmados, setPedidosConfirmados] = useState([]);
  const [mesa, setMesa] = useState(""); // Estado para la mesa

  // Función para agregar combos al pedido actual
  const handleAddCombo = (combo) => {
    setPedidoActual(agregarCombo(pedidoActual, combo));
  };

  // Función para agregar más combos al pedido
  const handleAddMoreCombo = (combo) => {
    setPedidoActual(agregarCombo(pedidoActual, combo));
  };

  // Función para eliminar un combo del pedido
  const handleEliminar = (index) => {
    const nuevoPedido = [...pedidoActual];
    nuevoPedido.splice(index, 1);
    setPedidoActual(nuevoPedido);
  };

  // Función para confirmar el pedido
  const handleConfirmar = () => {
    if (mesa.trim() !== "" && pedidoActual.length > 0) {
      const nuevosPedidosConfirmados = confirmarPedido(pedidosConfirmados, mesa, pedidoActual);
      setPedidosConfirmados(nuevosPedidosConfirmados);
      setPedidoActual([]); // Limpiar el pedido actual
      setMesa(""); // Limpiar la mesa después de confirmar
    } else {
      alert("Debe ingresar un número de mesa y tener items en el pedido");
    }
  };

  return (
    <div className="App">
      <h1>APP MOZO EXPRESS</h1>
      
      <ComboList
        combos={combosDisponibles}
        handleAddCombo={handleAddCombo}
        handleAddMoreCombo={handleAddMoreCombo}
      />
      <Pedidos
        pedidoActual={pedidoActual}
        pedidosConfirmados={pedidosConfirmados}
        onEliminar={handleEliminar}
        onConfirmar={handleConfirmar}
        mesa={mesa}
        setMesa={setMesa}
      />
    </div>
  );
};

export default App;
