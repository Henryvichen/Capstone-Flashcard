import React, { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch, useHistory } from "react-router-dom";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { deleteDeck, readDeck } from "../../utils/api";
import CardList from "../card/CardList";

export default function DeckView() {
  // obtains access to browser history controls
  const history = useHistory();
  // grabs the deckId in the url (:deckId)
  const { deckId } = useParams();
  // initializes state for deck
  const [deck, setDeck] = useState([]);
  // grabs the current url for use below
  const {url} = useRouteMatch();
  
  // useEffect reads the deck from the API and sets the current state of the deck
  // Watches the deckId in the URL so rerenders can happen
  useEffect(() => {
    const ac = new AbortController();

    async function getDeck() {
      const theDeck = await readDeck(deckId, ac.signal);
      setDeck(theDeck);
    }

    getDeck();
    return () => ac.abort();
  },[deckId]);

  // delete handler for deck deletion then redirects
  const deleteHandler = async () => {
    const resp = window.confirm("Are you sure you want to delete this deck?");
    if(resp){
      deleteDeck(deckId);
      history.push("/")
    }
    
  }

  // main HTML return of Cards
  return (
    <div id={"deck-view"}>
      <Breadcrumb deck={deck} isViewing={true} />
      <h3>{deck.name}</h3>
      <p>{deck.description}</p>
      <Link to={`${url}/edit`}><button className="btn btn-secondary">Edit</button></Link>
      <Link to={`${url}/study`}><button className="btn btn-primary">Study</button></Link>
      <Link to={`${url}/cards/new`}><button className="btn btn-primary">Add Cards</button></Link>
      <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>

      <div id={"card-view"}>
        <h2>Cards</h2>
        <ul>
          <CardList cards={deck.cards}/>
        </ul>
      </div>

    </div>
  );
}
