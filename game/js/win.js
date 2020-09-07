var winState = {

    create: function() {

        // Here we create a simple winScreen.
        //Title
        var winLabel = game.add.text(80, 80, 'You Won!', {font: '50px Arial', fill: '#00ff00'});

        // Instructions
        var startLabel = game.add.text(80, game.world.height - 80, 'press "W" to restart', {font: '25px Arial', fill: '#ffffff'});

        // Catch the  W key
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        wkey.onDown.addOnce(this.restart, this);
    },

    // The start function calls the play state.
    restart: function (){
        game.state.start('menu');
    },
};
