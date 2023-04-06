import menu from './menu.js';
import scene_potager from './scene_potager.js';
import scene_champ from './scene_champ.js';
import scene_poule from './scene_poule.js';
import scene_finale from './scene_finale.js';


// ----- CONFIGURATION INITIALE -----
var config = {
    type: Phaser.AUTO,
    width: 1280, height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

    // Ajout des differentes scenes dans le jeu (donc la toutes les prochaines scenes que tu fais tu les met la dedans avec une virgule)
    scene: [menu, scene_potager, scene_champ, scene_poule, scene_finale] 
};

var game = new Phaser.Game(config);
game.scene.start("menu");




preload() {

    //Barre de vie
    this.load.image('hp1', 'assets/hp/vie_1.png');
    this.load.image('hp2', 'assets/hp/vie_2.png');
    this.load.image('hp3', 'assets/hp/vie_3.png');
    this.load.image('hp4', 'assets/hp/vie_4.png');

}

create(){
    this.clavier = this.input.keyboard.createCursorKeys();

}

update(){
    if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
        this.scene.start("scene_potager");
      } 



// Ici, le code pour gérer le déplacement de mon joueur 
if (this.cursors.left.isDown || this.clavier.Q.isDown){ 
    this.player.setVelocityX(-160); 
    this.player.anims.play('marche', true); 
}
else if (this.cursors.right.isDown || this.clavier.D.isDown){ 
    this.player.setVelocityX(160); 
    this.player.anims.play('marche', true); 
}
else{
    this.player.setVelocityX(0);
    this.player.anims.play('turn', true);
}


if (this.cursors.up.isDown && this.player.body.onFloor() || this.clavier.SPACE.isDown && this.player.body.onFloor()){
    this.player.setVelocityY(-300); 
}


if(this.player.invincible){
    this.player.invincibleFrame-- ;
    if(this.player.invincibleFrame == 0){
            this.player.invincibleFrame = 200;
            this.player.setTint(0xffffff);
            this.player.invincible = false ;
    }
}



if(this.player.hp == 3){
    this.hpUI.setTexture("hp4");
}
if(this.player.hp == 2){
    this.hpUI.setTexture("hp3");
}
if(this.player.hp == 1){
    this.hpUI.setTexture("hp2");
}
if(this.player.hp < 1){
    this.hpUI.setTexture("hp1");
    this.isDead(); 
}}