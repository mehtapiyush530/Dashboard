import React, { useState } from 'react';

const Notes = () => {
  const [note, setNote] = useState(''); // Single note ke liye state
  const [notesList, setNotesList] = useState([]); // Notes list ke liye state

  // Note add karne ka function
  const handleAddNote = () => {
    if (note) {
      setNotesList([...notesList, note]); // Notes list me naya note add kare
      setNote(''); // Textarea clear kare
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 border-2 w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] rounded-lg shadow-lg">
        <p className="bg-gradient-to-r from-purple-400 to-purple-600 text-white font-bold text-[2rem] text-center mb-4">
          Notes
        </p>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)} // Note state update kare
          placeholder="Write your note here..."
          className="w-full rounded-md h-[10rem] my-4 px-4 border-2"
        ></textarea>

        <button
          onClick={handleAddNote}
          className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Add Note
        </button>

        <div className="mt-4">
          <h3 className="font-bold text-lg">Saved Notes:</h3>
          {notesList.map((note, index) => (
            <p key={index} className="border-b py-2">
              {note}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
