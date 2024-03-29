import React, { useRef, useState } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'


const game = {
    width: "30%",
  height: "30%",
  type: Phaser.AUTO,
  scene: {
    init: function() {
      this.cameras.main.setBackgroundColor('#24252A')
    },
    create: function() {
      this.helloWorld = this.add.text(
        this.cameras.main.centerX, 
        this.cameras.main.centerY, 
        "Hello World", { 
          font: "40px Arial", 
          fill: "#ffffff" 
        }
      );
      this.helloWorld.setOrigin(0.5);
    },
    update: function() {
      this.helloWorld.angle += 1;
    }
  }
};

  
export default function One () {
    const gameRef = useRef(null)
    // Call `setInitialize` when you want to initialize your game! :)
    const [initialize, setInitialize] = useState(false)
    const destroy = () => {
      if (gameRef.current) {
        gameRef.current.destroy()
      }
      setInitialize(false)
    }
    return (
      <>
        <IonPhaser ref={gameRef} game={game} initialize={initialize} />
        <button onClick={() => setInitialize(true)}>Start Game</button>
        <button onClick={destroy}>End Game</button>
      </>
    )
  }