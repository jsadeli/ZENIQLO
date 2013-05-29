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

game.resources = {
    /* Graphics. */
    "img" : [
        // UI
        "dialog",
        "heart_empty",
        "heart_half",
        "heart_full",

        // Characters
        "player",
        "player_eyes",
        "abi",
        "abi_eyes",
        "george",
        "george_eyes",
        "james",
        "james_eyes",
        "jessica",
        "jessica_eyes",
        "whitey",
        "whitey_eyes",
        "char_shadow",
        "snake",
        "armor_male_green",
        "old_man",
        "dog_white",
        "sheep_white",
        "swan",
        "chicken",

        // Collectibles
        "coin_gold",
        "coin_silver",
        "coin_shadow",
        "hammer",

        // Interactive objects
        "chests",
        "silver_keys",

        // Tilesets
        "accessories",
        "animwater",
        "atlas_build",
        "atlas_obj_misk",
        "barrel",
        "bridges",
        "buckets",
        "buffet_table",
        "cabinets",
        "castlefloors_outside",
        "country",
        "castlewalls",
        "castle_outside",
        "castlefloors",
        "coldwater",
        "coldwatergrass",
        "dark_library_stuff",
        "dirt",
        "dirt2",
        "doors",
        "dungeon",
        "dungeon1",
        "farming_fishing",
        "fence",
        "fence_alt",
        "floor",
        "flowers_2",
        "grass",
        "grassalt_flowers",
        "house",
        "housey",
        "inside",
        "kitchen",
        "misc",
        "mountains",
        "sandwater",
        "shadow",
        "signs",
        "snow",
        "snowcoldwater",
        "snowice",
        "snowwater",
        "snowwateralt",
        "stairs",
        "stonepattern",
        "tiff_b",
        "tiff_c",
        "tiff_d",
        "tile_a1",
        "tile_a2",
        "tile_a3",
        "tile_a4",
        "tile_a5",
        "tile_b",
        "tile_c",
        "tile_d",
        "tile_e",
        "town_buildings",
        "tree_stump",
        "treetop",
        "trunk",
        "victoria",
        "victorian_house",
        "watergrass",
        "windmill"
    ],

    /* Maps from Tiled. */
    "map" : [
        "players_room",
        "players_house",
        "world",
        "empty_room",
        "library",
        "farmland",
        "winterfell",
        "dungeon",
        "castle_exterior",
        "castle_hallway",
        "castle_interior",
        "castle_bedroom",
        "castle_armour_room"
    ],

    /* 1-channel audio. Usually sound effects. */
    "sfx" : [
        "chests",
        "collect_coin",
        "dying",
        "fanfare",
        "hurt",
        "mallet_swing",
        "mallet_whomp"
    ],

    /* 2-channel audio. Usually music. */
    "bgm" : [
        "bells",
        "del_erad",
        "pink_and_lively",
        "random_and_cheap",
        "nyan_cat_original"
    ]
};

game.info = {
    "audio_error" : [
        {
            "messages" : [
                "Your browser does not support Ogg-Vorbis audio.",
                "Sounds have been disabled.",
                "",
                "Press [Enter] or [Space] to continue."
            ]
        }
    ]
};

game.story = {
    // max about 76 chars per line
    "intro" : [
        {
            "image" : null,
            "messages" : [
                "A long time ago (1949), in a land far, far away (Japan) ...",
                "A guy called Tadashi-kun decided to open a clothing shop."
            ]
        },
        {
            "image" : null,
            "messages" : [
                "The company was called Ogori Shoji and they only sell men clothes.",
                "In 1985, the company decided to expand their business and starts selling",
                "unisex casual wear. This new company is called UNIQLO (Unique Clothing)",
                "while the original company is renamed to Fast Retailing in 1991."
            ]
        },
        {
            "images": null,
            "messages": [
                "This is the story of Tadashi-kun and his journey to WORLD DOMINATION ..."
            ]
        }
    ],

    "gameover" : [
        {
            "image" : null,
            "messages" : [
                "Fool! you died.",
                "This isn't your time yet ...",
                "",
                "You're going back now,",
                "and that was all like just a dream ...",
                "Good luck!",
                "",
                "Press [Enter] or [Space] to continue."
            ]
        }
    ]
};

game.credits = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Programming :",
    "",
    "",
    "  ZENIQLO",
    "                                   ... Jeffrey Sadeli",
    "",
    "  Neverwell Moor",
    "                                   ... Jason Oster",
    "    http://www.kodewerx.org/",
    "    *The MIT License",
    "    *GNU GPL 3.0 or later",
    "",
    "  melonJS-0.9.5.js",
    "  melonJS                          ... Olivier Biot, et al.",
    "    http://www.melonjs.org/",
    "    *The MIT License",
    "",
    "  cp.js",
    "  Chipmunk-js                      ... Scott Lembcke, Joseph Gentle, et al.",
    "    https://github.com/josephg/Chipmunk-js/",
    "    *The MIT License",
    "",
    "  minpubsub.js",
    "  MinPubSub                        ... Daniel Lamb",
    "    https://github.com/daniellmb/MinPubSub/",
    "    *The MIT License",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Level Design :",
    "                                   ... Jeffrey Sadeli",
    "                                   ... Tiffany Sadeli",
    "                                   ... Enkh-Uchral Uzmee",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "                             Thanks for playing!",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];
