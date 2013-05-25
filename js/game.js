/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* Game namespace */
var game = {
    // Whether a dialog box is waiting for input.
    "modal" : false,

    // `true` when an object's y-coordinate changes to put it at the proper Z-order.
    "wantsResort" : false,

    // Run on page load.
    "onload" : function onload() {
        // Initialize the video.
        if (!me.video.init("screen", c.WIDTH, c.HEIGHT)) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // Initialize the audio.
        me.audio.init("ogg");

        // Key bindings.
        me.input.bindKey(me.input.KEY.UP,       "up");
        me.input.bindKey(me.input.KEY.LEFT,     "left");
        me.input.bindKey(me.input.KEY.DOWN,     "down");
        me.input.bindKey(me.input.KEY.RIGHT,    "right");
        me.input.bindKey(me.input.KEY.W,        "up");
        me.input.bindKey(me.input.KEY.A,        "left");
        me.input.bindKey(me.input.KEY.S,        "down");
        me.input.bindKey(me.input.KEY.D,        "right");
        me.input.bindKey(me.input.KEY.ENTER,    "action", true);
        me.input.bindKey(me.input.KEY.SPACE,    "action", true);
        me.input.bindKey(me.input.KEY.SHIFT,    "shift");
        me.input.bindKey(me.input.KEY.Z,        "attack", true);
        me.input.bindKey(c.KEY_APOS,            "attack", true);
        me.input.bindKey(me.input.KEY.ESC,      "skip", true);

        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);
        this.loadResources();

        // Initialize melonJS and display a loading screen.
        me.state.change(me.state.LOADING);
    },

    "loadResources" : function loadResources() {
        // Set all resources to be loaded.
        var resources = [];

        // Graphics.
        this.resources["img"].forEach(function forEach(value) {
            resources.push({
                "name"  : value,
                "type"  : "image",
                "src"   : "resources/img/" + value + ".png"
            })
        });

        // Maps.
        this.resources["map"].forEach(function forEach(value) {
            resources.push({
                "name"  : value,
                "type"  : "tmx",
                "src"   : "resources/map/" + value + ".tmx"
            })
        });

        // Sound effects.
        this.resources["sfx"].forEach(function forEach(value) {
            resources.push({
                "name"      : value,
                "type"      : "audio",
                "src"       : "resources/sfx/",
                "channel"   : 1
            })
        });

        // Music.
        this.resources["bgm"].forEach(function forEach(value) {
            resources.push({
                "name"      : value,
                "type"      : "audio",
                "src"       : "resources/bgm/",
                "channel"   : 2
            })
        });

        // Load the resources.
        me.loader.preload(resources);
    },

    // Run on game resources loaded.
    "loaded" : function loaded() {
        // Create a notifier.
        game.notify = new game.Notify();

        // Set the "Play" ScreenObject.
        game.play = new game.PlayScreen(20);
        me.state.set(me.state.PLAY, game.play);

//        // Set the TitleScreen ScreenObject.
//        me.state.set(me.state.MENU, new game.TitleScreen());

        // Set the Story ScreenObject.
        me.state.set(c.STATE_INTRO, new game.InfoScreen(
            game.story.intro,
            me.state.PLAY,
            "black",
            750,
            true
        ));

        // Set the GameOver ScreenObject.
        me.state.set(me.state.GAMEOVER, new game.InfoScreen(
            game.story.gameover,
            me.state.PLAY,
            "black",
            750
        ));

        // Set the Credits ScreenObject.
        me.state.set(me.state.CREDITS, new game.CreditsScreen());

        // Player entity.
        me.entityPool.add("player", game.PlayerEntity);

        // NPCs.
        me.entityPool.add("jessica", game.NPCEntities.Jessica);

        // Interactive objects.
        me.entityPool.add("chest", game.ChestEntity);
        me.entityPool.add("item", game.ItemEntity);

        // Static objects.
        me.entityPool.add("exit", game.Exit);
        me.entityPool.add("static", game.Static);

        if (c.DEBUG) {
            me.state.change(me.state.PLAY);
        }
        // Display warning if audio is not available.
        else if (!me.audio.isAudioEnable()) {
            me.state.set(c.STATE_INFO, new game.InfoScreen(game.info.audio_error));
            me.state.change(c.STATE_INFO);
        }
        else {
            // Start the game.
            me.state.change(c.STATE_INTRO);
        }
    },

    // Helper function to determine if a variable is an Object.
    "isObject" : function isObject(object) {
        try {
            return (!Array.isArray(object) && Object.keys(object));
        }
        catch (e) {
            return false;
        }
    },

    // Helper function to sort objects by `z` property, then `y` property.
    "sort" : function sort(a, b) {
        var result = (b.z - a.z);
        return (result ? result : ((b.pos && b.pos.y) - (a.pos && a.pos.y)) || 0);
    },

    // Helper function to get an image with error checking.
    "getImage" : function getImage(name) {
        var result = me.loader.getImage(name);
        if (!result) {
            throw "Error: No image named `" + name + "` (Did you forget to include the resource?)";
        }
        return result;
    }
};
