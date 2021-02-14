import React from "react";
import "../../App.css";

export default function Services() {
  return (
    <>
      <div className="orders">
        <h1>¿Cómo ordenar?</h1>

        <div className="container">
          <div className="info">
            <p>
              1- Selecciona las piezas que deseas comprar y consulta su
              disponibilidad
            </p>
            <p>2- Escoge el método de envío</p>
            <p>3- Realiza el pago en una de nuestras cuentas</p>
          </div>

          <div className="info">
            <p>4- Envíanos foto del comprobante y tus datos personales</p>
            <p>5- Tu pedido se envía inmediatamente</p>
            <p>6- Listo, recibí y lucí tu pieza</p>
          </div>

          <div className="info">
            <img src="../images/Orders.jpg" alt="info"></img>
          </div>
        </div>
      </div>
    </>
  );
}
