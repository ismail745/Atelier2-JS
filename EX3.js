// Exercice 3: Vecteur2D
class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    afficher() {
        console.log(`Vecteur2D(${this.x}, ${this.y})`);
    }
    additionner(v) {
        return new Vecteur2D(this.x + v.x, this.y + v.y);
    }
}

let v1 = new Vecteur2D();
let v2 = new Vecteur2D(3, 4);
v1.afficher();
v2.afficher();
let v3 = v1.additionner(v2);
v3.afficher();