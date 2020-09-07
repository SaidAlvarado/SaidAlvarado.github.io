var p_menuState = {
    create: function () {
		// Here we display the name of the game. When defining text, the
		// first two parameters are x and y positional values, then the
		// actual text, and then the 'font' defines the font (of course)
		// and 'fill' refers to the font color.
        var nameLabel = game.add.text(80, 80, 'Mundo 1',
                                    { font: '50px Arial', fill: '#ffffff' });
        var nameLabel = game.add.text(80, 2*80+10, 'Mundo 2',
                                    { font: '50px Arial', fill: '#ffffff' });
        // We give the player instructions on how to start the game
        var startLabel = game.add.text(400, 80+25,
                                       'presione la tecla "W" para el Mundo 1',
                                       {font: '25px Arial', fill: '#ffffff' });
        var startLabel = game.add.text(400, 2*80+10+25,
                                        'presione la tecla "E" para el Mundo 2',
                                        {font: '25px Arial', fill: '#ffffff' });

        // We define the wkey as Phaser.Keyboard.W so that we can act
        // when the player presses it
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        var ekey = game.input.keyboard.addKey(Phaser.Keyboard.E);
        // When the player presses the W key, we call the start function
        wkey.onDown.addOnce(this.start_M1, this);
        ekey.onDown.addOnce(this.start_M2, this);
    },

    // Inicializa las variables de cada mundo
    start_M1: function () {
        game.state.start('p_level1');
    },

    start_M2: function () {
        game.state.start('p_level2');
    }

};
