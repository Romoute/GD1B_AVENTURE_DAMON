
// ----- CLASSE SCENE_POULE -----
// Chaque classe de scene est dans un fichier different (comme en prog objet en general)

export default class scene_poule extends Phaser.Scene {

    constructor(){
        super({
            key: "scene_poule"
    });
    }

        // ----- INITIALISATION DES DONNEES DU JOUEUR -----
    // A chaque fonction changement de scene on donnera des donnees qui seront transmises a la nouvelle scene
    // pour par exemple donner la position du joueur, ses points de vie, les objets qu'il a en sa possession etc
    init(data) {

        // Position du sprite joueur
      //  this.positionX = data.x;
      //  this.positionY = data.y; 
    
    }

    preload(){
        
   

        this.load.image("Tileset", "assets/tileset_3.png");
        this.load.tilemapTiledJSON("map1", 'map/scene_3.json');
        

    }

    create(){
        
        
        const map = this.add.tilemap("map3");

        //JEU DE TUILES
        const tileset = map.addTilesetImage("tileset_3", "Tileset");
        
        


        const sol = map.createLayer(
            "sol",
            tileset
        );
     
        const trefle = map.createLayer(
            "trefle",
            tileset
        );

        const fleur = map.createLayer(
            "fleur",
            tileset
        );

        const collision = map.createLayer(
            "collision",
            tileset
        );

        const arbre_collision = map.createLayer(
            "arbre_collision",
            tileset
        );


       this.player = this.physics.add.sprite(0, 0, "carotte_face");
// ----- CAMERA -----

        // Redimensions du jeu selon le fichier Tiled
        this.physics.world.setBounds(0, 0, 0, 0);
        this.cameras.main.setBounds(0, 0, 0, 0);

        // Tracking de la caméra sur le joueur
        this.cameras.main.startFollow(this.player);


    }

}