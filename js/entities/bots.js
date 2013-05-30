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
                "I'm Whitey, what's your name?"
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

            var hasNotCollectedBugs = (!game.HUD.HUDItems.inventory.hasItem("bug1") && !game.HUD.HUDItems.inventory.hasItem("bug2") && !game.HUD.HUDItems.inventory.hasItem("bug3") && !game.HUD.HUDItems.inventory.hasItem("bug4"));
            var hasCollectedSomeBugs = (game.HUD.HUDItems.inventory.hasItem("bug1") || game.HUD.HUDItems.inventory.hasItem("bug2") || game.HUD.HUDItems.inventory.hasItem("bug3") || game.HUD.HUDItems.inventory.hasItem("bug4"));
            var hasCollectedAllBugs = (game.HUD.HUDItems.inventory.hasItem("bug1") && game.HUD.HUDItems.inventory.hasItem("bug2") && game.HUD.HUDItems.inventory.hasItem("bug3") && game.HUD.HUDItems.inventory.hasItem("bug4"));

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
                    "You should head to Laura's field, I think she needs your help ..."
                ]);
            } else {
                game.dialog([
                    "Oh hello there! Would you like to buy some of my products?"
                ]);
            }
        }
    }),

    "Guard" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.parent(x, y, settings);

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

            this.adjustBoxShape(0, -10, 25, 20);    // adjust collision bounding box
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);

            var hasNotCollectedKeys = (!game.HUD.HUDItems.inventory.hasItem("key1") && !game.HUD.HUDItems.inventory.hasItem("key2") && !game.HUD.HUDItems.inventory.hasItem("key3"));
            var hasCollectedSomeKeys = (game.HUD.HUDItems.inventory.hasItem("key1") || game.HUD.HUDItems.inventory.hasItem("key2") || game.HUD.HUDItems.inventory.hasItem("key3"));
            var hasCollectedAllKeys = (game.HUD.HUDItems.inventory.hasItem("key1") && game.HUD.HUDItems.inventory.hasItem("key2") && game.HUD.HUDItems.inventory.hasItem("key3"));

            if (hasNotCollectedKeys) {
                game.dialog([
                    "Where are my keys??"
                ]);
            } else if (hasCollectedSomeKeys && !hasCollectedAllKeys) {
                game.dialog([
                    "I still need a few of the other keys or else I'll get in trouble..."
                ]);
            } else if (hasCollectedAllKeys) {
                game.dialog([
                    "Thanks a lot you! You saved my life!",
                    "As the reward, I shall help you get out of this place."
                ], function onCallback() {
                    game.play.loadLevel({
                        "to"        : "castle_exterior",
                        "music"     : "bells",
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
            ], function onCallback() {
                game.play.loadLevel({
                    "to"        : "players_room",
                    "music"     : "bells",
                    "fadeOut"   : "black",
                    "duration"  : 1000
                });
            });
        }
    })
};