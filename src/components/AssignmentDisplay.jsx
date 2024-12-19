import { useState } from "react";

export function AssignmentDisplay({ assignments }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = () => {
    setCurrentIndex((prevIndex) =>
      currentIndex === assignments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentAssignment = assignments[currentIndex];

  return (
    <div className="flex flex-col items-center text-white max-h-screen ">
             <h1 className="text-6xl mb-6 font-base">
        Attributions des cadeaux
      </h1>
<div className="flex flex-col items-center text-white">
      <div className="bg-white text-black w-80 rounded-lg shadow-lg p-6 text-center space-y-4">
        <p className="text-lg">
          <span className="font-bold text-red-700">
            {currentAssignment.giver}
          </span>
          <span className="text-sm"> offre un cadeau à </span>
          <span className="font-bold text-red-700">
            {currentAssignment.receiver}
          </span>
        </p>
      </div>

      {/* Bouton de navigation */}
      <div className="mt-6 z-10">
        <button
          onClick={handleNavigation}
          className="px-6 py-3 bg-red-700 rounded-full text-white font-bold hover:bg-red-800 transition-transform transform hover:scale-105"
        >
          {currentIndex === assignments.length - 1
            ? "Retour au début"
            : "Suivant"}
        </button>
      </div>
      </div>
      {/* Décoration */}

   <img
        src="./cadeau.png"
        alt=""
        className="absolute bottom-0 object-cover"
      />
    </div>
  );
}
