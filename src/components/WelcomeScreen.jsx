// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6 bg-[var(--color-test)] text-white h-screen max-h-screen flex flex-col justify-between py-16 items-center overflow-y-hidden	">
      <div>
<h1 className="text-5xl font-base text-primary font-base">
  Secret Santa
</h1>      <p className="text-lg ">
        Bienvenue dans l'application Secret Santa !
      </p>
      </div>
      <img src="./welcome.png" alt="" className="bottom-left-image sm:hidden" />
      
      <button onClick={onStart} className="button-container">
      Inscrire des personnes 
    </button>

    </div>

  );
  
}