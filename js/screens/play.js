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

/* Main game */
game.PlayScreen = game.AnimatedScreen.extend({
    "loading" : false,

    "onLevelLoaded" : function onLevelLoaded(settings) {
        this.loading = false;
        this.parent();

        game.player = me.game.getEntityByName("player")[0];

        if (settings.location) {
            var p = settings.location.split(",").map(function map(value) {
                return +value.trim();
            });
            game.player.body.setPos(cp.v(p[0], c.HEIGHT - p[1]));
        }

        if (settings.dir) {
            game.player.dir_name = settings.dir;
            game.player.setCurrentAnimation("stand_" + settings.dir);
        }

        if (settings.music) {
            me.audio.stopTrack();
            me.audio.playTrack(settings.music);
        }
    },

    "loadLevel" : function loadLevel(settings) {
        var fade;
        var self = this;

        if (self.loading) {
            return;
        }
        self.loading = true;

        // Handle outbound transitions.
        fade = settings.fade || settings.fadeIn;
        if (fade) {
            me.game.viewport.fadeIn(fade, +settings.duration || 250, fadeComplete);
        }
        else {
            fadeComplete();
        }

        function fadeComplete() {
            // Remove all Chipmunk bodies and shapes.
            cm.removeAll();

            // When level loads, start music and move Player to the proper location.
            me.game.onLevelLoaded = function onLevelLoaded() {
                self.onLevelLoaded(settings);

                switch (settings.to) {
//                    case "players_room":
//                        if (!game.stat.load("dialog_players_room")) {
//                            game.dialog([
//                                "...",
//                                "I'm bored ...",
//                                "...",
//                                "Hmm...",
//                                "...",
//                                "I know!",
//                                "I shall dominate the world by 2020!",
//                                "Muahahahaha! :-)"
//                            ]);
//                            game.stat.save("dialog_players_room", true);
//                        }
//                        break;
                    case "winterfell":
                        if (!game.stat.load("dialog_winterfell")) {
                            game.dialog([
                                "...",
                                "It's so cold...",
                                "Winter is coming..."
                            ]);
                            game.stat.save("dialog_winterfell", true);
                        }
                        break;
                    case "dungeon":
                        if (!game.stat.load("dialog_dungeon")) {
                            game.dialog([
                                "Oh no!",
                                "Wrong choice... blast it!",
                                "I need to get out of here, maybe those success keys will help..."
                            ]);
                            game.stat.save("dialog_dungeon", true);
                        }
                        break;
                }
            };

            switch (settings.to) {
                case "players_room":
                    if (!game.stat.load("hint_movement")) {
                        me.event.publish("notify", [ "Hi, I'm Tadashi. You can show me where to go using the arrow keys." ]);
                        me.event.publish("notify", [ "Or if you prefer, the WASD keys also work." ]);
                        me.event.publish("notify", [ "Open the chest with an action key. There may be something useful inside!" ]);
                        game.stat.save("hint_movement", true);
                    }
                    break;
                case "players_house":
                    if (!game.stat.load("hint_players_house")) {
                        me.event.publish("notify", [ "That's your dog Buck. You can say hello using the action key!" ]);
                        game.stat.save("hint_players_house", true);
                    }
                    break;
                case "world":
                    if (!game.stat.load("hint_running")) {
                        me.event.publish("notify", [ "We should talk to some more people. Maybe we could help them with something!" ]);
                        me.event.publish("notify", [ "If you hold Shift, I promise to hurry as fast as I can!" ]);
                        game.stat.save("hint_running", true);
                    }
                    break;
                case "farmland":
                    if (!game.stat.load("hint_farmland")) {
                        me.event.publish("notify", [ "That's Uuchka. We should say hi using the action key!" ]);
                        game.stat.save("hint_farmland", true);
                    }
                    break;
            }

            // Load the first level.
            me.levelDirector.loadLevel(settings.to);

            // Handle transitions.
            fade = settings.fade || settings.fadeOut;
            if (fade) {
                me.game.viewport.fadeOut(fade, +settings.duration || 250);
            }
        }
    },

    "onResetEvent" : function onResetEvent() {
        // Initialize some stuff.
        game.installHUD();
        game.installExitHandler();

        // Load the level.
        if (c.DEBUG) {
            this.loadLevel({
                "to"        : "castle_hallway",
//                "music"     : "nyan_cat_original",
                "fadeOut"   : "black",
                "duration"  : 1000
            });
        } else {
            this.loadLevel({
                "to"        : "players_room",
                "music"     : "sm_where_am_i_going",
                "fadeOut"   : "black",
                "duration"  : 1000
            });
        }
    },

    "onDestroyEvent" : function onDestroyEvent() {
        // Remove the HUD.
        if (game.HUD) {
            me.game.remove(game.HUD);
        }
    }
});
