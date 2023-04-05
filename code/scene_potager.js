
// ----- CLASSE SCENE_POTAGER -----
// Chaque classe de scene est dans un fichier different (comme en prog objet en general)

export default class scene_potager extends Phaser.Scene {

    constructor(){

        super({
            key: "scene_potager"
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
        
        this.load.spritesheet('carotte_face', 'assets/animation_carotte/carotte_face.png',
            { frameWidth: 32, frameHeight: 64});
        this.load.spritesheet('carotte_dos', 'assets/animation_carotte/carotte_dos.png',
            { frameWidth: 32, frameHeight: 64});    
        this.load.spritesheet('carotte_gauche', 'assets/animation_carotte/carotte_gauche.png',
            { frameWidth: 32, frameHeight: 64});
        this.load.spritesheet('carotte_droite', 'assets/animation_carotte/carotte_droite.png',
            { frameWidth: 32, frameHeight: 64});     
            this.load.spritesheet('carotte_face_econome', 'assets/animation_carotte_econome/carotte_face_econome.png',
            { frameWidth: 48, frameHeight: 80});
        this.load.spritesheet('carotte_dos_econome', 'assets/animation_carotte_econome/carotte_dos_econome.png',
            { frameWidth: 48, frameHeight: 80});    
        this.load.spritesheet('carotte_gauche_econome', 'assets/animation_carotte_econome/carotte_gauche_econome.png',
            { frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('carotte_droite_econome', 'assets/animation_carotte_econome/carotte_droite_econome.png',
            { frameWidth: 64, frameHeight: 64});   
        this.load.spritesheet('pdt_face', 'assets/pdt_face.png',
            { frameWidth: 32, frameHeight: 48});
        
        this.load.image('econome', 'assets/econome.png');

        this.load.image("Tileset", "assets/tileset_1.png");
        this.load.tilemapTiledJSON("map1", 'map/scene_1.json');
        

    }

    create(){
        
        
        const map = this.add.tilemap("map1");

        //JEU DE TUILES
        const tileset = map.addTilesetImage("tileset_1", "Tileset");
        
        

        const sol = map.createLayer(
            "sol",
            tileset
        );

        const sol_marche = map.createLayer(
            "sol_marche",
            tileset
        );

        const haie_collision = map.createLayer(
            "haie_collision",
            tileset
        );

        const econome_ramasser = map.createLayer(
            "econome_ramasser",
            tileset
        );


        const barriere_collision = map.createLayer(
            "barriere_collision",
            tileset
        );

     



       this.player = this.physics.add.sprite(15, 352, "carotte_face");
// ----- CAMERA -----

        // Redimensions du jeu selon le fichier Tiled
        this.physics.world.setBounds(0, 0, 3584, 2560);
        this.cameras.main.setBounds(0, 0, 3584, 2560);

        // Tracking de la caméra sur le joueur
        this.cameras.main.startFollow(this.player);


    }

}