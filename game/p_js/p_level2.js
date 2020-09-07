var p_level2State = {

  create: function () {
    mapName='map2';
    laser1_x_init=700;
    laser1_y_init=320;
    laser1_type='laserRedVertical';
    laser2_x_init=26*64;
    laser2_y_init=128;
    laser2_type='laserYellowVertical';
    enemy1_x_init=448;
    enemy1_x_deltaPos=64;
    enemy1_x_deltaNeg=-64;
    enemy1_y_init=160;
    enemy2_x_init=630;
    enemy2_x_deltaPos=2*64;
    enemy2_x_deltaNeg=-2*64;
    enemy2_y_init=8*64;
    enemy3_x_init=1250;
    enemy3_x_deltaPos=62;
    enemy3_x_deltaNeg=-100;
    enemy3_y_init=320;
    enemy4_x_init=1152;
    enemy4_x_deltaPos=4*64+60;
    enemy4_x_deltaNeg=-2*64;
    enemy4_y_init=8*64;
    player_x_init=64;
    player_y_init=2*64;
    laserDown_sprite=14*5+5;
    laserDownShoot_sprite=14*5+7;
    laserSwitch1_x_init=700;
    laserSwitch1_y_init=256;
    laserSwitch1_type_off=laserDown_sprite;
    laserSwitch1_type_on=laserDownShoot_sprite;
    laserSwitch2_x_init=26*64;
    laserSwitch2_y_init=64;
    laserSwitch2_type_off=laserDown_sprite;
    laserSwitch2_type_on=laserDownShoot_sprite;
    yellow_switch_off_sprite=14*5+1;
    yellow_switch_on_sprite=14*5;
    green_switch_off_sprite=14*5+3;
    green_switch_on_sprite=14*5+2;
    red_switch_off_sprite=14*6+1;
    red_switch_on_sprite=14*6;
    blue_switch_off_sprite=14*6+3;
    blue_switch_on_sprite=14*6+2;
    switch_1_x_init=832;
    switch_1_y_init=640-120;
    switch_1_type_off=red_switch_off_sprite;
    switch_1_type_on=red_switch_on_sprite;
    switch_2_x_init=24*64;
    switch_2_y_init=640-120;
    switch_2_type_off=yellow_switch_off_sprite;
    switch_2_type_on=yellow_switch_on_sprite;
    enemy1_animation=['fly.png','fly_fly.png'];
    enemy2_animation=['frog.png','frog_leap.png'];
    enemy3_animation=['bee.png','bee_fly.png'];
    enemy4_animation=['ghost.png','ghost_normal.png'];
    stateDoor1=0;
    canMove_door1=1;
    stateDoor2=0;
    canMove_door2=1;
    inicio_texto=16;
    circuit_x=810;
    circuit_y=inicio_texto+7*(32+2);

    instructions_image=game.add.sprite(0, 0, 'instructions_img');

    var akey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    akey.onDown.addOnce(this.start_, this);
  },

  start_: function () {
      game.state.start('p_play');
  },
};
