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

game.stat = (function stat() {
    var current = null;

    function save(key, value) {
        try {
            if (!current) {
                current = {};
            }
            current[key] = value;
        }
        catch (e) {
            current = null;
            throw "Error saving stat '" + key + "' to localStorage.";
        }
    }

    function load(key) {
        if (!current) {
            current = null;
            return null;
        }

        return current[key];
    }

    function keys() {
        load();
        if (!current) {
            return null;
        }
        return Object.keys(current);
    }

    return {
        "save" : save,
        "load" : load,
        "keys" : keys
    };
})();
