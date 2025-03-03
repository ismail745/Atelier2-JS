// Exercice 2: Étudiant et Professeur
class Etudiant {
    constructor(nom, prenom, age, cne) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.cne = cne;
    }
    etudier() {
        console.log(`${this.nom} ${this.prenom} étudie.`);
    }
}

class Professeur {
    constructor(nom, age, cin) {
        this.nom = nom;
        this.age = age;
        this.cin = cin;
    }
    enseigner() {
        console.log(`${this.nom} enseigne.`);
    }
}

let etudiants = [
    new Etudiant("Ali", "Mehdi", 21, "CNE123"),
    new Etudiant("Zahra", "Omar", 22, "CNE456"),
    new Etudiant("Amine", "Khalid", 20, "CNE789")
];

etudiants.sort((a, b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom));
console.log(etudiants);

