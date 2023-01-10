import Header from "./home/Header";
import NotFound from "./home/NotFound";
import Home from "./home/Home";
import CreateDeck from "./deck/CreateDeck";
import {Switch, Route} from "react-router-dom";
import React from "react";
import StudyDeck from "./deck/StudyDeck";
import DeckView from "./deck/DeckView";
import EditDeck from "./deck/EditDeck";
import NewCard from "./card/NewCard";
import EditCard from "./card/EditCard";

function Layout() {


  return (
    <>
      <Header />

      <div className="container">
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/decks/new">
            <CreateDeck/>
          </Route>

          <Route exact path="/decks/:deckId">
            <DeckView/>
          </Route>

          <Route exact path="/decks/:deckId/edit">
            <EditDeck/>
          </Route>

          <Route exact path="/decks/:deckId/study">
            <StudyDeck/>
          </Route>

          <Route exact path="/decks/:deckId/cards/new">
            <NewCard/>
          </Route>

          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard/>
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </>
  );
}

export default Layout;
