var optionsState =  {

    // The create function is a  standard Phaser function, and is automatically called.
    create: function() {



        // this.game.input.onDown.add(this.changeVolume, this);

        // game.global.music = game.add.audio('boden');
        //
        // game.global.music.play();
        // var newButton = new Phaser.Button(game.world.centerX, 0, 'v_up', this.buttonCallback, this, 1, 0, 2);
        // newButton.on = false;

        //The first argument to a button callback is the button

        var gametitle= this.game.add.text(this.game.world.centerX-120,30,'OPCIONES',{font:'40px Arial',fill:'#ffffff'});
        gametitle.font='Revalia';

        var mute_v= game.add.button(game.world.centerX, game.world.centerY-50, "mute",this.MuteVolume);
        mute_v.anchor.set(0.5);

        var message= this.game.add.text(this.game.world.centerX-400,game.world.centerY+60,'Presiona el icono para silenciar la musica',{font:'32px Arial',fill:'#ffffff'});
        message.font='Revalia';

        // mute_v.inputEnabled=true;
        //
        // mute_v.onInputDown(this.changeIcon);

        // goback button
        var replay= game.add.button(this.game.world.centerX-50,this.game.world.centerY+225, "back",this.goBack,this);

    },



    buttonCallback : function (btn){

    btn.on = !btn.on;
    btn.setFrames(1, (btn.on)?2:0, 2);
    btn.frame = (btn.on)?2:0;

    },

    // changeIcon: function(){
    //
    //
    //
    // },



    goBack: function(){


        this.game.state.start('menu');

    },

    MuteVolume: function() {

        if (this.game.global.music.mute==true)
        {
            this.game.global.music.mute = false;


        }

        else
        {
            this.game.global.music.mute=true;
        }

    }






};
