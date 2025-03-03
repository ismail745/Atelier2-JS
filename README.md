# Atelier 2 : JavaScript et POO

## Objectif
L’objectif principal de cet atelier est de se familiariser avec les concepts de Programmation Orientée Objet (POO) en JavaScript à travers plusieurs exercices pratiques.

## Exercice 1 : Modélisation des Voitures

1. Écrire une fonction constructeur `Voiture` avec les attributs : `modèle`, `marque`, `année`, `type`, `carburant`.
2. Créer une liste des voitures.
3. Implémenter l’héritage entre la classe `Voiture` et deux autres classes :
   - `Hyundai` avec les attributs `série` (string) et `hybride` (booléen), ainsi qu’une méthode `alarmer()`.
   - `Ford` avec un attribut `options` (tableau).
4. Trier puis afficher les voitures selon l’ordre croissant des années.

## Exercice 2 : Gestion des Étudiants et Professeurs

1. Créer deux objets natifs :
   - `Etudiant` avec les attributs `nom` (string), `prenom` (string), `age` (number), `cne` (string).
   - `Professeur` avec les attributs `nom` (string), `age` (number), `cin` (string).
2. Ajouter une méthode `etudier()` à l’objet `Etudiant`, puis ajouter une méthode `enseigner()` à l’objet `Professeur`.
3. Trier les étudiants selon l’ordre alphabétique (`nom` et `prenom`).

## Exercice 3 : Manipulation de Classes avec EcmaScript 6

1. Définir une classe `Vecteur2D` avec un constructeur fournissant des coordonnées par défaut (`x = 0` et `y = 0`).
2. Instancier plusieurs objets `Vecteur2D` et les afficher.
3. Ajouter une méthode d’affichage et une méthode pour surcharger l’addition de deux vecteurs.
4. Définir une classe `Rectangle` avec un constructeur prenant `longueur` et `largeur`, un attribut `nom = "rectangle"`, une méthode d’affichage et une méthode `surface()`.
5. Définir une classe `Carre` héritant de `Rectangle` en surchargeant `nom = "carré"`.
6. Définir une classe `Point` et une classe `Segment` composée de deux points (`orig` et `extrem`).

## Exercice 4 : Mini Blog Web App (Application Web)

### Description
Cet exercice consiste à mettre en place une application web minimaliste de type blog permettant d'ajouter et de lister des posts avec gestion des utilisateurs.

### Fonctionnalités
- Ajouter un post avec un titre, un contenu et un auteur.
- Stocker les posts sous format JSON dans `localStorage`.
- Afficher dynamiquement la liste des posts.
- Supprimer un post.
- Utiliser Bootstrap pour le style.

### Technologies utilisées
- HTML / CSS
- JavaScript (ES6+)
- Bootstrap 5

### Instructions d’exécution
1. Cloner le projet :
   ```sh
   git clone https://github.com/ismail745/Atelier2-JS.git
   ```
2. Ouvrir le fichier `index.html` dans un navigateur.

### Aperçu du Code
Le code complet de l’application web est intégré dans un seul fichier HTML contenant le JavaScript et le CSS Bootstrap.

### Auteur
Ismail Kchibal

---
**Note :** Ce projet est conçu comme un exercice pratique pour apprendre la POO en JavaScript et les bases du développement web dynamique.
