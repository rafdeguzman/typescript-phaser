import Phaser from 'phaser'
import SceneKeys from '../enums/SceneKeys'
export default class Pause extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Pause)
    }
    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        
        this.add.text(screenCenterX, screenCenterY, 'GAME PAUSED', {
            fontSize: '40px',
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(screenCenterX, screenCenterY + 200, 'PRESS ESC TO CONTINUE', {
            fontSize: '20px',
            align: 'center'
        }).setOrigin(0.5);

        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.resume(SceneKeys.UI)
            this.scene.resume(SceneKeys.Game)
            this.scene.stop()
        },this)

    }
}