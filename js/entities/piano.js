game.PianoEntity = game.Sprite.extend({
    // Whether the piano has been played.
    "executed" : false,

    // Who executed the piano.
    "actor" : null,

    // Do something when the piano has been executed.
    "callback" : null,

    // the music name (as specified in resources.js)
    "music" : null,

    "init" : function init(x, y, settings) {
        this.parent(x, y, settings);

        // Adjust collision bounding box.
        this.adjustBoxShape(0, 0, 42, 32);

        this.music = settings.music;

        // Set shape layers.
        this.body.eachShape(function eachShape(shape) {
            shape.setLayers(c.LAYER_NO_COIN | c.LAYER_NO_NPC | c.LAYER_INTERACTIVE);
        });

        // Chests cannot be moved.
        this.body.setMass(Infinity);

        // Prevent opening this chest more than once.
        this.stat_key = "piano_" + me.game.currentLevel.name + "_" + this.pos.x + "_" + this.pos.y;
        if (game.stat.load(this.stat_key)) {
            // Open the chest. :)
            this.executed = true;
            this.setAnimationFrame(2);
        }
    },

    "interact" : function interact(actor, callback) {
        if (this.executed) {
            return;
        }

        // keep this piano executed.
        game.stat.save(this.stat_key, true);

        me.audio.stopTrack();
        me.audio.playTrack(this.music);

        this.actor = actor;
        this.callback = callback;
        this.animationpause = false;

        me.event.publish("notify", [ "Playing: " + this.music ]);
    }
});
