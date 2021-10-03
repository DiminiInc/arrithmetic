class Menu extends Phaser.Scene {
  constructor() {
    super('Menu')
  }


  create() {
    let startButton = this.add.rectangle(200, 75, 400, 150, 0x888888);
    startButton.setOrigin(0,0)
    this.add.text( 225, 120, 'Start game', {fill: '#000000', fontSize: '60px'})
    startButton.setInteractive();
    startButton.on('pointerdown', () => {
      this.scene.stop('Menu');
      this.scene.start('Intro');
    })
    // let settingsButton = this.add.rectangle(200, 300, 400, 75, 0x888888);
    // settingsButton.setOrigin(0,0)
    // this.add.text( 225, 320, 'Settings', {fill: '#000000', fontSize: '30px'})
    // settingsButton.setInteractive();
    // settingsButton.on('pointerdown', () => {
    //   this.scene.stop('Menu');
    //   this.scene.start('Settings');
    // })
    let creditsButton = this.add.rectangle(200, 400, 400, 75, 0x888888);
    creditsButton.setOrigin(0,0)
    this.add.text( 225, 420, 'Credits', {fill: '#000000', fontSize: '30px'})
    creditsButton.setInteractive();
    creditsButton.on('pointerdown', () => {
      this.scene.stop('Menu');
      this.scene.start('Credits');
    })
  }
}