import React from "react";
import Card from "./Card";

export default function CardList({cards}) {
  // iterates through the cards supplied to the component, and runs them through the Card component
  const cardList = cards?.map((card) => <Card card={card} id={card.id} key={card.id}/>)
  
  // HTML return of list for studying
  return (

    <div style={{listStyleType:"none"}}>
        {cardList}
    </div>   
  )
}
