// import { useState } from "react";

export function AddUserForm() {
  return (
    <div className="container">
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="lastName">User name</label>
          <input type="text" id="lastName" required />
        </div>
        <div>
          <label htmlFor="pnone">Pnone number</label>
          <input type="text" id="pnone" required />
        </div>
        <div className="grid">
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}
