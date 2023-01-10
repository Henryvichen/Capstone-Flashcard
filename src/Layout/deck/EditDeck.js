import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateDeck, readDeck } from "../../utils/api";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import DeckForm from "./DeckForm";

export default function EditDeck() {
  // sets the initial form state
  const initialFormState = {
    name: "",
    description: "",
  };
  // obtains access to browser history controls
  const history = useHistory();
  // sets the state of the current deck to the initial form state
  // which can be updated below
  const [deck, setDeck] = useState(initialFormState);
  // grabs the deckId from the URL (:deckId)
  const { deckId } = useParams();


  

  // handles all changes to the decks name and description
  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value,
    });
  };
  // handles the submit event from clicking submit, then redirects back to the deck page
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateDeck(deck);
    history.push(`/decks/${deck.id}`);
  };
  // useEffect that grabs the deck from the API corresponding to the deckId in the URL (:deckId)
  useEffect(() => {
    const ac = new AbortController();

    async function getDeck() {
      const theDeck = await readDeck(deckId, ac.signal);
      setDeck(theDeck);
    }

    getDeck();
    return () => ac.abort();
  }, [deckId]);
  // HTML return that contains the form for the deck
  return (
    <div>
      <Breadcrumb deck={deck} isEditingDeck={true} />
      <h1>Edit Deck</h1>
      <DeckForm
        formData={deck}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
