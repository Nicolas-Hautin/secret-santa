import { useState } from "react";
import Snowfall from "react-snowfall";

export function AssignmentDisplay({ assignments }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = () => {
    if (currentIndex < assignments.length - 1) {
      setCurrentIndex(currentIndex + 1); // Aller au suivant
    } else if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Aller au précédent
    }
  };

  const isLastAssignment = currentIndex === assignments.length - 1;
  const isFirstAssignment = currentIndex === 0;

  const currentAssignment = assignments[currentIndex];

  return (
    <Snowfall>
    <div className="flex flex-col items-center bg-[#2D1C18] text-white h-screen py-10">
      <h1 className="text-4xl font-bold mb-6">Attributions des cadeaux</h1>

      {/* Affichage de l'attribution courante */}
      <div className="bg-[#FDF1E5] text-[#2D1C18] w-80 rounded-lg shadow-lg p-6 text-center space-y-4">
        <p className="text-lg">
          <span className="font-bold text-[#E0865F]">{currentAssignment.giver}</span>
          <span className="text-sm"> offre un cadeau à </span>
          <span className="font-bold text-[#E0865F]">{currentAssignment.receiver}</span>
        </p>
      </div>

      {/* Bouton centré */}
      <div className="mt-6">
        <button
          onClick={handleNavigation}
          className={`px-6 py-3 rounded-lg text-white font-bold ${
            isLastAssignment
              ? "bg-red-700 hover:bg-red-900"
              : "bg-red-700 hover:bg-red-900"
          }`}
        >
          {isLastAssignment ? "Retour au début" : "Suivant"}
        </button>
      </div>

      {/* Décoration */}
      <div className="mt-auto">
        <img
          src="./cadeau.png"
          alt="Gift Decoration"
          className="w-32 mx-auto"
        />
      </div>
    </div>
    </Snowfall>
  );
}
