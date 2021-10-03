
class Credits extends Phaser.Scene {
  constructor() {
    super('Credits')
  }
  create() {
    this.add.text( 175, 75, 'Arrithmetic', {fill: '#000000', fontSize: '40px'})
    this.add.text( 175, 125, 'Version 0.0.0.1 (pre-alpha)', {fill: '#000000', fontSize: '30px'})
     this.add.text( 175, 175, 'Game design: Dmitry Yaskovich', {fill: '#000000', fontSize: '20px'})
     this.add.text( 175, 200, 'Development: Dmitry Yaskovich', {fill: '#000000', fontSize: '20px'})
     this.add.text( 175, 225, 'Graphics: Dmitry Yaskovich', {fill: '#000000', fontSize: '20px'})
     this.add.text( 175, 250, 'Audio: Dmitry Yaskovich', {fill: '#000000', fontSize: '20px'})
     this.add.text( 175, 275, 'QA: Dmitry Yaskovich', {fill: '#000000', fontSize: '20px'})
     this.add.text( 175, 500, 'Dimini Inc., 2021', {fill: '#000000', fontSize: '20px'})
    this.input.on('pointerdown', () => {
      this.scene.stop('Credits');
      this.scene.start('Menu');
    })
  }
}
