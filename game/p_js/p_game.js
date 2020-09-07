
//####################################################################################
//##                     Instanciación del Objeto que maneja el Juego              ##
//####################################################################################
var game = new Phaser.Game(1200, 600, Phaser.AUTO, 'gameDiv');
//Variables globales del juego de plataforma
var player;
var cursors;
var rayo1Text;
var rayo2Text;
var map;
var circuit;
var tileset;
var layer;
var doors;
var interruptorKey;
var exitKey;
var laser1;
var laser2;
var laserSwitch1;
var laserSwitch2;
var switch_1;
var switch_2;
var enemies;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var instrucciones1;
var instrucciones2;
var instrucciones3;
var instrucciones4;
var instrucciones5;
var instrucciones6;
var positionText1;
var positionText2;
var inicio_texto;
var instructionsText1;
var instructionsText2;
var instructionsText3;
var instructionsText4;
var instructionsText5;
var instructionsText6;
//Variables que cambian dependiendo del mundo
var mapName;
var laser1_x_init;
var laser1_y_init;
var laser1_type;
var laser2_x_init;
var laser2_y_init;
var laser2_type;
var enemy1_x_init;
var enemy1_x_deltaPos;
var enemy1_x_deltaNeg;
var enemy1_y_init;
var enemy2_x_init;
var enemy2_x_deltaPos;
var enemy2_x_deltaNeg;
var enemy2_y_init;
var enemy3_x_init;
var enemy3_x_deltaPos;
var enemy3_x_deltaNeg;
var enemy3_y_init;
var enemy4_x_init;
var enemy4_x_deltaPos;
var enemy4_x_deltaNeg;
var enemy4_y_init;
var player_x_init;
var player_y_init;
var laserDown_sprite;
var laserDownShoot_sprite;
var laserSwitch1_x_init;
var laserSwitch1_y_init;
var laserSwitch1_type_off;
var laserSwitch1_type_on;
var laserSwitch2_x_init;
var laserSwitch2_y_init;
var laserSwitch2_type_off;
var laserSwitch2_type_on;
var yellow_switch_off_sprite;
var yellow_switch_on_sprite;
var green_switch_off_sprite;
var green_switch_on_sprite;
var red_switch_off_sprite;
var red_switch_on_sprite;
var blue_switch_off_sprite;
var blue_switch_on_sprite;
var switch_1_x_init;
var switch_1_y_init;
var switch_1_type_off;
var switch_1_type_on;
var switch_2_x_init;
var switch_2_y_init;
var switch_2_type_off;
var switch_2_type_on;
var enemy1_animation;
var enemy2_animation;
var enemy3_animation;
var enemy4_animation;
var stateDoor1;
var canMove_door1;
var stateDoor2;
var canMove_door2;
var circuit_x;
var circuit_y;
var instructions_image;
//['bat.png','bat_fly.png']
//['spider.png','spider_walk1.png','spider_walk1.png']
//['bee.png','bee_fly.png']
//['snail.png','snail_walk.png']
//['fly.png','fly_fly.png']
//['frog.png','frog_leap.png']
//['ghost.png','ghost_normal.png']
//['mouse.png','mouse_walk.png']
//['snakeSlime.png','snakeSlime_ani.png']

game.state.add('p_load', p_loadState);
game.state.add('p_menu', p_menuState);
game.state.add('p_level1', p_level1State);
game.state.add('p_level2', p_level2State);
game.state.add('p_play', p_playState);
game.state.add('p_win', p_winState);

// After all of the states are added, we start the game by calling the
// boot state
game.state.start('p_load');
