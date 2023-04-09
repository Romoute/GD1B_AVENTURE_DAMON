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
    scene: [menu, scene_potager, scene_champ, scene_poule, scene_finale],
    fps: {
        target: 60,
        forceSetTimeOut: true
      },
};

var game = new Phaser.Game(config);
game.scene.start("menu");

