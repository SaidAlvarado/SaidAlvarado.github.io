var p_playState = {


  create: function() {

      //---------------     Config del Juego   -----------------------------------------
      //  We're going to be using physics, so enable the Arcade Physics system
      game.physics.startSystem(Phaser.Physics.ARCADE);              //Física
      game.world.setBounds(0, 0, 1920, 600);                        //Bordes
      game.add.sprite(0, 0, 'p_background');                                 //Fondo
      //--------------------------------------------------------------------------------

      //--------------------------------------------------------------------------------

      //---------------       Carga el mapa contenido en el CSV       ------------------
      map = game.add.tilemap(mapName, 64, 64);
      //  Now add in the tileset
      map.addTilesetImage('tiles');

      //  Create our layer
      layer = map.createLayer(0);

      layer.resizeWorld();

      // Define los bloques del mapa con los cuales hay colisión
      map.setCollisionBetween(0, 101);

      layer.debug = false;

      layer.resize(800, 600);
      //--------------------------------------------------------------------------------

      //---------------------           Player             -----------------------------

      //player = game.add.sprite(64, game.world.height - 700, 'dude');
      player = game.add.sprite(player_x_init, player_y_init, 'P1');
      player.scale.set(0.6);
      game.camera.follow(player);

      //  We need to enable physics on the player
      game.physics.arcade.enable(player);

      //  Player physics properties. Give the little guy a slight bounce.
      player.body.bounce.y = 0.2;
      player.body.gravity.y = 300;
      player.body.collideWorldBounds = true;
      player.animations.add('right', [0,1,2,3,4,5,7,8,9,10], 20, true);
      player.animations.add('left', [11,12,14,15,16,17,18,19,20,21], 20, true);

      //--------------------------------------------------------------------------------

      //---------------------       Controles del Teclado (KeyCode)        -------------
      //  Our controls.
      cursors = game.input.keyboard.createCursorKeys();   //Up Down Left Right
      interruptorKey = game.input.keyboard.addKey(Phaser.Keyboard.I);
      exitKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
      //--------------------------------------------------------------------------------

      //--------------------          Interruptores          ---------------------------
      //  Grupo que contiene los interruptores
      switches = game.add.group();
      //  We will enable physics for any star that is created in this group
      switches.enableBody = true;
      // Here we create the switch.
      switch_1 = switches.create(switch_1_x_init, switch_1_y_init, 'devices');
      switch_1.scale.set(0.8);
      switch_1.body.immovable = true;
      switch_1.animations.add('off', [switch_1_type_off], 20, true);
      switch_1.animations.add('on', [switch_1_type_on], 20, true);
      switch_1.animations.play('on');

      switch_2 = switches.create(switch_2_x_init, switch_2_y_init,'devices');
      switch_2.scale.set(0.8);
      switch_2.body.immovable = true;
      switch_2.animations.add('off', [switch_2_type_off], 20, true);
      switch_2.animations.add('on', [switch_2_type_on], 20, true);
      switch_2.animations.play('on');
      //--------------------------------------------------------------------------------

      //--------------------          Puerta de Acceso         -------------------------
      doors = game.add.group();
      doors.enableBody = true;
      laserSwitch1 = doors.create(laserSwitch1_x_init, laserSwitch1_y_init, 'devices');
      laserSwitch1.animations.add('off', [laserSwitch1_type_off], 20, true);
      laserSwitch1.animations.add('on', [laserSwitch1_type_on], 20, true);
      laserSwitch1.animations.play('on');
      laserSwitch1.body.immovable = true;
      laser1 = doors.create(laser1_x_init, laser1_y_init, laser1_type);
      laser1.body.immovable = true;

      laserSwitch2 = doors.create(laserSwitch2_x_init, laserSwitch2_y_init, 'devices');
      laserSwitch2.animations.add('off', [laserSwitch2_type_off], 20, true);
      laserSwitch2.animations.add('on', [laserSwitch2_type_on], 20, true);
      laserSwitch2.animations.play('on');
      laserSwitch2.body.immovable = true;
      laser2 = doors.create(laser2_x_init, laser2_y_init, laser2_type);
      laser2.body.immovable = true;
      //--------------------------------------------------------------------------------
      //--------------------              enemy1                  -------------------------
      enemies = game.add.group();

      enemy1 = enemies.create(enemy1_x_init, enemy1_y_init, 'enemies');
      enemy1.animations.add('move', enemy1_animation, 5, true);
      enemy1.animations.play('move');
      game.physics.arcade.enable(enemy1);
      enemy1.body.collideWorldBounds = true;
      enemy1.anchor.setTo(.5,.5);
      enemy1.scale.x = -1;
      enemy1.body.velocity.x=100;
      enemy1.body.velocity.y=100;
      enemy1.body.immovable = true;

      enemy2 = enemies.create(enemy2_x_init, enemy2_y_init, 'enemies');
      enemy2.animations.add('move', enemy2_animation, 5, true);
      enemy2.animations.play('move');
      game.physics.arcade.enable(enemy2);
      enemy2.body.collideWorldBounds = true;
      enemy2.anchor.setTo(.5,.5);
      enemy2.scale.x = -1;
      enemy2.body.velocity.x=100;
      enemy2.body.velocity.y=100;
      enemy2.body.immovable = true;
      //game.physics.arcade.collide(layer,enemy2);

      enemy3 = enemies.create(enemy3_x_init, enemy3_y_init, 'enemies');
      enemy3.animations.add('move', enemy3_animation, 5, true);
      enemy3.animations.play('move');
      game.physics.arcade.enable(enemy3);
      enemy3.body.collideWorldBounds = true;
      enemy3.anchor.setTo(.5,.5);
      enemy3.scale.x = -1;
      enemy3.body.velocity.x=100;
      enemy3.body.velocity.y=100;
      enemy3.body.immovable = true;

      enemy4 = enemies.create(enemy4_x_init, enemy4_y_init, 'enemies');
      enemy4.animations.add('move', enemy4_animation, 5, true);
      enemy4.animations.play('move');
      game.physics.arcade.enable(enemy4);
      enemy4.body.collideWorldBounds = true;
      enemy4.anchor.setTo(.5,.5);
      enemy4.scale.x = -1;
      enemy4.body.velocity.x=100;
      enemy4.body.velocity.y=100;
      enemy4.body.immovable = true;
      //game.physics.arcade.collide(layer,enemy4);

      mapa=game.add.sprite(800, 0, 'map');                          //Fondo
      mapa.fixedToCamera = true;
      //---------------     Circuitos   ------------------------------------------------
      circuit=game.add.sprite(circuit_x, circuit_y, 'circuito00');
      circuit.fixedToCamera = true;
      //--------------------------------------------------------------------------------

      instrucciones1='---  INSTRUCCIONES  ---';
      instrucciones2='Utiliza el interruptor';
      instrucciones3='para desactivar el láser';
      instrucciones4='Mapa';
      instrucciones5='Presiona i para activar o'
      instrucciones6='desactivar el interruptor'
      instrucciones7='Presiona s para salir del juego'

      instructionsText1 = game.add.text(814, inicio_texto, instrucciones1, { fontSize: '32px', fill: '#000' });
      instructionsText1.fixedToCamera = true;
      instructionsText2 = game.add.text(814, inicio_texto+32+2, instrucciones2, { fontSize: '32px', fill: '#000' });
      instructionsText2.fixedToCamera = true;
      instructionsText3 = game.add.text(814, inicio_texto+2*(32+2), instrucciones3, { fontSize: '32px', fill: '#000' });
      instructionsText3.fixedToCamera = true;
      instructionsText4 = game.add.text(814, inicio_texto+6*(32+2), instrucciones4, { fontSize: '32px', fill: '#000' });
      instructionsText4.fixedToCamera = true;
      instructionsText5 = game.add.text(814, inicio_texto+14.5*(32+2), instrucciones5, { fontSize: '26px', fill: '#000' });
      instructionsText5.fixedToCamera = true;
      instructionsText6 = game.add.text(814, inicio_texto+15.5*(32+2), instrucciones6, { fontSize: '26px', fill: '#000' });
      instructionsText6.fixedToCamera = true;
      instructionsText7 = game.add.text(814, inicio_texto+16.5*(32+2), instrucciones7, { fontSize: '16px', fill: '#000' });
      instructionsText7.fixedToCamera = true;

      rayo1Text = game.add.text(814, inicio_texto+4*(32+2), 'Láser 1 activado', { fontSize: '32px', fill: '#000' });
      rayo1Text.fixedToCamera = true;
      rayo2Text = game.add.text(814, inicio_texto+5*(32+2), 'Láser 2 activado', { fontSize: '32px', fill: '#000' });
      rayo2Text.fixedToCamera = true;

      //positionText1 = game.add.text(0, 10, 'X='+player.body.position.x.y, { fontSize: '32px', fill: '#000' });
      //positionText1.fixedToCamera = true;
      //positionText2 = game.add.text(0,64, 'Y='+player.body.position.y, { fontSize: '32px', fill: '#000' });
      //positionText2.fixedToCamera = true;
  },

  update: function() {
        // -------------------     Collide     -------------------------------------------
        game.physics.arcade.collide(player, laserSwitch1);
        game.physics.arcade.collide(player, laserSwitch1);
        game.physics.arcade.overlap(player, laser1, this.killplayer,null,this);
        game.physics.arcade.overlap(player, laser2, this.killplayer,null,this);
        game.physics.arcade.collide(player, layer);
        game.physics.arcade.collide(player,enemies, this.killplayer,null,this);
        game.physics.arcade.collide(enemies,layer);
        game.physics.arcade.collide(enemies,doors);
        game.physics.arcade.collide(enemies,switch_1);
        game.physics.arcade.collide(enemies,switch_2);
        game.physics.arcade.collide(player, switch_1, this.interruptor1, null, this);
        game.physics.arcade.collide(player, switch_2, this.interruptor2, null, this);
        //--------------------------------------------------------------------------------

        player.body.velocity.x = 0;

        if (cursors.left.isDown)
        {
            //  Move to the left
            player.body.velocity.x = -300;
            player.animations.play('left');
        }
        else if (cursors.right.isDown)
        {
            //  Move to the right
            player.body.velocity.x = 300;
            player.animations.play('right');
        }
        else
        {
            //  Stand still
            player.animations.stop();
            //player.animations.play('front');
            //player.frame = 20;
        }

        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.body.velocity.y = -350;
        }
        if (cursors.up.isDown && player.body.onFloor())
        {
            player.body.velocity.y = -350;
        }


        if(stateDoor1==1 && canMove_door1==0)
        {
            switch_1.animations.play('off');
            laserSwitch1.animations.play('off');
            laser1.kill();
            canMove_door1=1;
            rayo1Text.text = "Láser 1 desactivado";
            rayo1Text.addColor('#130CF7', 0);
        }
        else if(stateDoor1==0 && canMove_door1==0)
        {
            switch_1.animations.play('on');
            laserSwitch1.animations.play('on');
            laser1 = doors.create(laser1_x_init, laser1_y_init, laser1_type);
            laser1.body.immovable = true;
            canMove_door1=1;
            rayo1Text.text = "Láser 1 activado";
            rayo1Text.addColor('#130CF7', 0);
        }

        if(stateDoor2==1 && canMove_door2==0)
        {
            switch_2.animations.play('off');
            laserSwitch2.animations.play('off');
            laser2.kill();
            canMove_door2=1;
            rayo2Text.text = "Láser 2 desactivado";
            rayo2Text.addColor('#130CF7', 0);
        }
        else if(stateDoor2==0 && canMove_door2==0)
        {
            switch_2.animations.play('on');
            laserSwitch2.animations.play('on');
            laser2 = doors.create(laser2_x_init, laser2_y_init, laser2_type);
            laser2.body.immovable = true;
            canMove_door2=1;
            rayo2Text.text = "Láser 2 activado";
            rayo2Text.addColor('#130CF7', 0);
        }



        if(enemy1.body.position.x> enemy1_x_init+enemy1_x_deltaPos){
          enemy1.body.velocity.x=-120;
          enemy1.anchor.setTo(.5,.5);
          enemy1.scale.x *= -1;
        }else if(enemy1.body.position.x< enemy1_x_init+enemy1_x_deltaNeg){
          enemy1.body.velocity.x=120;
          enemy1.anchor.setTo(.5,.5);
          enemy1.scale.x *= -1;
        }
        if(enemy2.body.position.x> enemy2_x_init+enemy2_x_deltaPos){
          enemy2.body.velocity.x=-120;
          enemy2.anchor.setTo(.5,.5);
          enemy2.scale.x *= -1;
        }else if(enemy2.body.position.x< enemy2_x_init+enemy2_x_deltaNeg){
          enemy2.body.velocity.x=120;
          enemy2.anchor.setTo(.5,.5);
          enemy2.scale.x *= -1;
        }
        if(enemy3.body.position.x> enemy3_x_init+enemy3_x_deltaPos){
          enemy3.body.velocity.x=-120;
          enemy3.anchor.setTo(.5,.5);
          enemy3.scale.x *= -1;
        }else if(enemy3.body.position.x< enemy3_x_init+enemy3_x_deltaNeg){
          enemy3.body.velocity.x=120;
          enemy3.anchor.setTo(.5,.5);
          enemy3.scale.x *= -1;
        }
        if(enemy4.body.position.x> enemy4_x_init+enemy4_x_deltaPos){
          enemy4.body.velocity.x=-120;
          enemy4.anchor.setTo(.5,.5);
          enemy4.scale.x *= -1;
        }else if(enemy4.body.position.x< enemy4_x_init+enemy4_x_deltaNeg){
          enemy4.body.velocity.x=120;
          enemy4.anchor.setTo(.5,.5);
          enemy4.scale.x *= -1;
        }
        //positionText1.text='X='+player.body.position.x;
        //positionText2.text='Y='+player.body.position.y;

        if(player.body.position.x>1795){
          game.state.start('win');
        }

        if(player.body.position.x>=(switch_1_x_init-43.2) && player.body.position.x<=(switch_1_x_init+64) && player.body.position.y>=switch_1_y_init && player.body.position.y<=(switch_1_y_init+64)){

          instructionsText5.addColor('#130CF7', 0);
          instructionsText6.addColor('#130CF7', 0);

          if (interruptorKey.justUp)
          {

              if(stateDoor1==0 && canMove_door1==1){
                  canMove_door1=0;
                  //game.time.events.repeat(Phaser.Timer.SECOND*2, 100, canMoveDoor1, this);
                  stateDoor1=1;

              }else if(stateDoor1==1 && canMove_door1==1){
                  canMove_door1=0;
                  //game.time.events.repeat(Phaser.Timer.SECOND*2, 100, canMoveDoor1, this);
                  stateDoor1=0;

              }

              if(stateDoor1==0 && stateDoor2==0){
                circuit.kill();
                circuit=game.add.sprite(circuit_x, circuit_y, 'circuito00');
                circuit.fixedToCamera = true;
              }else if(stateDoor1==0 && stateDoor2==1){
                circuit.kill();
                circuit=game.add.sprite(circuit_x, circuit_y, 'circuito01');
                circuit.fixedToCamera = true;
              }else if(stateDoor1==1 && stateDoor2==0){
                circuit.kill();
                circuit=game.add.sprite(circuit_x, circuit_y, 'circuito10');
                circuit.fixedToCamera = true;
              }else if(stateDoor1==1 && stateDoor2==1){
                circuit.kill();
                circuit=game.add.sprite(circuit_x, circuit_y, 'circuito11');
                circuit.fixedToCamera = true;
              }

          }
        }

        if(player.body.position.x>=(switch_2_x_init-43.2) && player.body.position.x<=(switch_2_x_init+64) && player.body.position.y>=switch_2_y_init && player.body.position.y<=(switch_2_y_init+64)){
          instructionsText5.addColor('#130CF7', 0);
          instructionsText6.addColor('#130CF7', 0);
          if (interruptorKey.justUp)
          {

              if(stateDoor2==0 && canMove_door2==1){
                  canMove_door2=0;
                  //game.time.events.repeat(Phaser.Timer.SECOND*2, 100, canMoveDoor1, this);
                  stateDoor2=1;

              }else if(stateDoor2==1 && canMove_door2==1){
                  canMove_door2=0;
                  //game.time.events.repeat(Phaser.Timer.SECOND*2, 100, canMoveDoor1, this);
                  stateDoor2=0;

              }

              if(stateDoor1==0 && stateDoor2==0){
                circuit.kill();
                circuit=game.add.sprite(circuit_x, circuit_y, 'circuito00');
                circuit.fixedToCamera = true;
              }else if(stateDoor1==0 && stateDoor2==1){
                circuit.kill();
                circuit=game.add.sprite(circuit_x, circuit_y, 'circuito01');
                circuit.fixedToCamera = true;
              }else if(stateDoor1==1 && stateDoor2==0){
                circuit.kill();
                circuit=game.add.sprite(circuit_x, circuit_y, 'circuito10');
                circuit.fixedToCamera = true;
              }else if(stateDoor1==1 && stateDoor2==1){
                circuit.kill();
                circuit=game.add.sprite(circuit_x, circuit_y, 'circuito11');
                circuit.fixedToCamera = true;
              }

          }

        }

        if (exitKey.justUp)
        {
          mapa.fixedToCamera=false;
          circuit.fixedToCamera=false;
          game.world.fixedToCamera=false;
          game.world.cameraOffset=false;
          //game.state.clearCurrentState('p_play');
          //   game.state.remove('p_play');
          game.state.start('menu');


        }


	},

	Win: function() {
		// We start the win state
		game.state.start('p_win');
	},

  killplayer: function(player) {
      player.kill();
      game.state.restart();
  },

  interruptor1: function(player, switch_1) {

      // Removes the star from the screen
      if (interruptorKey.justUp)
      {

          if(stateDoor1==0 && canMove_door1==1){
              canMove_door1=0;
              //game.time.events.repeat(Phaser.Timer.SECOND*2, 100, canMoveDoor1, this);
              stateDoor1=1;

          }else if(stateDoor1==1 && canMove_door1==1){
              canMove_door1=0;
              //game.time.events.repeat(Phaser.Timer.SECOND*2, 100, canMoveDoor1, this);
              stateDoor1=0;

          }

          if(stateDoor1==0 && stateDoor2==0){
            circuit.kill();
            circuit=game.add.sprite(circuit_x, circuit_y, 'circuito00');
            circuit.fixedToCamera = true;
          }else if(stateDoor1==0 && stateDoor2==1){
            circuit.kill();
            circuit=game.add.sprite(circuit_x, circuit_y, 'circuito01');
            circuit.fixedToCamera = true;
          }else if(stateDoor1==1 && stateDoor2==0){
            circuit.kill();
            circuit=game.add.sprite(circuit_x, circuit_y, 'circuito10');
            circuit.fixedToCamera = true;
          }else if(stateDoor1==1 && stateDoor2==1){
            circuit.kill();
            circuit=game.add.sprite(circuit_x, circuit_y, 'circuito11');
            circuit.fixedToCamera = true;
          }

      }
  },

  interruptor2: function(player, switch_2) {

      // Removes the star from the screen
      if (interruptorKey.justUp)
      {

          if(stateDoor2==0 && canMove_door2==1){
              canMove_door2=0;
              //game.time.events.repeat(Phaser.Timer.SECOND*2, 100, canMoveDoor1, this);
              stateDoor2=1;

          }else if(stateDoor2==1 && canMove_door2==1){
              canMove_door2=0;
              //game.time.events.repeat(Phaser.Timer.SECOND*2, 100, canMoveDoor1, this);
              stateDoor2=0;

          }

          if(stateDoor1==0 && stateDoor2==0){
            circuit.kill();
            circuit=game.add.sprite(circuit_x, circuit_y, 'circuito00');
            circuit.fixedToCamera = true;
          }else if(stateDoor1==0 && stateDoor2==1){
            circuit.kill();
            circuit=game.add.sprite(circuit_x, circuit_y, 'circuito01');
            circuit.fixedToCamera = true;
          }else if(stateDoor1==1 && stateDoor2==0){
            circuit.kill();
            circuit=game.add.sprite(circuit_x, circuit_y, 'circuito10');
            circuit.fixedToCamera = true;
          }else if(stateDoor1==1 && stateDoor2==1){
            circuit.kill();
            circuit=game.add.sprite(circuit_x, circuit_y, 'circuito11');
            circuit.fixedToCamera = true;
          }

      }
  },

  resize: function() {

      // layer.offset.x += 50;

      if (layer.displayWidth !== undefined)
      {
          var w = layer.displayWidth + 100;
          var h = layer.displayHeight + 100;
          layer.resize(w, h);
      }
      else
      {
          if (layer.width < 800)
          {
              var w = layer.width + 100;
              var h = layer.height + 100;
              layer.resize(w, h);
          }
      }

  }



}
