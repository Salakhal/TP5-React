import { useState } from 'react';

function FormulaireControle() {
  // Exemple: Données pré-remplies pour démonstration
  const [formData, setFormData] = useState({
    nom: 'Jean Dupont',
    email: 'jad.alami@email.com',
    telephone: '0612345678',
    age: '28'
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide (ex: nom@domaine.com)';
    if (formData.telephone && !/^[0-9]{10}$/.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = 'Téléphone invalide (10 chiffres)';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      alert(`✅ Formulaire soumis !\n\n👤 Nom: ${formData.nom}\n📧 Email: ${formData.email}\n📞 Téléphone: ${formData.telephone || 'Non fourni'}\n🎂 Âge: ${formData.age || 'Non fourni'}`);
      // Optionnel: Réinitialiser après soumission
      // setFormData({ nom: '', email: '', telephone: '', age: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="👤 Nom complet (ex: Jean Dupont)"
          style={{ borderColor: errors.nom ? '#f56565' : '' }}
        />
        {errors.nom && <small>{errors.nom}</small>}
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="📧 Adresse email (ex: nom@domaine.com)"
          style={{ borderColor: errors.email ? '#f56565' : '' }}
        />
        {errors.email && <small>{errors.email}</small>}
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="📞 Téléphone (ex: 0612345678)"
          style={{ borderColor: errors.telephone ? '#f56565' : '' }}
        />
        {errors.telephone && <small>{errors.telephone}</small>}
      </div>
      <div className="form-group">
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="🎂 Âge (ex: 25)"
        />
      </div>
      <button type="submit">✨ Envoyer</button>
    </form>
  );
}

export default FormulaireControle;