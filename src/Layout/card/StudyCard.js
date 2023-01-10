import React from "react";

export default function StudyCard({card, isFlipped, length, flipHandler, currentPos, nextCardHandler}) {
  
  // HTML return, using ternary and conditional logic to determine what state the user is in and display accordingly
  return (
    <div className="card" style={{ width: "500px" }}>
      <div className="card-body container">
          <h4>Card {currentPos} of {length}</h4>
        <div className="row">
          <div className="col">
            <p className="card-text">
                {isFlipped ? card.back : card.front}
            </p>
            <button className="btn btn-secondary" onClick={flipHandler}>Flip</button>
            {isFlipped && (<button className="btn btn-primary" onClick={nextCardHandler}>Next</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}
