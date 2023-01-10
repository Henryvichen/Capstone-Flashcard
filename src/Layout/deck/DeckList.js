import React from "react";
import Deck from "./Deck";


export default function DeckList({decks}) {
  // Iterates through the supplied decks and runs them through the deck component
  const deckList = decks.map((deck) => <Deck key={deck.id} deck={deck}/>)

  // returns the deck object list
  return (
    <div className="container">
      {deckList}
    </div>
  );
}
