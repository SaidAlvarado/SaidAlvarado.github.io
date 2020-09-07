//################################# Global Variables  ##############################################
// Variables for obstacles
var c1_ball = [];
var c1_ball_mass = [];
// number of Positive obstacles
var c1_bar_numbers = 1;
// Number of negative obstacles
var c1_barn_numbers = 0;
// Current sprite (0 = blue, 1 = red)
var c1_bullet_color = 0;
// debouncing
var q_change_rate = 200;
var q_next_change = 0
// ball range indicator.
var c1_ball_indicator_group = [];

//Variables for the Gun
var c1_bullets;
var c1_bullet_mass = 1

// Slingshot variables
var catchFlag = false;  //checks whereevere the mouse is currently aiming the balls.
var launchVelocity = 0;
var arrow;

// White trayectory trail variables
var bmd;

// Variables for text
// var c1_scoreText;

// Variables for the start and end zones
var launch_zone;
var win_zone;
var c1_win_x = 600;
var c1_win_y = 450;



var bg;

// Tutorial menu
// Boolean that either pauses or restarts the game.
var game_paused = true;



var c_level1= {

    // Phaser standard preload function, used to define an load our assets.
    create: function() {


        //Start the game paused
        game_paused = true;

        //################################# Create the Background  ##############################################
        // Star sky Background
        // game.stage.backgroundColor = '#313131';
        bg = game.add.sprite(0, 0,  'background');
        bg.x = 0;
        bg.y = 0;
        bg.height = game.height;
        bg.width = game.width;

        //################################# Instruction text  ##############################################

        //################################# Launch zone sprite  ##############################################
        launch_zone = game.add.sprite(0, 0, 'tile');
        launch_zone.width = game.width/5;
        launch_zone.height = game.height;
        launch_zone.alpha = 0.8;
        launch_zone.inputEnabled = true;//..inside your update() function...if (yoursprite.input.pointerOver()) {   //..your code}

        //################################# Trayectory trail  ##############################################
        // Generatae the image used for the trail
        bmd = game.add.bitmapData(1200, 600);
        // Color the trail white.
        bmd.context.fillStyle = '#ffffff';
        // Create a Sprite object from the bitmap we just created
        var bg = game.add.sprite(0, 0, bmd);

        //################################# Prepare Slingshot Animation ##############################################
        // Create the sllingshot sprites
        analog = game.add.sprite(200, 450, 'analog');
        analog.width = 8;
        analog.rotation = 220;
        analog.alpha = 0;
        analog.anchor.setTo(0.5, 0.0);
        // Point of the slingoshot sprite
        arrow = game.add.sprite(200, 450, 'arrow');
        arrow.anchor.setTo(0.1, 0.5);
        arrow.alpha = 0;

        //################################# Create the bullet Object ##############################################
        // Create the sprite for the bullet, make it appear outside the screen
        c1_bullets = game.add.sprite(10000, 10000, 'bullet');
        // Enable the physics engine
        game.physics.enable([c1_bullets], Phaser.Physics.ARCADE);
        // Configure physics behaviour
        c1_bullets.anchor.setTo(0.5, 0.5);
        c1_bullets.body.collideWorldBounds = true;
        c1_bullets.body.bounce.set(0.9);
        c1_bullets.body.drag.set(20, 20);

        //################################# Random Obstacles ##############################################
        // PROTONS
        // Create Groups for the Obstacles
        // balls = game.add.group();
        // balls.enableBody = true;
        //Randomly Create and Position the Obstacles

        c1_ball[0] = game.add.sprite(-400, -200, 'ball2');
        c1_ball[0].scale.setTo(1, 1);
        c1_ball_mass[0] = -70;


        // Iteratively create the obstacles
        for (var i = 0; i < c1_bar_numbers + c1_barn_numbers; i++)
        {   // POSITIVE OBSTACLES
            // if (i < c1_bar_numbers) {
            //     c1_ball[i] = game.add.sprite(game.world.randomX + 20, game.world.randomY + 20, 'ball');
            //     // Set a mass for each ball
            //     c1_ball_mass[i] = getRandomIntInclusive(20,50);
            // }
            // // NEGATIVE OBSTACLES
            // else {
            //     c1_ball[i] = game.add.sprite(game.world.randomX + 20, game.world.randomY + 20, 'ball2');
            //     //Set a mass for each ball
            //     c1_ball_mass[i] = (-1)*getRandomIntInclusive(20,50);
            // }

            //Make the balls collide with the screen edge.
            // c1_ball[i].body.collideWorldBounds = true;
            c1_ball[i].anchor.setTo(0.5, 0.5);
            var scale = 1.5;
            // c1_ball[i].scale.setTo(1 + scale, 1 + scale);

            // Create group for the range indicators
            c1_ball_indicator_group[i] = game.add.group();
            c1_ball_indicator_group[i].x = c1_ball[i].x;
            c1_ball_indicator_group[i].y = c1_ball[i].y;
            var indicator_quantity = 50
            var indicator_base_range = 200;//*(1 - c1_ball[i].scale.x);
            for (var j = 0; j < indicator_quantity; j++) {
                c1_ball_indicator_group[i].create(indicator_base_range*Math.cos(2*3.14159265/indicator_quantity*j), indicator_base_range*Math.sin(2*3.14159265/indicator_quantity*j), 'range_indicator');
            }

            game.physics.enable(c1_ball, Phaser.Physics.ARCADE);
        }




        //################################# Texto ##############################################
        // c1_scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '16px', fill: '#000' });

        //################################# Win Rectangle ##############################################
        // If the c1_bullets hits this, you win the game
        // win_zone = game.add.sprite(win_x,win_y,'win_cube');
        // game.physics.enable(win_zone, Phaser.Physics.ARCADE);

        //################################# Keyboard Controls ##############################################
        // Also enable the keyboard to reset if neccesary
        this.keyboard = game.input.keyboard;

        //################################# Particle Explosion ##############################################
        // placing a particle emitter at coordinates 0, 0 (we'll place it in its proper position later) which can fire up to 30 particles
        this.red_emitter = game.add.emitter(0, 0, 30);
        // our particle is the same old "tile" image
        this.red_emitter.makeParticles("bullet2");
        // setting a gravity for each particle
        this.red_emitter.gravity = 200;
        // particles would be too big, so let's set their min and max scale.
        this.red_emitter.maxParticleScale = 0.35;
        this.red_emitter.minParticleScale = 0.2;

        // placing a particle emitter at coordinates 0, 0 (we'll place it in its proper position later) which can fire up to 30 particles
        this.blue_emitter = game.add.emitter(0, 0, 30);
        // our particle is the same old "tile" image
        this.blue_emitter.makeParticles("bullet");
        // setting a gravity for each particle
        this.blue_emitter.gravity = 200;
        // particles would be too big, so let's set their min and max scale.
        this.blue_emitter.maxParticleScale = 0.35;
        this.blue_emitter.minParticleScale = 0.2;


        //################################# Pretty Win gate  ##############################################
        win_gate = game.add.sprite(c1_win_x, c1_win_y, 'win_gate');
        win_gate.anchor.setTo(0.5, 0.5);
        win_gate.scale.setTo(0.6, 0.6);
        // Fix the bounding box
        game.physics.enable([win_gate], Phaser.Physics.ARCADE);
        win_gate.body.immovable = true;
        win_gate.body.setSize(60, 100, 40, 10);

        win_gate.animations.add('run', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
        win_gate.angle = 80;
        game.physics.enable(win_gate, Phaser.Physics.ARCADE);


        //################################# In game Menu  ##############################################
        // Containers
        menu_container = game.add.sprite(20, 0, "menu_container");
        menu_container.scale.setTo(0.5, 0.5);
        menu_container_tab = game.add.sprite(245, 265, "menu_tab");
        menu_container_tab.anchor.setTo(0.5, 0.5);
        menu_container_tab.rotation = 3.14159265;
        menu_container_tab_text = game.add.text(237, 253, 'M', {font: '20px Arial', fill: '#ffffff'});
        // First entry
        menu_m_key1 = game.add.sprite(40, 20, "m_key");
        menu_m_key1.scale.setTo(0.07, 0.07);
        menu_entry1_text = game.add.text(90, 25, 'Este menú', {font: '20px Arial', fill: '#ffffff'});
        // Second entry
        menu_i_key1 = game.add.sprite(40, 80, "i_key");
        menu_i_key1.scale.setTo(0.07, 0.07);
        menu_entry2_text = game.add.text(90, 85, 'Instrucciones', {font: '20px Arial', fill: '#ffffff'});
        // Third entry
        menu_r_key1 = game.add.sprite(40, 140, "r_key");
        menu_r_key1.scale.setTo(0.07, 0.07);
        menu_entry3_text = game.add.text(90, 145, 'Resetear Nivel', {font: '20px Arial', fill: '#ffffff'});
        // Fourth entry
        menu_del_key1 = game.add.sprite(40, 200, "delete_key");
        menu_del_key1.scale.setTo(0.07, 0.07);
        menu_entry4_text = game.add.text(90, 205, 'Salir', {font: '20px Arial', fill: '#ffffff'});
        // Put everything in a group
        menu_menuGroup = game.add.group();
        menu_menuGroup.add(menu_container); menu_menuGroup.add(menu_container_tab); menu_menuGroup.add(menu_container_tab_text);
        menu_menuGroup.add(menu_m_key1); menu_menuGroup.add(menu_entry1_text); menu_menuGroup.add(menu_i_key1);
        menu_menuGroup.add(menu_entry2_text); menu_menuGroup.add(menu_r_key1); menu_menuGroup.add(menu_entry3_text);
        menu_menuGroup.add(menu_del_key1); menu_menuGroup.add(menu_entry4_text);
        // Hide the menu
        menu_menuGroup.y = -250;

        //################################# Tutorial Screen  ##############################################
        black_screen = game.add.sprite(0,0,'black_screen');
        black_screen.alpha = 0.8;
        title_text = game.add.text(game.width / 2 - 100, 20, 'Electro Dash', {font: '50px Arial', fill: '#ffffff'});
        level_text = game.add.text(game.width / 2, 80, 'Nivel 1', {font: '20px Arial', fill: '#ffffff'});
        launch_zone_tut = game.add.sprite(0, 0, "explosion_square");
        launch_zone_tut.alpha = 0.5;
        launch_zone_tut.width = game.width/5;
        launch_zone_tut.height = game.height;
        // Instruction for drawing and shooting electrons.
        tut_arrow1 = game.add.sprite(230, 450, "white_arrow");
        tut_arrow1.width = 100;
        tut_arrow1.height = tut_arrow1.width;
        tut_arrow1.rotation = 0.8;
        tut_text1 = game.add.text(300, 500, 'Has Click y arrastra el mouse en esta área\ny suelta para disparar las partículas.', {font: '18px Arial', fill: '#ffffff'});
        // Instructions to shoot for the gate.
        tut_gate = game.add.sprite(1000, 300, 'win_gate');
        tut_gate.animations.add('run', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
        tut_gate.scale.setTo(0.6, 0.6);
        tut_gate.angle = 80;
        tut_arrow2 = game.add.sprite(1025, 425, "white_arrow");
        tut_arrow2.width = 60;
        tut_arrow2.height = tut_arrow2.width;
        tut_arrow2.rotation = 2.2;
        tut_text2 = game.add.text(970, 475, 'Has que la particula\nllegue a este portal.', {font: '18px Arial', fill: '#ffffff'});
        // Menu instructions
        tut_arrow3 = game.add.sprite(100, 50, "white_arrow");
        tut_arrow3.width = 60;
        tut_arrow3.height = tut_arrow3.width;
        tut_arrow3.rotation = 2.2;
        tut_text3 = game.add.text(50, 100, '[M] para ver el menú', {font: '18px Arial', fill: '#ffffff'});
        tut_m_key1 = game.add.sprite(37, 93, "m_key");
        tut_m_key1.scale.setTo(0.07, 0.07);
        // Play Button
        tut_play_button = game.add.button(1100, 20, "play_button2",toggleMenu);
        tut_play_button.scale.setTo(0.6, 0.6);
        tut_text4 = game.add.text(1118, 105, 'Jugar', {font: '18px Arial', fill: '#ffffff'});
        // Electric obstacle instructions.
        // tut_q_1  = game.add.sprite(600, 200, "ball");
        // tut_q_1.scale.setTo(3, 3);
        // tut_text5 = game.add.text(460, 300, 'Como imanes. Los Obstáculos de Polaridad\ndiferentes te van a atraer y sacar de curso', {font: '20px Arial', fill: '#ffffff'});
        // Put everything in a group
        tut_menuGroup = game.add.group();
        tut_menuGroup.add(black_screen); tut_menuGroup.add(tut_text4); tut_menuGroup.add(tut_play_button);
        tut_menuGroup.add(tut_text3); tut_menuGroup.add(tut_arrow3); tut_menuGroup.add(tut_text2); tut_menuGroup.add(tut_arrow2);
        tut_menuGroup.add(tut_gate); tut_menuGroup.add(tut_text1); tut_menuGroup.add(tut_arrow1); tut_menuGroup.add(launch_zone_tut);
        tut_menuGroup.add(level_text); tut_menuGroup.add(title_text);  tut_menuGroup.add(tut_m_key1);

        // Position the menu offscreen, so that it comes to the screen.
        tut_menuGroup.x = 1500;
        game.add.tween(tut_menuGroup).to({ x: 0}, 2000, Phaser.Easing.Linear.Out, true);



    },




     update: function() {


        if (game_paused){
            //TUtorial screen mechanics
            tut_gate.animations.play('run');
            // If you hit I, Toogle the menu.
            if (this.keyboard.isDown(Phaser.Keyboard.I)) c1_toggleMenu();
        }
        else{
            //################################# Animate the Range Indicators  ##############################################
            for (var i = 0; i < c1_ball_indicator_group.length; i++) c1_ball_indicator_group[i].rotation += 0.01;

            //################################# Frame per frame calculations  ##############################################
            //Kill particle on impact
            game.physics.arcade.overlap(c1_bullets, c1_ball, this.particleImpact, null, this);
            arrow.rotation = game.physics.arcade.angleBetween(c1_bullets, arrow);

            //################################# Drag and shoot state machine  ##############################################
            // click to charge the shot. Only if youre over the launch zone.
            if (game.input.activePointer.isDown && catchFlag == false && launch_zone.input.pointerOver())
            {
                c1_bullets.x = game.input.activePointer.worldX;
                c1_bullets.y = game.input.activePointer.worldY;

                set(c1_bullets,game.input.activePointer);

                // Clean the Trayectory trail
                bmd.clear();

                // Draw marker on click point
                bmd.circle(game.input.activePointer.worldX, game.input.activePointer.worldY, 4,'rgb(255,255,255)');

            }
            // While charging the shot, show the direction and force
            if (catchFlag == true){
                //  Track the ball sprite to the mouse
                c1_bullets.x = game.input.activePointer.worldX;
                c1_bullets.y = game.input.activePointer.worldY;

                arrow.alpha = 1;
                analog.alpha = 0.5;
                analog.rotation = arrow.rotation + 3.14 / 2;
                analog.height = game.physics.arcade.distanceBetween(arrow, c1_bullets);
                launchVelocity = analog.height;
            }
            // Release the mouse to shoot the particle.
            if (game.input.activePointer.isUp && catchFlag == true) this.c1_launch();

            //################################# Update the Trayectory trail  ##############################################
            // Only draw the trail if the bullet is on screen and the bullet is not on the slingshot
            if (c1_bullets.x < 5000 && catchFlag == false ){
                // Draw a small rectangle en the position of the bullet
                bmd.context.fillRect(c1_bullets.x, c1_bullets.y, 2, 2);
                // Persistence of the trail
                bmd.dirty = true;
            }
            //################################# Calculate the gavity over the bullet  ##############################################
            //Coulomb force calculation.
            c1_ForceCalculation(c1_bullets);

            //################################# Win Gate ##############################################
            // If the c1_bullets hits this, you win the game
            game.physics.arcade.overlap(c1_bullets, win_gate, this.win, null, this);
            win_gate.animations.play('run');


            //################################# Keyboard Controls ##############################################
            // If you hit R, reset the game.
            if (this.keyboard.isDown(Phaser.Keyboard.R)) game.state.start('c_level1');
            // If you hit M, Toogle the menu.
            if (this.keyboard.isDown(Phaser.Keyboard.M)) c1_toggleInGameMenu();
            // If you hit I, Toogle the menu.
            if (this.keyboard.isDown(Phaser.Keyboard.I)) c1_toggleMenu();

            //################################# Charge inversion mechanic #############################################
            //Invert the sign of the masses
            if (this.keyboard.isDown(Phaser.Keyboard.V)) c1_q_change();
        }

    },

    win: function(){
        // go to the win state
        game.state.start('c_level2');
    },

    particleImpact: function(bullet, ball){
        // firing 10 particles at once with a 1000 milliseconds lifespan
        // placing the emitter over the player
        if (c1_bullet_color == 0){
            this.blue_emitter.x = c1_bullets.x;
            this.blue_emitter.y = c1_bullets.y;
            this.blue_emitter.start(true, 800, null, 20);
        }
        if (c1_bullet_color == 1){
            this.red_emitter.x = c1_bullets.x;
            this.red_emitter.y = c1_bullets.y;
            this.red_emitter.start(true, 800, null, 20);
        }
        // Removes the bullet from the screen
        bullet.x = 10000;
        bullet.y = 10000;
        c1_bullets.body.moves = false;
    },

    // Funcion to launch the particle
    c1_launch: function() {

        catchFlag = false;
        c1_bullets.body.moves = true;

        arrow.alpha = 0;
        analog.alpha = 0;

        Xvector = (arrow.x - c1_bullets.x) * 2.5;
        Yvector = (arrow.y - c1_bullets.y) * 2.5;

        c1_bullets.body.velocity.setTo(Xvector, Yvector);
    }


};





//################################# Coulomb/Gravity force update function  ##############################################
// Coulumb Force Equation
function c1_ForceCalculation(child) {

    //Tuning variables
    var c1_G = 6;
    var c1_Radius_of_effect = 200;
    var c1_min_Radius_of_effect = 50;

    var c1_Accumulated_Gravity = new Phaser.Point(0,0);

    // var min_distance = 10000000;
    // var min_distance_scale = 0;
    // for each obstacle (ball) on the screen.
    for (var i = 0; i < c1_bar_numbers + c1_barn_numbers; i++) {

        // Calculate the distance vector
        c1_Gravity_vector = new Phaser.Point(c1_ball[i].x - child.body.x, c1_ball[i].y - child.body.y);
        c1_Gravity_vector_test = new Phaser.Point(c1_ball[i].x - child.body.x, c1_ball[i].y - child.body.y);

        // From the distance vector obtain the distance, and constrain it to usable (playable) values. (the +10 is to make sure
        // there is a case in which the bullet is so far away that the validation 10 lines below cancels de summation).
        // Also take into consideration the radius of the Ball to get the actual magnitude of the distance.
        // var c1_Gravity_distance = floatConstraint(c1_Gravity_vector.getMagnitude() - 20*c1_ball[i].scale.x, c1_min_Radius_of_effect, Radius_of_effect);
        var c1_Gravity_distance = floatConstraint(c1_Gravity_vector.getMagnitude() - 100, c1_min_Radius_of_effect, c1_Radius_of_effect);

        // if (min_distance > c1_Gravity_vector.getMagnitude()){ min_distance = c1_Gravity_vector.getMagnitude(); min_distance_scale = c1_ball[i].scale.x}

        // Now, we calculate the actual magnitude of the gravitational force.
        c1_Gravity_Magnitude = c1_G*c1_bullet_mass*c1_ball_mass[i]/c1_Gravity_distance*c1_Gravity_distance;
        // Normalize the gravity vector and scale by the Gravity magnitude
        c1_Gravity_vector_scaled = c1_Gravity_vector.normalize().multiply(c1_Gravity_Magnitude,c1_Gravity_Magnitude);

        // Only let it act if the bullet is close enough
        if (c1_Gravity_vector_test.getMagnitude() < c1_Radius_of_effect)  c1_Accumulated_Gravity = Phaser.Point.add(c1_Accumulated_Gravity,c1_Gravity_vector_scaled);

    }
    child.body.gravity = c1_Accumulated_Gravity;
    // c1_scoreText.text = child.body.gravity;
    // c1_scoreText.text = win_gate.angle;
    // c1_scoreText.text = min_distance + '\n' + min_distance_scale;
}

// Change the sprite and sign of the charge of every obstacle.
function c1_q_change() {

    // debouncing validation
    if (game.time.now > q_next_change )
    {
        q_next_change = game.time.now + q_change_rate;

        // for (var i = 0; i < c1_bar_numbers + c1_barn_numbers; i++) c1_ball_mass[i] = (-1)*c1_ball_mass[i];
        c1_bullet_mass = (-1)*c1_bullet_mass;
        if (c1_bullet_color == 0) {c1_bullets.loadTexture('bullet2',0); c1_bullet_color = 1;}
        else {c1_bullets.loadTexture('bullet',0); c1_bullet_color = 0;}
    }

}


//################################# Slingshot Functions ##############################################
// Funtion to show the slingoshot preparation animation
function set(c1_bullets,pointer) {

    catchFlag = true;

    c1_bullets.body.moves = false;
    c1_bullets.body.velocity.setTo(0, 0);
    arrow.reset(c1_bullets.x, c1_bullets.y);
    analog.reset(c1_bullets.x, c1_bullets.y);

}


// // Remove the function if it collides
// function particleImpact (bullet, ball) {
//     // Removes the bullet from the screen
//     bullet.x = 10000;
//     bullet.y = 10000;
//     c1_bullets.body.moves = false;
//     // firing 10 particles at once with a 1000 milliseconds lifespan
//     this.emitter.start(true, 1000, null, 10);
// }


function render() {
}


//################################# Math helper functions ##############################################
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function floatConstraint(variab, min, max) {

    if (variab > max) return max;
    if (variab < min) return min;
    return variab

}


//################################# Menu functions ##############################################
function c1_toggleMenu(){
     if(tut_menuGroup.x == 0){
          var menuTween = game.add.tween(tut_menuGroup).to({
               x: 1500
          }, 1000, Phaser.Easing.Bounce.Out, true);
          game_paused = false;
     }
     if(tut_menuGroup.x == 1500){
          var menuTween = game.add.tween(tut_menuGroup).to({
               x: 0
          }, 1000, Phaser.Easing.Bounce.Out, true);

          game_paused = true;
     }
}

function c1_toggleInGameMenu(){
     if(menu_menuGroup.y == 0){
          var menuTween = game.add.tween(menu_menuGroup).to({
               y: -250
          }, 500, Phaser.Easing.Bounce.Out, true);
     }
     if(menu_menuGroup.y == -250){
          var menuTween = game.add.tween(menu_menuGroup).to({
               y: 0
          }, 500, Phaser.Easing.Bounce.Out, true);

     }
}






/* SC5
1) Added trayectory trail for c1_bullets
2) Slingshot only within bounding box.
3) Win condition rectangle.
*/


/* SC4
1) Added star background
2) Added slingshot mechanic
*/
