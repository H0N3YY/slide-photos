import React from "react";

export default function Towns(props) {
  return (
    <div className="card">
      <img className="town_image" src={props.url} alt="town image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}