import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./CardDealer.css";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

export default function CardDealer() {
  const [id, setId] = useState("");
  const [cards, setCard] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/new/shuffle/`).then((resp) =>
      resp.json().then((data) => setId(data.deck_id))
    );
  }, []);
  const handleClick = () => {
    const url = `${API_BASE_URL}/${id}/draw/`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.remaining === 0) {
          throw Error("No more cards left");
        } else {
          setCard([...cards, data.cards[0]]);
        }
      })
      .catch((error) => {
        alert(error);
        return;
      });
  };
  const cardComponents = cards.map((card) => {
    return <Card key={card.code} id={card.code} image={card.image} />;
  });
  return (
    <>
      <div className="Deck">
        <p className="Deck-title">♦ Card Dealer ♦</p>
        <p className="Deck-subtitle">♦ A little demo made with React ♦</p>

        <button onClick={handleClick}>Get Card</button>
        <div className="Deck-cardarea">{cardComponents}</div>
      </div>
    </>
  );
}
