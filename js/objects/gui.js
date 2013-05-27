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

/* The almighty HUD. Keeps track of stats; not just a renderer! */
game.installHUD = function HUD() {
    var items;

    // Override the HUD.update method to perform animation.
    var HUD = me.HUD_Object.extend({
        "init" : function init() {
            this.parent.apply(this, arguments);
            this.isPersistent = true;
        },

        "update" : function update() {
            var result = [];
            Object.keys(items).forEach(function eachKey(key) {
                result.push(items[key].request_update());
            })

            if (result.some(function some(x) { return x; })) {
                this.HUD_invalidated = true;
            }
            return this.HUD_invalidated;
        }
    });

    var HUD_Item = me.HUD_Item.extend({
        "request_update" : function request_update() {
            return false;
        }
    });

    var inventory = HUD_Item.extend({
        "contents" : [],

        "init" : function init(x, y, contents) {
            var self = this;
            self.parent(x, y, 0);
            contents.forEach(function forEach(item) {
                self.addItem(item);
            })

            this.contents = (game.stat.load("inventory_contents") || []).map(function map(item) {
                self.cacheIcon(item);
                return item;
            });
        },

        "cacheIcon" : function cacheIcon(item) {
            if (item.image) {
                item.cached_icon = game.getImage(item.image);

                var count = ~~(item.cached_icon.width / item.spritewidth);
                item.offset = {
                    "x" : (item.icon % count) * item.spritewidth,
                    "y" : ~~(item.icon / count) * item.spriteheight
                };
            }
        },

        "addItem" : function addItem(item) {
            me.audio.play("fanfare");
            me.event.publish("acquire item", [ item.name ]);
            game.dialog([ item.description ]);

            this.cacheIcon(item);
            this.updated = true;
            this.contents.push(item);

            game.stat.save("inventory_contents", this.contents.map(function map(item) {
                var result = {};
                Object.keys(item).forEach(function forEach(key) {
                    if (key !== "cached_icon") {
                        result[key] = item[key];
                    }
                });
                return result;
            }));
        },

        "removeItem" : function removeItem(idx) {
            this.contents.splice(idx, 1);
        },

        "getItem" : function getItem(idx) {
            return this.contents[idx];
        },

        "hasItem" : function hasItem(name) {
            return this.contents.some(function some(item) {
                return game.isObject(item) && (item.name === name);
            });
        },

        "request_update" : function request_update() {
            return this.updated;
        }
    });

    // Create a HUD container.
    // NOTE: This turns game.HUD into a singleton!
    game.HUD = new HUD(0, 0, 640, 50);
    me.game.add(game.HUD);

    // Create a list of items to add to the HUD.
    items = {
        "inventory"     : new inventory(~~(c.WIDTH / 4), 2, [])
    };

    // Add them all.
    Object.keys(items).forEach(function eachKey(key) {
        game.HUD.addItem(key, items[key]);
    });

    me.game.sort(game.sort);
};
