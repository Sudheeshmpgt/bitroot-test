import React, { useState } from "react";
import "../styles/card.css";
import Modal from "./Modal";

function Card({ value, handleBackground }) {
  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);
  const dateString = new Date(value.date * 1000).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleSwitch = () => {
    setState(!state);
    handleBackground();
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="card">
      <div id="card">
        {state ? (
          <p className="imageThumb">
            <img
              className="image"
              src={value.thumbnail.small}
              alt="Img Small"
            ></img>
            <span>
              <a onClick={handleModal} className="button" type="button">
                Learn More
              </a>
            </span>
          </p>
        ) : (
          <p>
            <img
              className="image"
              src={value.thumbnail.large}
              alt="Img Large"
            ></img>
            <span>
              <a onClick={handleModal} className="button" type="button">
                Learn More
              </a>
            </span>
          </p>
        )}
      </div>
      <div className="radio">
        <label>
          <input onClick={handleSwitch} type="radio" checked={!state}></input>
          <span className="circle"></span>
        </label>
        <label>
          <input onClick={handleSwitch} type="radio" checked={state}></input>
          <span className="circle"></span>
        </label>
      </div>
      <div className="card-detail">
        <h3>{value.title}</h3>
        <p className="content">{value.content}</p>
        <div className="foot-detail">
          <p>
            {value.author.name} - {value.author.role}
          </p>
          <p>{dateString}</p>
        </div>
      </div>
      <div className="learn-more">
        <a className="button" type="button">
          Learn More
        </a>
      </div>
      {modal && (
        <div className="backdrop-Landing">
          <Modal value={value} handleModal={handleModal} />
        </div>
      )}
    </div>
  );
}

export default Card;
