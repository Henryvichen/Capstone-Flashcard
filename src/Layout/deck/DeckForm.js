import React from "react";
import { Link } from "react-router-dom";
export default function DeckForm({handleSubmit, formData, handleChange}) {


  // Form component for deck creation
  return (
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

      <Link to={"/"}>
        <button className="btn btn-secondary">Cancel</button>
      </Link>
      <button className="btn btn-primary" type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
