import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";

export default function App() {
  // Tableau des participants
  const [participants, setParticipants] = useState([]);
  // Tableau des assignments
  const [assignments, setAssignments] = useState([]);
  // Etat de l'application welcome | input | assignments
  const [currentScreen, setCurrentScreen] = useState("welcome");

  // Fonction pour ajouter un participant
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  // Fonction pour supprimer un participant
  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  // Fonction pour distribuer les cadeaux
  const distributeGifts = () => {
    // S'il n'y a pas assez de participants, on affiche une alerte
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    // On mélange le tableau des participants
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    // On crée un nouveau tableau d'assignments
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    // On met à jour le state des assignments
    setAssignments(newAssignments);
    // On affiche l'écran des assignments
    setCurrentScreen("assignments");
  };

  // Fonction pour recommencer l'application
  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <div className="container mx-auto">
      <div>
        {currentScreen === "welcome" && (
          <WelcomeScreen onStart={() => setCurrentScreen("input")} />
        )}
        
        {currentScreen === "input" && (
          < div className="text-center space-y-6 bg-[var(--color-test)] text-white h-screen max-h-screen flex flex-col justify-between py-16 items-center overflow-y-hidden	sm:mx-auto">
           
            <ParticipantInput
              onAddParticipant={addParticipant}
              participants={participants}
              onRemoveParticipant={removeParticipant}
            />
            <div className="mt-6">
              <button className="button w-full" onClick={distributeGifts}>
                Distribuer les cadeaux
              </button>
            </div>
          </div>
        )}
        {currentScreen === "assignments" && (
          < div className="bg-[#2D1C18]">
 
            <AssignmentDisplay assignments={assignments} />
            
              <button  className="button-container" onClick={resetApp}>
                Recommencer
              </button>
        
          </div>
        )}
      </div>
    </div>
  );
}
