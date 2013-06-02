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

game.NPCEntities = {

    "Jessica" : game.NPC.extend({
        "quest_started" : false,
        "quest_complete" : false,

        "init" : function init(x, y, settings) {
            this.value = 1000;
            this.parent(x, y, settings);

            // Adjust collision bounding box.
            this.adjustBoxShape(0, -10, 25, 20);
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);

            if (!game.HUD.HUDItems.inventory.hasItem("book")) {
                game.dialog([
                    "Hi there ...",
                    "A/S/L?"
                ]);
            }
            else {
                game.dialog([
                    "SHAKESPEARE BOOK! THANK YOU!",
                    "KAWAIIIII~~~!!!!@$@#"
                ]);
            }
        }
    }),

    "James" : game.NPC.extend({
        "init": function init(x, y, settings) {
            this.parent(x, y, settings);

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact": function interact(actor, callback) {
            var self = this;

            self.parent(actor);

            game.dialog([
                "How are you? My name is James, nice to meet you."
            ]);
        }
    }),

    "Whitey" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);

            game.dialog([
                "Have you talked to the farmer? I think she needs your help."
            ]);
        }
    }),

    "Farmer" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);

            var hasNotCollectedBugs = ((me.game.getEntityByName("bug1").length >= 1) && (me.game.getEntityByName("bug2").length >= 1) && (me.game.getEntityByName("bug3").length >= 1) && (me.game.getEntityByName("bug4").length >= 1));
            var hasCollectedSomeBugs = ((me.game.getEntityByName("bug1").length >= 1) || (me.game.getEntityByName("bug2").length >= 1) || (me.game.getEntityByName("bug3").length >= 1) || (me.game.getEntityByName("bug4").length >= 1));
            var hasCollectedAllBugs = ((me.game.getEntityByName("bug1").length == 0) && (me.game.getEntityByName("bug2").length == 0) && (me.game.getEntityByName("bug3").length == 0) && (me.game.getEntityByName("bug4").length == 0));

            if (hasNotCollectedBugs) {
                game.dialog([
                    "Those damn bugs are eating ma' plants ...",
                    "Can you help me SWOT em' bugs on the fields?"
                ]);
            } else if (hasCollectedSomeBugs && !hasCollectedAllBugs) {
                game.dialog([
                    "There are still more of em' pesky SWOT bugs on the fields ..."
                ]);
            } else if (hasCollectedAllBugs) {
                game.dialog([
                    "Thanks mate, you helped a lot. Now my plants can grow in peace.",
                    "Continue heading East on your journey.",
                    "To thank you for your help, I shall teleport you as far as I can.",
                    "Get ready..."
                ], function onCallback() {
                    game.play.loadLevel({
                        "to"        : "winterfell",
//                        "music"     : "bells",
                        "fadeOut"   : "black",
                        "duration"  : 1000
                    });
                });
            } else {
                game.dialog([
                    "Oh hello there! Would you like to buy some of my products?"
                ]);
            }
        }
    }),

    "Bug1" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);
            this.hearts = 1;
            this.maxDistance = 50;

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);
            game.dialog([
                "Strength Bug: experience and consistency."
            ]);
        }
    }),

    "Bug2" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);
            this.hearts = 1;
            this.maxDistance = 50;

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);
            game.dialog([
                "Weakness Bug: no awareness."
            ]);
        }
    }),

    "Bug3" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);
            this.hearts = 1;
            this.maxDistance = 50;

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);
            game.dialog([
                "Opportunities Bug: expand activities, increase reputation, and leverage other brands."
            ]);
        }
    }),

    "Bug4" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);
            this.hearts = 1;
            this.maxDistance = 50;

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);
            game.dialog([
                "Threat Bug: main competitors (H&M and Zara)."
            ]);
        }
    }),

    "SnowGirl" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);

            game.dialog([
                "If you want to conquer the world, you shall need to go to the other side.",
                "These magical marketing doors shall help you or doom you, choose wisely.",
                "I can only show you the door. You have to walk through it."        // the matrix reference, hehe
            ]);
        }
    }),

    "Guard" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);
            this.invincible = true;

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);
            game.dialog([
                "Shooo... go away! Leave me alone!"
            ]);
        }
    }),

    "DungeonGuard" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);
            this.invincible = true;

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);

            var hasNotCollectedKeys = (!game.HUD.HUDItems.inventory.hasItem("key1") && !game.HUD.HUDItems.inventory.hasItem("key2") && !game.HUD.HUDItems.inventory.hasItem("key3") && !game.HUD.HUDItems.inventory.hasItem("key4"));
            var hasCollectedSomeKeys = (game.HUD.HUDItems.inventory.hasItem("key1") || game.HUD.HUDItems.inventory.hasItem("key2") || game.HUD.HUDItems.inventory.hasItem("key3") || game.HUD.HUDItems.inventory.hasItem("key4"));
            var hasCollectedAllKeys = (game.HUD.HUDItems.inventory.hasItem("key1") && game.HUD.HUDItems.inventory.hasItem("key2") && game.HUD.HUDItems.inventory.hasItem("key3") && game.HUD.HUDItems.inventory.hasItem("key4"));

            if (hasNotCollectedKeys) {
                game.dialog([
                    "Where are my keys??"
                ]);
            } else if (hasCollectedSomeKeys && !hasCollectedAllKeys) {
                game.dialog([
                    "I still need a few of the other success keys or else I'll get in trouble..."
                ]);
            } else if (hasCollectedAllKeys) {
                game.dialog([
                    "Thanks a lot you! You saved my life!",
                    "Those success keys will allow you to open new marketing opportunities.",
                    "As the reward, I shall help you get out of this dungeon.",
                    "Get ready ..."
                ], function onCallback() {
                    game.HUD.HUDItems.inventory.removeWeapon();
                    game.play.loadLevel({
                        "to"        : "castle_exterior",
                        "music"     : "zelda_windmill",
                        "fadeOut"   : "black",
                        "duration"  : 1000
                    });
                });
            } else {
                game.dialog([
                    "What are you doing here?!"
                ]);
            }
        }
    }),

    "Grandpa" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);
            game.dialog([
                "Back in my days ..."
            ]);
        }
    }),

    "Dog" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);
            game.dialog([
                "Wooof wooof!"
            ]);
        }
    }),

    "Sheep" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);
            game.dialog([
                "Baaaaa..."
            ]);
        }
    }),

    "Swan" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        }
    }),

    "Chicken" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;
            self.parent(actor);

            game.dialog([
                "Cluck... cluck!"
            ]);
        }
    }),

    "Princess" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);
            this.invincible = true;

            this.adjustBoxShape(0, -10, 25, 20);
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);
            game.dialog([
                "Congratulations! You've collected all the important marketing competencies.",
                "With that, you can finally reach your goal of world dominance.",
                "We shall meet again, Tadashi kun.",
                "I wish you all the best in your journey.",
                "Until next time...",
                "Sayonara...",
                "Good bye...",
                "Later...",
                "Jaa~~~"
            ], function onCallback() {
                me.state.change(me.state.CREDITS);
            });
        }
    })
};