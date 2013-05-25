/*
 * Neverwell Moor, a fantasy action RPG
 * Copyright (C) 2012  Jason Oster
 *
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

/* Informational screen */
game.InfoScreen = me.ScreenObject.extend({
    // True when fading.
    "fading" : false,

    // Which page to view.
    "currentPage" : 0,

    "init" : function init(pages, state, fade, duration, notify) {
        this.parent(true);
        this.pages = pages;
        this.font = new me.Font("Verdana", 16, "#fff");
        this.state = state || me.state.MENU;
        this.fade = fade;
        this.duration = duration || 250;
        this.notify = notify;
    },

    "onResetEvent" : function onResetEvent() {
        var self = this;
        self.currentPage = 0;

        if (this.notify) {
            me.event.publish("notify", [ "Press the action key (Enter or Space) to advance to the next page." ]);
            me.event.publish("notify", [ "Press the skip key (ESC) to skip the story." ]);
        }

        if (self.fade) {
            self.fading = true;
            me.game.viewport.fadeOut(self.fade, self.duration, function fadeComplete() {
                self.fading = false;
            });
        }
    },

    "update" : function update() {
        var self = this;
        var skip = false;

        if (!self.fading && (me.input.isKeyPressed("action") || me.input.isKeyPressed("skip"))) {
            if (me.input.keyStatus("skip")) {
                skip = true;
            }

            function nextPage() {
                if (skip || (++self.currentPage >= self.pages.length)) {
                    self.fading = false;
                    me.state.change(self.state);
                }
                else if (self.fade) {
                    self.fading = true;
                    me.game.viewport.fadeOut(self.fade, self.duration, function fadeComplete() {
                        self.fading = false;
                    });
                }
            }

            if (self.fade) {
                self.fading = true;
                me.game.viewport.fadeIn(self.fade, self.duration, nextPage);
            }
            else {
                nextPage();
            }
        }

        return self.fading;
    },

    "draw" : function draw(context) {
        var self = this;

        context.fillStyle = "#000";
        context.fillRect(0, 0, c.WIDTH, c.HEIGHT);

        if (self.currentPage < self.pages.length) {
            var page = self.pages[self.currentPage];

            // Calculate the longest text width.
            var w = 0;
            page.messages.forEach(function forEach(message) {
                w = Math.min(Math.max(w, self.font.measureText(context, message).width), c.WIDTH);
            });

            var x = (c.WIDTH - w) / 2;
            var y = (c.HEIGHT - page.messages.length * 20) / 2;
            page.messages.forEach(function forEach(message) {
                self.font.draw(context, message, x, y);
                y += 20;
            });
        }
    }
});
