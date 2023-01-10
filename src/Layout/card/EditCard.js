import React, { useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb"
import { useParams, useHistory } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

export default function EditCard() {

  // obtains control of the browser history controls.
  const history = useHistory();
  // obtains the deckId and cardId from the url (:deckId, :cardId)
  const { deckId, cardId } = useParams();

  // sets the states of the card and deck variables
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState({});

  // useEffect gets the card and the deck and sets the states
  // also watches the id's in the URL and rerenders accordingly. prevents inifite loop
  useEffect(() => {
    const ac = new AbortController();

    async function getDeck() {
      const theDeck = await readDeck(deckId, ac.signal);
      setDeck(theDeck);
    }
    async function getCard() {
      const theCard = await readCard(cardId, ac.signal);
      setCard(theCard);
    }
    getCard();
    getDeck();

    return () => ac.abort();
  }, [deckId, cardId]);

  // handles any change to the edit
  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  // handles the submit of the cardform and redirects to the deckId deck page.
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateCard(card);
    history.push(`/decks/${deck.id}`);
  };
  
  // HTML return that displays the breadcrumb and card form component.
  return (
    <div>
      <Breadcrumb isEditingCard={true} deck={deck} cardId={cardId} />
      <h3>Edit Card</h3>
      <CardForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        card={card}
      />
    </div>
  );
}
