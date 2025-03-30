import React, { useState } from "react";

export default function Add() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [dod, setDod] = useState("");
  const [obituary, setObituary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data to the console
    console.log("Form submitted", { name, dob, dod, obituary });
  };

  return (
    <div className="p-5 items-center">
      <h1 className="text-3xl font-bold mb-4">Add a Memorial</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Name of the Deceased
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="dob" className="block text-lg font-medium mb-2">
            Date of Birth (DOB)
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="dod" className="block text-lg font-medium mb-2">
            Date of Death (DOD)
          </label>
          <input
            type="date"
            id="dod"
            value={dod}
            onChange={(e) => setDod(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="obituary" className="block text-lg font-medium mb-2">
            Obituary Text
          </label>
          <textarea
            id="obituary"
            value={obituary}
            onChange={(e) => setObituary(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows="6"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          Submit Memorial
        </button>
      </form>
    </div>
  );
}
