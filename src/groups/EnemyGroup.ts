import Enemy from "../entities/Enemy";
export default class EnemyGroup extends Phaser.Physics.Arcade.Group {

    constructor(scene: Phaser.Scene) {
        super(scene.physics.world, scene);
        this.createMultiple({
            classType: Enemy,
            frameQuantity: 50,
            key: 'enemy',
            active: false,
            visible: false,
        });
    }

    spawnEnemy(x: number, y: number): void {
        const enemy = this.getFirstDead(false);

        if (enemy) {
            enemy.spawn(x, y);
        }
    }

    update(time: number, delta: number): void {
        this.children.each((enemy: any) => {
            if (enemy.active) {
                enemy.update();
            }
        });
    }
}