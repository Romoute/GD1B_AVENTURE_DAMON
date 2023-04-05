import scene_potager from './scene_potager.js';
import menu from './menu.js';

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


function controlPlayer(player, cursors){

    player.body.velocity.normalize()
  //DEPLACEMENTS DU JOUEUR

  
    if (cursors.up.isDown) {
        player.setVelocityY(-player.speed); 
        player.dir = "up";
        
    }
    else if (cursors.down.isDown) {       
        player.setVelocityY(player.speed); 
        player.dir = "down";     
    }
    else if (cursors.left.isDown) { 
        player.setVelocityX(-player.speed); 
        player.dir = "left";
    }
    else if (cursors.right.isDown) { 
        player.setVelocityX(player.speed); 
        player.dir = "right";
    }
}