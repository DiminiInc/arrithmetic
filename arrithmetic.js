const gameState = {

};

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "cccccc",
  scene: [Menu, Intro, Main, Credits]
};

const game = new Phaser.Game(config);