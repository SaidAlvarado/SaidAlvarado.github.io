var p_loadState= {
  	// The preload function is another standard Phaser function that we
  	// use to define and load our assets

    preload: function() {

        game.load.image('p_background', 'p_assets/industrial-background.jpg');
        game.load.image('map', 'p_assets/map.jpg');
        game.load.spritesheet('P1', 'p_assets/spritesheetP1.png', 72, 93);
        game.load.tilemap('map1', 'p_assets/map1.csv', null, Phaser.Tilemap.CSV);
        game.load.tilemap('map2', 'p_assets/map2.csv', null, Phaser.Tilemap.CSV);
        game.load.image('tiles', 'p_assets/kenny_ground_64x64.png');
        //----------------           Lazers       ----------------------------------------
        game.load.image('laserBlueVertical', 'p_assets/laserBlueVertical.png');
        game.load.image('laserGreenVertical', 'p_assets/laserGreenVertical.png');
        game.load.image('laserYellowVertical', 'p_assets/laserYellowVertical.png');
        game.load.image('laserRedVertical', 'p_assets/laserRedVertical.png');
        //----------------           Circuits       --------------------------------------
        game.load.image('circuito00', 'p_assets/Circuits/Circuitot00.png');
        game.load.image('circuito01', 'p_assets/Circuits/Circuitot01.png');
        game.load.image('circuito10', 'p_assets/Circuits/Circuitot10.png');
        game.load.image('circuito11', 'p_assets/Circuits/Circuitot11.png');
        //---------------           Enemies         --------------------------------------
        //  Here we load the Starling Texture Atlas and XML file
        game.load.atlasXML('enemies', 'p_assets/enemies.png', 'p_assets/enemies.xml');
        game.load.spritesheet('devices', 'p_assets/devices.png', 70, 70);
        //---------------           Instrucciones   --------------------------------------
        game.load.image('instructions_img', 'p_assets/Instrucciones.png');

        game.time.events.add(Phaser.Timer.SECOND,function(){});


    },
    create: function() {
        // Call the menu state
        game.state.start('p_menu');
    }
};
