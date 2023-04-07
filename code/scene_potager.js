
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

        const sortie = map.createLayer(
            "sortie",
            tileset
        );

        const haie_collision = map.createLayer(
            "haie_collision",
            tileset
        );


        const barriere_collision = map.createLayer(
            "barriere_collision",
            tileset
        );

        

     
        this.clavier = this.input.keyboard.createCursorKeys();
        this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


       this.player = this.physics.add.sprite(0, 330, "carotte_face");
       this.player.body.setSize(32, 42 , 300, 100);
       this.player.speed = 300; 
       this.player.direction = "left"; 
       this.player.hp = 4; 
       this.player.invincible = false; 
       this.player.aEconome = false; 
       this.player.invincibleFrame = 20; 

       this.hpUI = this.add.image(10, 10, "hp1").setOrigin(0,0);
       this.hpUI.setScrollFactor(0);


       //Méchant
       this.mechant = this.physics.add.sprite(-750, -652, "pdt_face"); 
       this.mechant.body.allowGravity = false;
       this.mechant.body.immovable = true; 

         //Econome
        this.econome = this.physics.add.sprite(130, 330, "econome"); 

        this.economeAttaque =   this.physics.add.group();
        


        // ----- CAMERA -----

        // Redimensions du jeu selon le fichier Tiled
        this.physics.world.setBounds(-1024, -1152, 3136, 1856);
        this.cameras.main.setBounds(-1024, -1152, 3136, 1856);

        this.player.setCollideWorldBounds(true);

        // Tracking de la caméra sur le joueur
        this.cameras.main.startFollow(this.player);


        haie_collision.setCollisionByExclusion(-1, true);
        barriere_collision.setCollisionByExclusion(-1, true);

        this.physics.add.collider(this.player, haie_collision);
        this.physics.add.collider(this.player, barriere_collision);

        this.physics.add.collider(this.player, this.mechant, this.loseHp, null, this);

        this.physics.add.overlap(this.player, this.econome, this.ramasseEconome, null, this);

        this.physics.add.overlap(this.mechant, this.economeAttaque, this.tueMechant, null, this);


        sortie.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, sortie, () => {

            this.scene.switch("scene_champ");
        });


    }

    update(){


        if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
            if(this.player.aEconome){
                this.attaque(); 
            }
          } 

        //DEPLACEMENTS 

        var mouvement = new Phaser.Math.Vector2(0, 0);


        if (this.clavier.left.isDown) {
            mouvement.x = -1;
            this.player.direction = "left"; 
        } 
        else if (this.clavier.right.isDown) {
            mouvement.x = 1;
            this.player.direction = "right"; 
        } 
        else {
            mouvement.x = 0;
        }
        
        if (this.clavier.up.isDown) {
            mouvement.y = -1;
            this.player.direction = "up"; 
        } 
        else if (this.clavier.down.isDown) {
            mouvement.y = 1;
            this.player.direction = "down"; 
        } 
        else {
            mouvement.y = 0;
        }
        
        mouvement.normalize();
        this.player.setVelocity(mouvement.x * this.player.speed, mouvement.y *  this.player.speed);


        //INVULNERABLE
        if(this.player.invincible){
            console.log(this.player.invincibleFrame); 
            this.player.invincibleFrame-- ;
            if(this.player.invincibleFrame <= 0){
                    this.player.invincibleFrame = 20;
                    this.player.setTint(0xffffff);
                    this.player.invincible = false ;
            }
        }



        if(this.player.hp == 4){
            this.hpUI.setTexture("hp1");
        }
        if(this.player.hp == 3){
            this.hpUI.setTexture("hp2");
        }
        if(this.player.hp == 2){
            this.hpUI.setTexture("hp3");
        }
        if(this.player.hp  == 1){
            this.hpUI.setTexture("hp4");
            
        }else if(this.player.hp <= 0){
            this.scene.start("scene_potager");
        }
    }


    loseHp(player, ennemi){

        if(!player.invincible){
            player.invincible = true;
            player.hp -= 1;
            player.setTint(0xff0000);
            player.scene.cameras.main.shake(200, 0.01);
        }
    }

    ramasseEconome(player, econome){

        player.aEconome = true;
        player.setTexture("carotte_face_econome"); 
        player.body.setSize(32, 40);
        player.body.setOffset(32, 62);
        econome.destroy(); 
    }

    attaque(){

            this.player.setTexture("carotte_face");
            var coefDirX;
            var coefDirY;
            var spriteRotation; 

            if (this.player.direction == 'left') { coefDirX = -1; coefDirY = 0; spriteRotation = 1;} 

                else if (this.player.direction == 'right') { coefDirX = 1; coefDirY = 0; spriteRotation = 4;}

                else if (this.player.direction == 'up') { coefDirY = 1; coefDirX = 0; spriteRotation = 2.5;}

                else if (this.player.direction == 'down') { coefDirY = -1; coefDirX = 0; spriteRotation = 5.5;}

            var sprite_tir = this.economeAttaque.create(this.player.x + (32 * coefDirX), this.player.y + 32 - (32 * coefDirY), 'econome').setRotation(spriteRotation);

            setTimeout(() => {
                this.player.setTexture("carotte_face_econome");
                sprite_tir.destroy(); 
            }, 20);
             
    }

    tueMechant(mechant, econome){

        mechant.destroy();  
    }

}






// preload() {

//     //Barre de vie
//     this.load.image('hp1', 'assets/hp/vie_1.png');
//     this.load.image('hp2', 'assets/hp/vie_2.png');
//     this.load.image('hp3', 'assets/hp/vie_3.png');
//     this.load.image('hp4', 'assets/hp/vie_4.png');

// }

// create(){
//     this.clavier = this.input.keyboard.createCursorKeys();

// }

// update(){
//     if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
//         this.scene.start("scene_potager");
//       } 



// // Ici, le code pour gérer le déplacement de mon joueur 
// if (this.clavier.left.isDown || this.clavier.Q.isDown){ 
//     this.player.setVelocityX(-160); 
//     this.player.anims.play('marche', true); 
// }
// else if (this.clavier.right.isDown || this.clavier.D.isDown){ 
//     this.player.setVelocityX(160); 
//     this.player.anims.play('marche', true); 
// }
// else{
//     this.player.setVelocityX(0);
//     this.player.anims.play('turn', true);
// }


// if (this.clavier.up.isDown && this.player.body.onFloor() || this.clavier.SPACE.isDown && this.player.body.onFloor()){
//     this.player.setVelocityY(-300); 
// }


// if(this.player.invincible){
//     this.player.invincibleFrame-- ;
//     if(this.player.invincibleFrame == 0){
//             this.player.invincibleFrame = 200;
//             this.player.setTint(0xffffff);
//             this.player.invincible = false ;
//     }
// }



// if(this.player.hp == 3){
//     this.hpUI.setTexture("hp4");
// }
// if(this.player.hp == 2){
//     this.hpUI.setTexture("hp3");
// }
// if(this.player.hp == 1){
//     this.hpUI.setTexture("hp2");
// }
// if(this.player.hp < 1){
//     this.hpUI.setTexture("hp1");
//     this.isDead(); 
// }}