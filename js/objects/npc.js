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

/* NPCs */
game.NPC = game.Sprite.extend({

    // Bounding Box where this NPC can see.
    "vision" : null,

    // Angry, alerted, and tracking prey!
    "tracking" : null,

    // NPC will move toward this vector.
    "destination" : null,

    // Direction facing.
    "dir_name" : "down",

    // Re-render when true.
    "isDirty" : false,

    // Standing or walking?
    "standing" : true,

    // Whether or not the character can roam freely.
    // Body mass will affect the character's ability to roam.
    // Note: specifying a mass of Infinity will disable NPC roaming.
    "allowRoaming" : true,

    // Sleep time when standing.
    "sleep" : 0,

    // Maximum distance to walk while roaming.
    "maxDistance" : 200,

    // How much force to apply when walking.
    "forceConstant" : 600,

    // How far away from destination is "good enough".
    // A low tolerance will cause the NPC to "bounce" around its destination.
    // A high tolerance will cause the NPC to stop short of its destination.
    // This tolerance will cause just enough "bounciness" to look "realistic".
    "destTolerance" : 8,

    // Walking speed. (forceConstant is multiplied by velocity for the final force applied.)
    "velocity" : 2,

    // A helper constant.
    "walk_angle" : Math.sin((45).degToRad()),

    // whether or not the NPC can be 'hit'
    "invincible" : false,

    // Health.
    "hearts" : 5,

    // Attack strength.
    "power" : 1,

    // True during weapon attack animation.
    "attacking" : false,

    // This is what the NPC is worth on average.
    // Determines the loot dropped when killed.
    "value" : 100,

    "init" : function init(x, y, settings) {
        var self = this;
        self.parent(x, y, settings);

        self.body.eachShape(function eachShape(shape) {
            shape.collision_type = c.COLLIDE_GOODIE;
            shape.setLayers(c.LAYER_NO_COIN | c.LAYER_NO_CHEST | c.LAYER_INTERACTIVE | c.LAYER_LIVING);
            shape.data.power = self.power;
        });

        // Player is defined with a mass of 1. give NPCs a higher mass so Player
        // can't push them around as easily. May also want to handle this as a
        // special case in a collision handler, such that Player<->Sprite
        // collisions do not cause them to push one another.
        //self.body.setMass(3);
        if (settings.mass) {
            self.body.setMass(settings.mass);
        }

        // Set animations.
        self.addAnimation("walk_down",   [ 0, 4,  8, 12 ]);
        self.addAnimation("walk_left",   [ 1, 5,  9, 13 ]);
        self.addAnimation("walk_up",     [ 2, 6, 10, 14 ]);
        self.addAnimation("walk_right",  [ 3, 7, 11, 15 ]);

        self.addAnimation("stand_down",  [ 0 ]);
        self.addAnimation("stand_left",  [ 1 ]);
        self.addAnimation("stand_up",    [ 2 ]);
        self.addAnimation("stand_right", [ 3 ]);

        self.setCurrentAnimation("stand_down");
        self.animationspeed = 10;

        // AI initialization.
        self.destination = new cp.v(0, 0);

        var shape = self.body.shapeList[0];
        self.vision = cp.bb(shape.bb_l, shape.bb_b, shape.bb_r, shape.bb_t);

        if (settings.npc_standing) {
            this.allowRoaming = !settings.npc_standing;
        }
    },

    "hit" : function hit(power) {
        var self = this;

        if (self.invincible) {
            return;
        }

        me.audio.play("hurt");

        // FIXME: "pain" sound.

        self.hearts -= power;
        if (self.hearts <= 0) {
            // Dead.
            me.audio.play("dying");

            me.game.remove(self, true);
            cm.remove(self.body);

            me.game.sort(game.sort);

            self.onDeath();
        }
    },

    "onDeath" : function onDeath() {
        // virtual function
    },

    "resetRoam" : function resetRoam() {
        if (this.sleep <= 0) {
            // Sleep for a random period between 0 - 5 seconds.
            this.sleep = Math.random() * 5 * me.sys.fps;
            this.destination.x = this.destination.y = 0;

            this.tracking = null;

            this.stand();
        }
    },

    "stand" : function stand() {
        // Force standing animation.
        this.isDirty = true;
        this.standing = true;
        this.setCurrentAnimation("stand_" + this.dir_name);
    },

    "updateVision" : function updateVision() {
        var shape = this.body.shapeList[0]; // FIXME! May not always have a shape! :(
        var dir = c[this.dir_name.toUpperCase()];
        var w = shape.bb_l - shape.bb_r - 1;
        var h = shape.bb_b - shape.bb_t - 1;
        this.vision.l = shape.bb_l - (dir == c.LEFT     ? 150 : (dir == c.RIGHT ? w : 75));
        this.vision.b = shape.bb_b - (dir == c.DOWN     ? 150 : (dir == c.UP    ? h : 75));
        this.vision.r = shape.bb_r + (dir == c.RIGHT    ? 150 : (dir == c.LEFT  ? w : 75));
        this.vision.t = shape.bb_t + (dir == c.UP       ? 150 : (dir == c.DOWN  ? h : 75));
    },

    "checkMovement" : function checkMovement() {
        var self = this;

        if (self.body.getMass() == Infinity) {
            return;
        }
        if (!self.allowRoaming) {
            return;
        }
        if (--self.sleep > 0) {
            return;
        }

        self.standing = false;

        var x = self.body.p.x;
        var y = c.HEIGHT - self.body.p.y;

        // Choose a nearby random point
        if (!self.destination.x || !self.destination.y) {
            // FIXME: Use a bounding box to set the NPC roaming zone, and
            // cp.bbContainsBB() to validate position!

            var max = self.maxDistance * 2;
            var hMax = self.maxDistance;

            self.destination.x = x + ~~(Math.random() * max - hMax);
            self.destination.y = y + ~~(Math.random() * max - hMax);
        }

        // Decide direction to destination.
        var force = {
            "x" : self.destination.x - x,
            "y" : self.destination.y - y
        };

        // Decide distance based on destTolerance.
        force.x = (Math.abs(force.x) < self.destTolerance) ? 0 : force.x.clamp(-1, 1);
        force.y = (Math.abs(force.y) < self.destTolerance) ? 0 : force.y.clamp(-1, 1);

        // Set direction, favoring X-axis.
        if (force.y) {
            self.dir_name = (force.y < 0 ? "up" : "down");
        }
        if (force.x) {
            self.dir_name = (force.x < 0 ? "left" : "right");
        }

        // Set animation.
        self.setCurrentAnimation("walk_" + self.dir_name);


        // Calculate directional velocity.
        force.x *= self.velocity * me.timer.tick;
        force.y *= self.velocity * me.timer.tick;
        if (force.x && force.y) {
            force.x *= self.walk_angle;
            force.y *= self.walk_angle;
        }
        // Run when tracking prey.
        if (self.tracking) {
            force.x *= 1.5;
            force.y *= 1.5;
        }

        if ((self.sleep < -10) && !~~self.body.vx && !~~self.body.vy) {
            self.resetRoam();
        }
        else {
            // Walk toward the destination.
            self.isDirty = true;
            self.body.applyForce(cp.v(force.x * self.forceConstant, force.y * -self.forceConstant), cp.vzero);
        }

        if (~~self.body.vy !== 0) {
            game.wantsResort = true;
        }
    },

    "interact" : function interact(actor) {
        // Turn 2 clicks (180 degrees) from actor's direction.
        this.turn(2, actor.dir_name);
    },

    "checkInteraction" : function checkInteraction() {
        // TODO: NPC AI.
    },

    // Turn NPC clockwise by a certain number of clicks, with optional starting direction.
    // 1 click == 90 degrees.
    "turn" : function turn(clicks, dir) {
        dir = dir || this.dir_name;
        this.dir_name = c.DIR_NAMES[(c[dir.toUpperCase()] + clicks) % 4];

        this.setCurrentAnimation((this.standing ? "stand_" : "walk_") + this.dir_name);
        this.isDirty = true;
    },

    "update" : function update() {
        this.isDirty = false;
        this.body.resetForces();
        if (!game.modal && !this.attacking) {
            this.updateVision();
            this.checkMovement();
            this.checkInteraction();
        }
        else if (!this.standing) {
            this.stand();
        }

        return this.parent() || this.isDirty;
    },

    "draw" : function draw(context, x, y) {
        this.parent(context, x, y);

        var viewport = me.game.viewport.pos;

        if (c.DEBUG) {
            context.save();

            // Draw a line to the destination.
            if (this.destination.x || this.destination.y) {
                context.strokeStyle = "red";
                context.moveTo(this.body.p.x - viewport.x, c.HEIGHT - this.body.p.y - viewport.y);
                context.lineTo(this.destination.x - viewport.x, this.destination.y - viewport.y);
                context.stroke();
            }

            // Draw the vision box.
            if (this.angry) {
                context.lineWidth = 2;
                context.strokeStyle = (this.tracking ? "red" : "orange");
            }
            else {
                context.lineWidth = 1;
                context.strokeStyle = "green";
            }
            context.strokeRect(
                this.vision.l - viewport.x,
                c.HEIGHT - this.vision.t - viewport.y,
                this.vision.r - this.vision.l,
                this.vision.t - this.vision.b
            );

            context.restore();
        }
    }
});
