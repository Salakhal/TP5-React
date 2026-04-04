import { useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';
import './App.css';

function App() {
  // Utilisateur par défaut avec des données d'exemple
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Sophie Martin',
    connecte: true,
    role: 'Admin',
    email: 'sophie.martin@exemple.com',
    membreDepuis: '2024'
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div className="app-container">
        <div className="app-header">
          <h1>🎯 React Mastery</h1>
          <p>Maîtrisez la gestion d'état comme un pro</p>
        </div>
        
        <div className="content">
          <div className="section">
            <h2>📝 Formulaire Contrôlé</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '20px', fontSize: '0.9rem' }}>
              Gestion d'état avec validation temps réel
            </p>
            <FormulaireControle />
          </div>

          <div className="section">
            <h2>📋 Formulaire Non-Contrôlé</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '20px', fontSize: '0.9rem' }}>
              Utilisation des références DOM
            </p>
            <FormulaireNonControle />
          </div>

          <div className="section">
            <h2>🌡️ Convertisseur de Température</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '20px', fontSize: '0.9rem' }}>
              Lifting State Up en action
            </p>
            <TemperatureConvertor />
          </div>

          <div className="section">
            <h2>👤 Profil Utilisateur</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '20px', fontSize: '0.9rem' }}>
              Context API pour l'état global
            </p>
            <Profil />
          </div>
        </div>
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;