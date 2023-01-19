import { Formik } from "formik";

// import { useState } from "react";

export function AddUserForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, username, phone } = event.target.elements;
  };

  return (
    <div className="container">
      <Formik>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="lastName">User name</label>
            <input type="text" name="username" id="lastName" required />
          </div>
          <div>
            <label htmlFor="pnone">Pnone number</label>
            <input type="text" name="phone" id="pnone" required />
          </div>
          <div className="grid">
            <button type="submit">Save</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </Formik>
    </div>
  );
}
