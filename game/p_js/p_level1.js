var p_level1State = {

  create: function () {
    mapName='map1';
    laser1_x_init=640;
    laser1_y_init=128;
    laser1_type='laserRedVertical';
    laser2_x_init=26*64;
    laser2_y_init=128;
    laser2_type='laserYellowVertical';
    enemy1_x_init=4*64;
    enemy1_x_deltaPos=100;
    enemy1_x_deltaNeg=-100;
    enemy1_y_init=160;
    enemy2_x_init=3*64;
    enemy2_x_deltaPos=400;
    enemy2_x_deltaNeg=-64;
    enemy2_y_init=8*64;
    enemy3_x_init=64*21;
    enemy3_x_deltaPos=100;
    enemy3_x_deltaNeg=-100;
    enemy3_y_init=160;
    enemy4_x_init=16*64;
    enemy4_x_deltaPos=2*64;
    enemy4_x_deltaNeg=-3*64;
    enemy4_y_init=8*64;
    player_x_init=64;
    player_y_init=2*64;
    laserDown_sprite=14*5+5;
    laserDownShoot_sprite=14*5+7;
    laserSwitch1_x_init=640;
    laserSwitch1_y_init=64;
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
    switch_1_x_init=64;
    switch_1_y_init=640-120;
    switch_1_type_off=red_switch_off_sprite;
    switch_1_type_on=red_switch_on_sprite;
    switch_2_x_init=25*64;
    switch_2_y_init=640-120;
    switch_2_type_off=yellow_switch_off_sprite;
    switch_2_type_on=yellow_switch_on_sprite;
    enemy1_animation=['bee.png','bee_fly.png'];
    enemy2_animation=['spider.png','spider_walk1.png','spider_walk1.png'];
    enemy3_animation=['snail.png','snail_walk.png'];
    enemy4_animation=['bat.png','bat_fly.png'];
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
