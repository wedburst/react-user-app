import React from "react";
import Map from "../map/Map";
import "./styles.scss";

const CardUi = ({ data }) => {
  const { name, username, email, phone, website, address } = data;
  console.log(data);
  return (
    <div className="card-box">
      <div className="card-box__name">{name}</div>
      <div className="card-box__flex">
        <div>
          <div className="card-box__items">
            <span>UserName:</span> {username}
          </div>
          <div className="card-box__items">
            <span>Correo:</span> <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="card-box__items">
            <span>Telefono:</span> {phone}
          </div>
          <div className="card-box__items">
            <span>WebSite:</span> {website}
          </div>
          <div className="actions">
            <div className="actions__editar">Editar</div>
            <div className="actions__eliminar">Eliminar</div>
          </div>
        </div>

        <div>
          <Map data={address.geo} city={address.city} street={address.street} />
          <div className="card-box__code">
            <div className="card-box__items">
              <span>Suite:</span> {address.suite}
            </div>
            <div className="card-box__items">
              <span>Zipcode:</span> {address.zipcode}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUi;
