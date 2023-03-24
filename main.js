
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
    scene: [scene_potager, scene_champ, scene_poule, scene_finale] 
};

var game = new Phaser.Game(config);


function controlPlayer(player, cursors){

    player.body.velocity.normalize()
  //DEPLACEMENTS DU JOUEUR
    if (cursors.up.isDown) {
        player.setVelocityY(-player.speed); 
        player.anims.play(player.currentAnims[1], true); 
        player.dir = "up";
        
    }
    else if (cursors.down.isDown) {       
        player.setVelocityY(player.speed); 
        player.anims.play(player.currentAnims[3], true); 
        player.dir = "down";     
    }
    else if (cursors.left.isDown) { 
        player.setVelocityX(-player.speed); 
        player.anims.play(player.currentAnims[0], true); 
        player.dir = "left";
    }
    else if (cursors.right.isDown) { 
        player.setVelocityX(player.speed); 
        player.anims.play(player.currentAnims[2], true); 
        player.dir = "right";
    }
}