import React, { useState, useEffect } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb"
import { useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";
export default function NewCard() {
  // obtains access to the browser history controls
  const history = useHistory();
  // sets the states of deck and card, card to a presupplied object
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState({front:"", back:"",});

  // grabs the deckId from the current URL (:deckId)
  const { deckId } = useParams();

  // useEffect reads the deck from the API and watches the deckId to update and rerender.
  useEffect(() => {
    const ac = new AbortController();

    async function getDeck() {
      const theDeck = await readDeck(deckId, ac.signal);
      setDeck(theDeck);
    }

    getDeck();
    return () => ac.abort();
  }, [deckId]);
  // handles the change to the form for creating new cards.
  const handleChange = ({ target }) => {
    setCard({
        ...card,
      [target.name]: target.value,
      deckId,
    });
  };
  // handles the submit event of the form, making an API request and then redirecting.
  const handleSubmit = async (event) => {
    event.preventDefault();
    await createCard(deckId, card);
    history.push(`/decks/${deck.id}`);
  };
  // HTML return of CardForm and breadcrumb, using modularity.
  return (
    <div>
      <Breadcrumb isNewCard={true} deck={deck} />
      <CardForm handleChange={handleChange} handleSubmit={handleSubmit} card={card}/>
    </div>
  );
}
