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
            this.allowRoaming = false;
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
                    "SO CUTEEEE~~~!!!!@$@#"
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
            this.body.setMass(Infinity);
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            self.parent(actor);

            game.dialog([
                "I'm Whitey, what's your name?"
            ])
        }
    })
};
