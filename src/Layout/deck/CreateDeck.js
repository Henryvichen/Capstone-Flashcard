import React, { useState } from "react";
import { createDeck } from "../../utils/api";
import { Link, useHistory } from "react-router-dom";
import Breadcrumb from "../breadcrumb/Breadcrumb";

export default function CreateDeck() {
  // set initial form state for use in formData useState
  const initialFormState = {
    name: "",
    description: "",
  };
  // delcare use states for formData
  const [formData, setFormData] = useState({ ...initialFormState });
  // obtains access to browser history controls
  const history = useHistory();

  //handles changes to the form inputs
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // handles submit of deck form
  const handleSubmit = async (event) => {
      event.preventDefault();
      const newDeck = await createDeck(formData);
      history.push(`/decks/${newDeck.id}`)
  }



  return (
    <div>
      <Breadcrumb isCreating={true}/>

      <h1>Create Deck</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Deck Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            placeholder="Brief description of the deck"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <Link to={"/"}><button className="btn btn-secondary">Cancel</button></Link>
        <button className="btn btn-primary" type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
