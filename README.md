# TP5 - Découvrir la gestion de l'état et la structuration des composants React

## 🎯 Objectifs du TP

Ce TP vous apprend à :
- ✅ Créer des formulaires contrôlés et non-contrôlés
- ✅ Partager des données entre des composants parents/enfants
- ✅ Utiliser le contexte React (Context API) pour gérer des informations globales
- ✅ Maîtriser les hooks useState, useRef, useContext
- ✅ Implémenter le Lifting State Up

## 📋 Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn
- Connaissances de base en JavaScript et React

## 🚀 Installation

### 1. Créer le projet React

```bash
npx create-react-app tp5-react-debutant
cd tp5-react-debutant
```
## 2. Remplacer les fichiers
Remplacez le contenu du dossier `src/` par les fichiers fournis dans ce TP.

## 3. Démarrer l'application
```
npm start
```
L'application s'ouvrira automatiquement sur `http://localhost:3000`

## 📁 Structure du projet
```

tp-react-debutant/
├── public/
│   └── index.html
├── src/
│   ├── App.js                 # Composant principal
│   ├── App.css                # Styles principaux
│   ├── index.js               # Point d'entrée
│   ├── index.css              # Styles globaux
│   ├── FormulaireControle.js  # Formulaire contrôlé
│   ├── FormulaireNonControle.js # Formulaire non-contrôlé
│   ├── TemperatureInput.js    # Composant input température
│   ├── TemperatureConvertor.js # Convertisseur de température
│   ├── UtilisateurContext.js  # Contexte utilisateur
│   └── Profil.js              # Composant profil utilisateur
├── package.json
└── README.md

```
## 📚 Explication des concepts

### 1. Formulaire Contrôlé

Les formulaires contrôlés utilisent l'état React pour gérer les valeurs des champs.

**Caractéristiques :**
- Les données sont stockées dans le state
- Validation en temps réel
- Contrôle total des entrées utilisateur
- Mise à jour immédiate de l'interface

```jsx
const [nom, setNom] = useState('');
<input value={nom} onChange={(e) => setNom(e.target.value)} />
```


### 2. Formulaire Non-Contrôlé

Les formulaires non-contrôlés utilisent des références (refs) pour lire les valeurs directement depuis le DOM.

**Caractéristiques :**

- Utilisation de useRef
- Performance légèrement meilleure
- Plus simple pour les formulaires simples
- Moins de re-rendus

```jsx
const nomRef = useRef();
<input ref={nomRef} />
const valeur = nomRef.current.value;

```




## 📺 Vidéo de Démo
 la démonstration vidéo de l'application :


https://github.com/user-attachments/assets/051d5b9c-c80d-45c9-a888-454ff82b1f4f



## 👤 Auteur

* **École Normale Supérieure de Marrakech**
  
* **Réalisé par :** SALMA LAKHAL
  
* **Filière  :** CLE_INFO_S5

  
* **Encadré par :** Pr. Mohamed LACHGAR

* **Module :** `Développement Front-End moderne avec React`
