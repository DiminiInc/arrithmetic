

class Main extends Phaser.Scene {
  constructor() {
    super('Main')
  }

  preload(){
  this.load.image('monitor0','monitor0.png');
  this.load.image('monitor1','monitor1.png');
  this.load.image('monitor2','monitor2.png');
  this.load.image('monitor3','monitor3.png');
  this.load.audio('pulse0', 'pulse0.wav');
  this.load.audio('pulse1', 'pulse1.wav');
  this.load.audio('pulse2', 'pulse2.wav');
  this.load.audio('pulse3', 'pulse3.wav');
}

  

  generate(){
      gameState.a = Math.ceil(Math.random()*100);
      gameState.b = Math.ceil(Math.random()*100);
      gameState.c = gameState.a*gameState.b;
      gameState.button = Math.floor(Math.random()*4);
      gameState.aText.setText(`${Math.ceil(Math.random()*100)}`);
      gameState.bText.setText(`${Math.ceil(Math.random()*100)}`);
      gameState.cText.setText(`${Math.ceil(Math.random()*100)}`);
      gameState.dText.setText(`${Math.ceil(Math.random()*100)}`);
      if (gameState.button == 0){
        gameState.aText.setText(`${gameState.a}`);
      } 
      if (gameState.button == 1){
        gameState.bText.setText(`${gameState.a}`);
      } 
      if (gameState.button == 2){
        gameState.cText.setText(`${gameState.a}`);
      } 
      if (gameState.button == 3){
        gameState.dText.setText(`${gameState.a}`);
      } 
      gameState.mainText.setText(`${gameState.c}/${gameState.b}=?`);
  }
  answer(button){
    console.log(button);
    console.log(gameState.errors)
    this.generate();
    if (button==gameState.button){
this.generate();
    } else {
      gameState.errors+=1;
      if (gameState.errors<3){
      this.generate();
      if (gameState.errors==1){
        this.add.image(100, 50, 'monitor2').setOrigin(0, 0);
        gameState.music1.stop();
gameState.music2 = this.sound.add('pulse2');
    gameState.music2.loop = true; 
  gameState.music2.play();
      }
      if (gameState.errors==2){
        this.add.image(100, 50, 'monitor3').setOrigin(0, 0);
        gameState.music2.stop();
gameState.music3 = this.sound.add('pulse3');
    gameState.music3.loop = true; 
  gameState.music3.play();
      }
    } else {
      console.log("a")
      this.setDeath();
    }
    }
    clearTimeout(gameState.timer);
    gameState.timer = setTimeout(() => { this.setDeath() }, 3000);
  }

  setDeath(){
    console.log("dead");
    gameState.mainText.setText(`You died`);
    this.add.image(100, 50, 'monitor0').setOrigin(0, 0);
    if (gameState.errors==0){
     gameState.music1.stop();
   }
      if (gameState.errors==1){
     gameState.music2.stop();
   }
   if (gameState.errors==2){
     gameState.music3.stop();
   }
      gameState.errors= 3;
gameState.music0 = this.sound.add('pulse0');
    gameState.music0.loop = true; 
  gameState.music0.play();
gameState.timer = setTimeout(() => { this.setReset() }, 1000);
      
  }

setReset(){
this.input.on('pointerdown', () => {
        gameState.errors= 0;
gameState.music0.stop();
      this.scene.stop('Main');
      this.scene.start('Menu');
    })
}
  create() {
    gameState.music1 = this.sound.add('pulse1');
    gameState.music1.loop = true; 
  gameState.music1.play();
  gameState.errors = 0;
  this.add.image(100, 50, 'monitor1').setOrigin(0, 0);

gameState.mainText = this.add.text( 100, 300, 'text', {fill: '#000000', fontSize: '40px'})
    let aButton = this.add.rectangle(100, 400, 250, 50, 0x888888);
    aButton.setOrigin(0,0)
    gameState.aText = this.add.text( 100, 400, 'a', {fill: '#000000', fontSize: '30px'})
    aButton.setInteractive();
    aButton.on('pointerdown', () => {
      this.answer(0);
    })
    let bButton = this.add.rectangle(450, 400, 250, 50, 0x888888);
    bButton.setOrigin(0,0)
    gameState.bText = this.add.text( 450, 400, 'b', {fill: '#000000', fontSize: '30px'})
    bButton.setInteractive();
    bButton.on('pointerdown', () => {
      this.answer(1);
    })
    let cButton = this.add.rectangle(100, 500, 250, 50, 0x888888);
    cButton.setOrigin(0,0)
    gameState.cText = this.add.text( 100, 500, 'c', {fill: '#000000', fontSize: '30px'})
    cButton.setInteractive();
    cButton.on('pointerdown', () => {
      this.answer(2);
    })
    let dButton = this.add.rectangle(450, 500, 250, 50, 0x888888);
    dButton.setOrigin(0,0)
    gameState.dText = this.add.text( 450, 500, 'd', {fill: '#000000', fontSize: '30px'})
    dButton.setInteractive();
    dButton.on('pointerdown', () => {
      this.answer(3);
    })
    this.generate();
  }
}

