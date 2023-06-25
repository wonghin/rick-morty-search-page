import React from "react";
import "./style.css";

type Props = {
  icon: string;
  name: string;
  species: string;
  id: number;

};

export const ContactBox = (props: Props) => {
  return (
    <div className="contactBox-container" key={props.id}>
      <div className="contactBox-image-container">
        <img className="contacBox-icon" src={props.icon} />
      </div>
      <div className="contactBox-details-container">
        <div className="contactBox-characterName">{props.name}</div>
        <div className="contacBox-species">species: {props.species}</div>
      </div>
    </div>
  );
};
