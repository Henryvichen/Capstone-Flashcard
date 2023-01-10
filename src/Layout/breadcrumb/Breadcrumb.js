import { Link } from "react-router-dom";
import React from "react";

export default function Breadcrumb({ deck, isEditingDeck, isViewing, isStudying, isCreating, isNewCard, isEditingCard, cardId }) {
  

  // breadcrumb to stop loops
  
  
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        {isViewing && 
          (
            <>
              
              <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
            </>
          ) 
        }
        {
          isEditingDeck && 
          (
            <>
              <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
              <li className="breadcrumb-item active">Edit Deck</li>
            </>
          )
        }
        {
          isStudying &&
          (
            <>
              <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
              <li className="breadcrumb-item active">Study</li>
            </>
          )
        }
        {
          isCreating &&
          (
            <>
              <li className="breadcrumb-item active">Create Deck</li>
            </>
          )
        }
        {
          isNewCard &&
          (
            <>
              <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
              <li className="breadcrumb-item active">Add Card</li>
            </>
          )
        }
        {
          isEditingCard &&
          (
            <>
              <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
              <li className="breadcrumb-item active">Edit Card {cardId}</li>
            </>
          )
        }
      </ol>
    </nav>
  );
}
