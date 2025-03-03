// Exercice 1: Voitures et Héritage
class Voiture {
    constructor(model, marque, annee, type, carburant) {
        this.model = model;
        this.marque = marque;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;
    }
}

class Hyundai extends Voiture {
    constructor(model, annee, type, carburant, serie, hybride) {
        super(model, "Hyundai", annee, type, carburant);
        this.serie = serie;
        this.hybride = hybride;
    }
    alarmer() {
        console.log(`La Hyundai ${this.model} est en alarme!`);
    }
}

class Ford extends Voiture {
    constructor(model, annee, type, carburant, options) {
        super(model, "Ford", annee, type, carburant);
        this.options = options;
    }
}

let voitures = [
    new Hyundai("i30", 2021, "Berline", "Essence", "Serie X", true),
    new Ford("Mustang", 2019, "Sport", "Essence", ["GPS", "Sièges chauffants"]),
    new Hyundai("Tucson", 2023, "SUV", "Diesel", "Serie Y", false)
];

voitures.sort((a, b) => a.annee - b.annee);
console.log(voitures);