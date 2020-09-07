// Here we use the  'official name' (bootState) when defining the state

var bootState = {

    // The create function is a  standard Phaser function, and is automatically called.
    create: function() {

        //Starting the Physics System.
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Calling the Load state.
        game.state.start('load');

        
    }
};
