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

/* Credits screen */
game.CreditsScreen = me.ScreenObject.extend({
    "done" : false,

    "y" : 0,
    "size" : 13,

    "canvas" : null,
    "buffer" : null,

    "init" : function init(pages, state, fade, duration) {
        var self = this;
        self.parent(true);
        self.font = new me.Font("Monaco, Courier New", this.size, "#aaa");

        // Render text to buffer canvas.
        self.canvas = document.createElement("canvas");
        self.buffer = self.canvas.getContext("2d");

        var w = 0;
        game.credits.forEach(function forEach(line) {
            w = Math.min(Math.max(w, self.font.measureText(self.buffer, line).width), c.WIDTH);
        });
        var h = game.credits.length * this.size;
        var x = ~~((c.WIDTH - w) / 2);
        var y = 0;

        self.canvas.width = c.WIDTH;
        self.canvas.height = h;

        self.buffer.fillStyle = "#222";
        self.buffer.fillRect(0, 0, c.WIDTH, h);

        game.credits.forEach(function forEach(line) {
            self.font.draw(self.buffer, line, x, y);
            y += self.size;
        });
    },

    "onResetEvent" : function onResetEvent() {
        this.done = false;
        this.y = 0;

//        me.audio.stopTrack();
//        me.audio.playTrack("del_erad");

        me.game.viewport.fadeOut("black", 3000);
    },

    "update" : function update() {
        this.y += 0.5;

        var max = this.height - c.HEIGHT;
        if (this.y >= max) {
            this.done = true;
            this.y = max;
        }

        return !this.done;
    },

    "draw" : function draw(context) {
        context.drawImage(
            this.canvas,
            0, ~~this.y,
            c.WIDTH, c.HEIGHT,
            0, 0,
            c.WIDTH, c.HEIGHT
        );
    }
});