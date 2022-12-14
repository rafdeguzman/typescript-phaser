import Phaser from 'phaser'
import SceneKeys from '../enums/SceneKeys'

export default class Preloader extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Preloader)
    }

    preload() {
        // Player 
        this.load.atlas('knight', './assets/knight/knight.png', './assets/knight/knight.json'); // atlas
    
        // Enemies
        this.load.atlas('orc', './assets/orc/orc.png', './assets/orc/orc.json'); // atlas
        this.load.atlas('necromancer', './assets/necromancer/necromancer.png', './assets/necromancer/necromancer.json'); // atlas
        this.load.atlas('ogre', './assets/ogre/ogre.png', './assets/ogre/ogre.json'); // atlas
        this.load.atlas('big_zombie', './assets/zombie/big/big_zombie.png', './assets/zombie/big/big_zombie.json'); // atlas
        this.load.atlas('tiny_zombie', './assets/zombie/tiny/tiny_zombie.png', './assets/zombie/tiny/tiny_zombie.json'); // atlas   
        this.load.atlas('zombie', './assets/zombie/medium/zombie.png', './assets/zombie/medium/zombie.json'); // atlas
        this.load.atlas('shaman', './assets/orc_shaman/shaman.png', './assets/orc_shaman/shaman.json');
        this.load.atlas('demon', './assets/demon/demon.png', './assets/demon/demon.json'); // atlas

        // Items
        this.load.image('bullet', './assets/bullets/bullet.png');
        this.load.image('player_bullet', './assets/bullets/bullet1.png');
        this.load.atlas('coin', './assets/coin/coin.png', './assets/coin/coin.json');
        
        // Map
        this.load.image('map', './assets/map/map.png');

        // UI
        this.load.image('crosshair', './assets/crosshair/crosshair.png');

        //ref:https://www.artstation.com/artwork/QrYv8E
        this.load.image('bg', './assets/title/bg.jpeg');

        //--Heart--//
        this.load.image('heart', './assets/hearts/ui_heart_full.png');
        this.load.image('heartEmpty', './assets/hearts/ui_heart_empty.png');
        this.load.image('heartHalf', './assets/hearts/ui_heart_half.png');

        // Audio
        this.load.audio('music', './assets/sound/music/abc.mp3');  // abc polyphia 8bit ver
        this.load.audio('playerHit', './assets/sound/playerHit.wav');
        this.load.audio('gunShot', './assets/sound/gunShot.wav');
        this.load.audio('enemyHit', './assets/sound/enemyHit.wav');
        this.load.audio('pickup', './assets/sound/pickup.wav');
        this.load.audio('dodge', './assets/sound/dodge.wav')
        this.load.audio('dodgeCd', './assets/sound/dodgeBack.wav')
    
        
    }

    create() {
        this.scene.start(SceneKeys.Title)
    }
}
