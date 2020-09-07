var menuState = {

    create: function() {

        // Here we create a simple menu.

        //Background Color
        // game.stage.backgroundColor = '#666666';
        //
        // //Add instructions
        // menu = game.add.sprite(game.width*5/8, game.height/3, 'C_diagram');
        // menu.anchor.setTo(0.5, 0.5);
        // formula = game.add.sprite(game.width*6/8, game.height/3 - 40, 'C_Equation');
        // formula.scale.set(0.4,0.4);
        // var instLabel = game.add.text(game.width*4/8 , game.height/2 +20, '+ Dispara las particulas hacia el objetivo\n+ Las particulas de la misma polaridad (Color) se repelen\n+ Las de diferente polaridad se atraen.\n+ Mientras más cerca estén las partículas con más fuerza se afectan.', {font: '15px Arial', fill: '#ffffff'});



        //Title

        // // Instructions
        // var startLabel = game.add.text(80, game.world.height - 80, 'press "1-6" to start the levels', {font: '25px Arial', fill: '#ffffff'});
        //
        // // Catch the  W key
        // var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        // wkey.onDown.addOnce(this.start, this);
        //
        // // Catch the  1 key
        // var onekey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        // onekey.onDown.addOnce(this.start_clvl1, this);
        //
        // // Catch the  2 key
        // var twokey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
        // twokey.onDown.addOnce(this.start_clvl2, this);
        //
        // // Catch the  3 key
        // var threekey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
        // threekey.onDown.addOnce(this.start_clvl3, this);
        //
        // // Catch the  4 key
        // var fourkey = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
        // fourkey.onDown.addOnce(this.start_clvl4, this);
        //
        // // Catch the  5 key
        // var fivekey = game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
        // fivekey.onDown.addOnce(this.start_clvl5, this);
        //
        // // Catch the  6 key
        // var sixkey = game.input.keyboard.addKey(Phaser.Keyboard.SIX);
        // sixkey.onDown.addOnce(this.start_clvl6, this);
        // // creando la imagen de background
        // // var background = game.add.sprite(0,0,'background_menu');
        // // background.scale.setTo(2,2);

        //game.stage.backgroundColor = '#020028';

        // var play_button= game.add.button(game.world.centerX-90, game.world.centerY+110,'button',this.actionOnClick,this,2,0,1);
        // play_button.scale.setTo(1,1);

        // var title = game.add.sprite(game.width / 2, 60, "gametitle");
        // title.anchor.set(0.5);
        game.world.setBounds(0, 0, this.game.width, this.game.height);

        var grid = game.add.sprite(game.world.centerX, 100, "gridedition");
        grid.anchor.set(0.5);

        // play button
        //x -100
        // menu list
        //-25 / 2 -85
        var play_button= game.add.button(game.world.centerX , game.world.centerY+20,'button',this.actionOnClick,this,2,0,1);
        play_button.anchor.set(0.5)
        play_button.scale.setTo(1,1);

        //Agrego un grupo de botones al menu group

        this.menuGroup= game.add.group();

        var menu_button = game.add.button(game.world.centerX, game.world.centerY+250, "button_slider", this.toogleMenu,this);

          menu_button.anchor.set(0.5);
          this.menuGroup.add(menu_button);

          var selector_level_list = game.add.button(game.world.centerX, game.height + 50 , "level_list", this.actionOnClickSelector,this);
          selector_level_list.anchor.set(0.5);

          this.menuGroup.add( selector_level_list );

          var options = game.add.button(game.world.centerX-80, game.height + 50, "settings",this.actionOnClickOptions,this);
          options.anchor.set(0.5);


          this.menuGroup.add(options);

           var glossary = game.add.button(game.world.centerX+80, game.height + 50, "glossary", this.actionOnClickGlossary,this);
           glossary.anchor.set(0.5);
           this.menuGroup.add(glossary);



    },

    toogleMenu: function(){



         if(this.menuGroup.y == 0){
          var menuTween = game.add.tween(this.menuGroup).to({
               y: -100
          }, 500, Phaser.Easing.Bounce.Out, true);

         }

         if(this.menuGroup.y == -100){

              var menuTween = game.add.tween(this.menuGroup).to({
                   y: 0
              }, 500, Phaser.Easing.Bounce.Out, true);
         }





    },


    actionOnClick: function(data){

        game.state.start('c_level1');

        //nameLabelButton.visible =! nameLabelButton.visible;
    },


    // The start function calls the play state.
    start_clvl1: function (){
        game.state.start('c_level1');
    },

    // The start function calls the play state.
    start_clvl2: function (){
        game.state.start('c_level2');
    },

    // The start function calls the play state.
    start_clvl3: function (){
        game.state.start('c_level3');
    },

    // The start function calls the play state.
    start_clvl4: function (){
        game.state.start('c_level4');
    },

    // The start function calls the play state.
    start_clvl5: function (){
        game.state.start('c_level5');
    },

    // The start function calls the play state.
    start_clvl6: function (){
        game.state.start('c_level6');
    },

    actionOnClickGlossary: function(data){

        // this.game.global.music.destroy();
        game.state.start('glossary');

        //nameLabelButton.visible =! nameLabelButton.visible;
    },

    actionOnClickSelector: function(data){



        game.state.start('select');





    },

    actionOnClickOptions: function(data){


        game.state.start('settings');

    },


    // // The start function calls the play state.
    // start: function (){
    //     game.state.start('level1');
    // },


};
