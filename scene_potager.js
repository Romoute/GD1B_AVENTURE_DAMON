
// ----- CLASSE SCENE_POTAGER -----
// Chaque classe de scene est dans un fichier different (comme en prog objet en general)

class scene_potager extends Phaser.Scene {

    constructor(){
        super("scene_potager");
    }

    // ----- INITIALISATION DES DONNEES DU JOUEUR -----
    // A chaque fonction changement de scene on donnera des donnees qui seront transmises a la nouvelle scene
    // pour par exemple donner la position du joueur, ses points de vie, les objets qu'il a en sa possession etc
    init(data) {

        // Position du sprite joueur
        this.positionX = data.x;
        this.positionY = data.y; 
    
    }


preload() {



}

create() {


    
}



}