
var loadState= {

    // Phaser standard preload function, used to define an load our assets.

    active: function(){


        game.time.events.add(10*Phaser.Timer.SECOND,function(){})
    },

    preload: function(){

        //Add a Loadding label on the screen
        var loadingLabel = game.add.text(80,150,'loading....',{font: '30px Courier', fill: '#ffffff'});

        // Load all the Assets
        // Backgroud image.
        game.load.image('background','assets/sci_fi_bg1.jpg');
        game.load.image('arrow', 'assets/arrow.png');
        game.load.image('bullet', 'assets/blue_ball.png');
        game.load.image('bullet2', 'assets/red_ball.png');
        game.load.image('ball', 'assets/sphere2.png');
        game.load.image('ball2', 'assets/sphere3.png');
        // Sprites for the slingshot animation
        game.load.image('analog', 'assets/fusia.png');
        game.load.image('arrow', 'assets/longarrow2.png');
        // Sprite for the safe zone, only a square.
        game.load.image("tile", "assets/gray_cube.png");
        game.load.image("explosion_square", "assets/white_cube.png");
        game.load.image("range_indicator", "assets/white_dot.png");
        // New Cubic Sprites
        game.load.image("win_cube", "assets/yellow_cube.png");
        game.load.image("start_cube", "assets/gray_cube.png");

        // Menu instructions images.
        game.load.image("C_Equation", "assets/Coulomb_equation.png");
        game.load.image("C_diagram", "assets/Coulomb1.png");
        // Win portal
        game.load.spritesheet('win_gate', 'assets/Portal_Gate_transparent2.png', 134, 114);
        // Tutorial screen
        game.load.image("black_screen", "assets/black_screen.png");
        game.load.image("white_arrow", "assets/white_arrow.png");
        game.load.image("play_button2", "assets/playbutton.png");
        game.load.image("clvl2_tut1", "assets/c_level2_tutorial.png");
        game.load.image("clvl3_tut1", "assets/c_level3_tutorial.png");
        game.load.image("clvl4_tut1", "assets/c_level4_tutorial.png");
        game.load.image("clvl5_tut1", "assets/c_level5_tutorial.png");
        game.load.image("clvl6_tut1", "assets/c_level6_tutorial.png");
        // Keyboard keys
        game.load.image("m_key", "assets/m_key.png");
        game.load.image("r_key", "assets/r_key.png");
        game.load.image("i_key", "assets/i_key.png");
        game.load.image("delete_key", "assets/delete_key.png");
        // In game Menu.
        game.load.image("menu_container", "assets/MenuPanel3.png");
        game.load.image("menu_tab", "assets/SubBarButtonBase.png");


        //cristhian assets
        game.load.image('background_menu','assets/images_c/background2.jpg');
        game.load.image('logo','assets/images_c/phaser.png');
        // game.load.spritesheet('button','assets/images_c/play_button.png',193,71);
        // game.load.spritesheet('button_glossary','assets/images_c/button_glossary.png',193,71);
        game.load.image('button','assets/images_c/play_button.png');
        game.load.image('button_slider','assets/images_c/menu_button.png');
        game.load.image('settings','assets/images_c/settings.png');
        game.load.image('glossary','assets/images_c/glossary.png');
        game.load.image('level_list','assets/images_c/level_list.png');
        game.load.image('gametitle','assets/images_c/gametitle.png');
        game.load.image('gridedition','assets/images_c/gridedition.png');
        game.load.image('deepblue','assets/images_c/blue_m.png');
        game.load.image('back','assets/images_c/replay.png');

        game.load.image('c_level1','assets/Thumbnails/c_level1_200.png');
        game.load.image('c_level2','assets/Thumbnails/c_level2_200.png');
        game.load.image('c_level3','assets/Thumbnails/c_level3_200.png');
        game.load.image('c_level4','assets/Thumbnails/c_level4_200.png');
        game.load.image('c_level5','assets/Thumbnails/c_level5_200.png');
        game.load.image('c_level6','assets/Thumbnails/c_level6_200.png');
        // game.load.image('c_level1','assets/Thumbnails/c_level1.png');
        // game.load.image('c_level1','assets/Thumbnails/c_level1.png');
        // game.load.image('c_level1','assets/Thumbnails/c_level1.png');
        // game.load.image('c_level1','assets/Thumbnails/c_level1.png');
        // game.load.image('c_level1','assets/Thumbnails/c_level1.png');
        // game.load.image('c_level1','assets/Thumbnails/c_level1.png');
        game.load.image('switch','assets/images_c/switch.png');
        game.load.image('coulomb','assets/images_c/coulomb.png');
        game.load.image('ec','assets/images_c/ec.png');
        game.load.image('current','assets/images_c/current.png');
        game.load.image('resistor','assets/images_c/resistor.png');

        // settings icons
        game.load.image('mute','assets/images_c/volume_off.png')
        game.load.image('v_up','assets/images_c/volume_up.png')

        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        game.load.audio('boden','assets/audio/bode_audio.mp3')
        game.load.audio('boden','assets/audio/bode_audio2.ogg')
        game.load.audio('goaman','assets/audio/goaman_intro.mp3')

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
        game.load.image('p_level1','p_assets/p_level1_200.png');
        game.load.image('p_level2','p_assets/p_level2_200.png');

    },

    create: function(){
        //Call the menuState
        //game.global.music = game.add.audio('boden');

        if (!game.global.music || !game.global.music.isPlaying)
        {  game.global.music = game.add.audio('boden', 1, true);}
        game.global.music.play();

        game.state.start('menu',true,false);
    }
};
