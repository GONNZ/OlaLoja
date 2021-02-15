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
              1- Tomale captura de pantalla a las piezas que deseas comprar
            </p>
            <p>2- Envianos la captura de pantalla a nuestro DM en instagram @olaloja.cr 
              o a nuestro WhastApp +506 60506235</p>
            <p>3- Escoges el método de envío Y método de pago </p>
          </div>

          <div className="info">
            <p>4- Nos envias la foto del comprobante de pago y tus datos personales</p>
            <p>5- Tu pedido se envía en la fecha que se indica</p>
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
