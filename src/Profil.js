import { useContext, useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);
  const [loginNom, setLoginNom] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Exemple: Liste d'utilisateurs prédéfinis
  const utilisateursExemples = [
    { nom: 'Sophie Martin', role: 'Admin' },
    { nom: 'Thomas Bernard', role: 'Utilisateur' },
    { nom: 'Julie Petit', role: 'Modérateur' },
    { nom: 'Nicolas Durand', role: 'Utilisateur' }
  ];

  const deconnexion = () => {
    setUtilisateur({ nom: '', connecte: false, role: '' });
  };

  const connexion = (nomUtilisateur) => {
    if (nomUtilisateur.trim()) {
      const userExists = utilisateursExemples.find(u => u.nom === nomUtilisateur);
      setUtilisateur({ 
        nom: nomUtilisateur.trim(), 
        connecte: true,
        role: userExists ? userExists.role : 'Invité'
      });
      setLoginNom('');
      setShowLoginForm(false);
    }
  };

  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bonjour';
    if (hour < 18) return 'Bon après-midi';
    return 'Bonsoir';
  };

  return (
    <div className="profile-card">
      {utilisateur.connecte ? (
        <div className="welcome-message">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>
              {utilisateur.nom.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                {getWelcomeMessage()},
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                <span className="user-name">{utilisateur.nom}</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#667eea', marginTop: '4px' }}>
                {utilisateur.role}
              </div>
            </div>
          </div>
          <button onClick={deconnexion} className="logout-btn">
            🚪 Se déconnecter
          </button>
        </div>
      ) : (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🔒</div>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Vous n'êtes pas connecté</p>
          </div>
          
          {/* Exemples d'utilisateurs */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '10px' }}>
              👥 Exemples d'utilisateurs:
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {utilisateursExemples.map(user => (
                <button
                  key={user.nom}
                  onClick={() => connexion(user.nom)}
                  style={{ 
                    padding: '6px 12px', 
                    fontSize: '0.85rem',
                    background: 'rgba(102, 126, 234, 0.3)'
                  }}
                >
                  {user.nom}
                </button>
              ))}
            </div>
          </div>
          
          {!showLoginForm ? (
            <button onClick={() => setShowLoginForm(true)} className="login-btn" style={{ width: '100%' }}>
              🔑 Se connecter avec un autre compte
            </button>
          ) : (
            <div className="login-form">
              <input
                type="text"
                value={loginNom}
                onChange={(e) => setLoginNom(e.target.value)}
                placeholder="Entrez votre nom (ex: Pierre Dubois)"
                onKeyPress={(e) => e.key === 'Enter' && connexion(loginNom)}
              />
              <button onClick={() => connexion(loginNom)}>✅ Valider</button>
              <button onClick={() => setShowLoginForm(false)} style={{ background: 'rgba(255,255,255,0.1)' }}>
                ❌ Annuler
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* Statistiques si connecté */}
      {utilisateur.connecte && (
        <div style={{ 
          marginTop: '20px', 
          paddingTop: '20px', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.5)'
        }}>
          📊 Dernière connexion: {new Date().toLocaleString()}
        </div>
      )}
    </div>
  );
}

export default Profil;