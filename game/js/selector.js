
var selectorState =  {

    // The create function is a  standard Phaser function, and is automatically called.
    create: function() {


        // this.game.global.music=this.game.add.audio('goaman');
        // this.game.global.music.play();

        var gametitle= this.game.add.text(this.game.world.centerX-160,20,'Selecciona el nivel que quiera jugar',{font:'14px Arial',fill:'#ffffff'});
        gametitle.font='Revalia';
        //boton para ir al nivel1
        var grid = game.add.group();


        var level1 = game.add.button(game.world.centerX-40 / 2, game.world.centerY+250, "c_level1", this.goLevel1,this);
        level1.anchor.set(0.5);
        grid.add(level1);

        var level2 = game.add.button(game.world.centerX-25 / 2, game.world.centerY+250, "c_level2", this.goLevel2,this);
        level2.anchor.set(0.5);
        grid.add(level2);

        var level3 = game.add.button(game.world.centerX-25 / 2, game.world.centerY+250, "c_level3", this.goLevel3,this);
        level3.anchor.set(0.5);
        grid.add(level3);

        var level4 = game.add.button(game.world.centerX-25 / 2, game.world.centerY+250, "c_level4", this.goLevel4,this);
        level4.anchor.set(0.5);
        grid.add(level4);

        var level5 = game.add.button(game.world.centerX-25 / 2, game.world.centerY+250, "c_level5", this.goLevel5,this);
        level5.anchor.set(0.5);
        grid.add(level5);

        var level6 = game.add.button(game.world.centerX-25 / 2, game.world.centerY+250, "c_level6", this.goLevel6,this);
        level6.anchor.set(0.5);
        grid.add(level6);

        var level7 = game.add.button(game.world.centerX-25 / 2, game.world.centerY+250, "p_level1", this.goLevel7,this);
        level7.anchor.set(0.5);
        grid.add(level7);

        var level8 = game.add.button(game.world.centerX-25 / 2, game.world.centerY+250, "p_level2", this.goLevel8,this);
        level8.anchor.set(0.5);
        grid.add(level8);

        // var level7 = game.add.button(game.world.centerX-25 / 2, game.world.centerY+250, "c_level1", this.goLevel7,this);
        // level4.anchor.set(0.5);
        // grid.add(level7);
        //
        // var level8 = game.add.button(game.world.centerX-25 / 2, game.world.centerY+250, "c_level1", this.goLevel8,this);
        // level5.anchor.set(0.5);
        // grid.add(level8);
        //
        // var level9 = game.add.button(game.world.centerX-25 / 2, game.world.centerY+250, "c_level1", this.goLevel9,this);
        // level6.anchor.set(0.5);
        // grid.add(level9);

        grid.align(4,-1,230,150);
        grid.x=game.world.centerX-470;
        grid.y=50;




        // goback button
        var replay= game.add.button(this.game.world.centerX,this.game.world.centerY+225, "back",this.goBack,this);

    },


    goBack: function(){

        // this.game.global.music.destroy();
        this.game.state.start('menu');

    },

    goLevel1: function(){

        this.game.state.start('c_level1');


    },

    goLevel2: function(){

        this.game.state.start('c_level2');


    },

    goLevel3: function(){

        this.game.state.start('c_level3');


    },

    goLevel4: function(){

        this.game.state.start('c_level4');


    },

    goLevel5: function(){

        this.game.state.start('c_level5');


    },

    goLevel6: function(){

        this.game.state.start('c_level6');


    },

    goLevel7: function(){

        this.game.state.start('p_level1');


    },

    goLevel8: function(){

        this.game.state.start('p_level2');


    },

    goLevel9: function(){

        this.game.state.start('c_level1');


    },

    goLevel10: function(){

        this.game.state.start('c_level1');


    },

    goLevel11: function(){

        this.game.state.start('c_level1');


    },

    goLevel12: function(){

        this.game.state.start('c_level1');


    },




};
