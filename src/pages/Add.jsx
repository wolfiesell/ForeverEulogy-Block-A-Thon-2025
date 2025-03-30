import React, { useState } from "react";

export default function Add() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [dod, setDod] = useState("");
  const [obituary, setObituary] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show loading screen
    setLoading(true);

    // Fake delay to simulate the process
    setTimeout(() => {
      setLoadingMessage("Compiling dist...");
      setTimeout(() => {
        setLoadingMessage("Getting CID...");
        setTimeout(() => {
          setLoadingMessage("Pinning using Pinata...");
          setTimeout(() => {
            setLoadingMessage("Success!");
            // After the success message, clear the form
            setTimeout(() => {
              // Reset form fields and hide the loading screen
              setName("");
              setDob("");
              setDod("");
              setObituary("");
              setLoading(false);
              setLoadingMessage("");
            }, 1000); // Wait a second before clearing the form
          }, 2000); // Pinning delay
        }, 2000); // CID delay
      }, 2000); // Compile delay
    }, 1000); // Initial delay to start the process
  };

  return (
    <div className="p-5 items-center">
      <h1 className="text-3xl font-bold mb-4">Add a Memorial</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-xl font-medium">
            <p>{loadingMessage}</p>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
