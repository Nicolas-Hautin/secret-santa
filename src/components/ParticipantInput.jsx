import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    if (currentName.trim() !== "") {
      onAddParticipant(currentName.trim());
      setCurrentName("");
    }
  };
  return (
    <div className="flex flex-col items-center h-screen text-white relative">
      <h1 className="text-6xl mb-6 font-base">Secret Santa</h1>

      <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-[#2D1C18] z-10">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Ajoutez les participants
        </h2>

        <div className="flex items-center mb-4">
          <input
            type="text"
            className="flex-1 py-2 px-4 rounded-full bg-red-700 border-0 focus:outline-none text-white placeholder-white"
            placeholder="Entrer le nom"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addParticipant()}
          />
          <button
            onClick={addParticipant}
            className="flex justify-center items-center w-10 h-10 ml-2 p-2 bg-red-700 rounded-full hover:bg-red-800 transition"
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>


        <div className="relative max-h-48 overflow-y-scroll scrollbar-custom">
          <ul className="space-y-2">
            <h3 className="text-sm text-left  font-semibold mb-2">
              Liste des participants :
            </h3>
            {participants.map((name, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-red-700 text-white pl-3 rounded-full -pr-2"
              >
                <span>{name}</span>
                <button
                  onClick={() => onRemoveParticipant(index)}
                  className="bg-white w-10 h-10 rounded-full flex justify-center items-center hover:text-gray-300"
                >
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L5 6L1 1"
                      stroke="black"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 11L5 6L9 1"
                      stroke="black"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>


      <img
        src="./participant.png"
        alt=""
        className="absolute -bottom-10 object-cover"
      />
    </div>
  );
}
