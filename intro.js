
class Intro extends Phaser.Scene {
  constructor() {
    super('Intro')
  }

preload(){
   this.load.image('frame1', 'frame1.png');
    this.load.image('frame2', 'frame2.png');
}
create() {
  let frame1 = this.add.image(0, 0, 'frame1').setOrigin(0, 0);
  let frame2;
  frame1.setInteractive();

  frame1.on('pointerdown', () => {
      frame2 = this.add.image(0, 0, 'frame2').setOrigin(0, 0);
      frame2.setInteractive();
      frame2.on('pointerdown', () => {
      this.scene.stop('Intro');
      this.scene.start('Main');
    })
    })

}
}

