import { useRef, useState } from 'react';

function FormulaireNonControle() {
  const nomRef = useRef();
  const emailRef = useRef();
  const telephoneRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(null);

  // Exemple: Données pré-remplies pour démonstration
  const prefillExample = () => {
    nomRef.current.value = 'Marie Martin';
    emailRef.current.value = 'marie.martin@email.com';
    telephoneRef.current.value = '0698765432';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nom = nomRef.current.value;
    const email = emailRef.current.value;
    const telephone = telephoneRef.current.value;
    
    if (nom && email) {
      const submission = { nom, email, telephone };
      setLastSubmission(submission);
      setSubmitted(true);
      alert(`✅ Formulaire soumis !\n\n👤 Nom: ${nom}\n📧 Email: ${email}\n📞 Téléphone: ${telephone || 'Non fourni'}`);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert('⚠️ Veuillez remplir au moins le nom et l\'email');
    }
  };

  const handleReset = () => {
    if (nomRef.current) nomRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
    if (telephoneRef.current) telephoneRef.current.value = '';
    setLastSubmission(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" ref={nomRef} placeholder="👤 Nom complet (ex: Marie Martin)" defaultValue="Marie Martin" />
        </div>
        <div className="form-group">
          <input type="email" ref={emailRef} placeholder="📧 Adresse email (ex: nom@domaine.com)" defaultValue="marie.martin@email.com" />
        </div>
        <div className="form-group">
          <input type="tel" ref={telephoneRef} placeholder="📞 Téléphone (optionnel)" />
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button type="submit">📤 Envoyer</button>
          <button type="button" onClick={handleReset} style={{ background: 'rgba(255,255,255,0.1)' }}>
            🔄 Réinitialiser
          </button>
          <button type="button" onClick={prefillExample} style={{ background: 'rgba(72, 187, 120, 0.3)' }}>
            📝 Exemple
          </button>
        </div>
      </form>
      {submitted && lastSubmission && (
        <div style={{ 
          marginTop: '20px', 
          padding: '12px', 
          background: 'rgba(72, 187, 120, 0.2)', 
          borderRadius: '12px', 
          color: '#48bb78',
          border: '1px solid rgba(72, 187, 120, 0.3)',
          textAlign: 'center'
        }}>
          ✨ Formulaire soumis avec succès !
        </div>
      )}
      {lastSubmission && !submitted && (
        <div style={{ 
          marginTop: '20px', 
          padding: '12px', 
          background: 'rgba(102, 126, 234, 0.2)', 
          borderRadius: '12px',
          fontSize: '0.9rem'
        }}>
          📋 Dernier envoi: {lastSubmission.nom} - {lastSubmission.email}
        </div>
      )}
    </div>
  );
}

export default FormulaireNonControle;