// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6 bg-[#2D1C18] text-white h-screen max-h-screen flex flex-col justify-between py-16 items-center overflow-y-hidden	sm:mx-auto">
      <div>
<h1 className="text-6xl font-base text-primary ">
  Secret Santa
</h1>      <p className="text-lg">
        Bienvenue dans l'application Secret Santa !
      </p>
      </div>
      <img src="./welcome.png" alt="" className="bottom-left-image sm:mx-auto" />
      
      <button onClick={onStart}  className="flex justify-center items-center px-6 pt-12 bg-red-700 text-white rounded-full hover:bg-red-800 transition-transform transform hover:scale-110 shadow-lg button-container whitespace-nowrap"
>
      Inscrire des personnes 
    </button>

    </div>

  );
  
}