
// ----- CLASSE SCENE_CHAMP -----
// Chaque classe de scene est dans un fichier different (comme en prog objet en general)

export default class scene_champ extends Phaser.Scene {

    constructor(){
        super({
            key: "scene_champ"
    });
    }

    // ----- INITIALISATION DES DONNEES DU JOUEUR -----
    // A chaque fonction changement de scene on donnera des donnees qui seront transmises a la nouvelle scene
    // pour par exemple donner la position du joueur, ses points de vie, les objets qu'il a en sa possession etc
    init(data) {

        // Position du sprite joueur
        //this.positionX = data.x;
        //this.positionY = data.y; 
        
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
            { frameWidth: 97, frameHeight: 106});
        this.load.spritesheet('carotte_dos_econome', 'assets/animation_carotte_econome/carotte_dos_econome.png',
            { frameWidth: 48, frameHeight: 80});    
        this.load.spritesheet('carotte_gauche_econome', 'assets/animation_carotte_econome/carotte_gauche_econome.png',
            { frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('carotte_droite_econome', 'assets/animation_carotte_econome/carotte_droite_econome.png',
            { frameWidth: 64, frameHeight: 64});   
        this.load.spritesheet('pdt_face', 'assets/pdt_face.png',
            { frameWidth: 34, frameHeight: 66});
        
        this.load.image('econome', 'assets/econome.png');
        
        this.load.image('hp1', 'assets/hp/vie_1.png');
        this.load.image('hp2', 'assets/hp/vie_2.png');
        this.load.image('hp3', 'assets/hp/vie_3.png');
        this.load.image('hp4', 'assets/hp/vie_4.png');

        this.load.image("Tileset", "assets/tileset_2.png");
        this.load.tilemapTiledJSON("map2", 'map/scene_2.json');
        

    }

    create(){
        
        
        const map = this.add.tilemap("map2");

        //JEU DE TUILES
        const tileset = map.addTilesetImage("tileset_2", "Tileset");
        
        

        const sol = map.createLayer(
            "sol",
            tileset
        );

        const barriere = map.createLayer(
            "barriere",
            tileset
        );

        const portail = map.createLayer(
            "portail",
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
    
