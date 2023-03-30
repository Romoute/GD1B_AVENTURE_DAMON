
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

    preload(){
        
        this.load.spritesheet('carotte_face', 'assets/carotte_face.png',
            { frameWidth: 32, frameHeight: 64});
        this.load.spritesheet('carotte_dos', 'assets/carotte_dos.png',
            { frameWidth: 32, frameHeight: 64});    
        this.load.spritesheet('carotte_gauche', 'assets/carotte_gauche.png',
            { frameWidth: 32, frameHeight: 64});
        this.load.spritesheet('carotte_droite', 'assets/carotte_droite.png',
            { frameWidth: 32, frameHeight: 64});     
            this.load.spritesheet('carotte_face_econome', 'assets/carotte_face_econome.png',
            { frameWidth: 48, frameHeight: 80});
        this.load.spritesheet('carotte_dos_econome', 'assets/carotte_dos_econome.png',
            { frameWidth: 48, frameHeight: 80});    
        this.load.spritesheet('carotte_gauche_econome', 'assets/carotte_gauche_econome.png',
            { frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('carotte_droite_econome', 'assets/carotte_droite_econome.png',
            { frameWidth: 64, frameHeight: 64});   
        this.load.spritesheet('pdt_face_econome', 'assets/pdt_face_econome.png',
            { frameWidth: 32, frameHeight: 48});
        
        this.load.image('econome', 'assets/econome.png');

        this.load.image("Tileset", "assets/tileset_1.png");
        this.load.tilemapTilemapTiledJSON("map", 'map/scene_1.tmj');
        

    }

    create(){
        
        //CREATION MAP ET TILESET
        this._tilemap = this.add.tilemap("map");
        this._tileset = this._tilemap.addTilesetImage("tileset_1");




        //COLLISIONS TILESET



    }

}