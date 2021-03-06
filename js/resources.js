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
        "charles",
        "charles_eyes",
        "rachel",
        "rachel_eyes",
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
//        "red_butterfly",
        "black_butterfly",
        "jeffrey_grey",

        // Collectibles
//        "coin_gold",
//        "coin_silver",
//        "coin_shadow",
        "hammer",

        // Interactive objects
        "chests",
        "silver_keys",

        // Tilesets
        "blank",
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
        "hole",
        "holek",
        "ice",
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
        "water",
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
        "cave_entrance",
        "cave",
        "cave_tiny",
        "cave_shortcut",
        "winterfell",
        "dungeon",
        "castle_exterior",
        "castle_hallway",
        "castle_interior",
        "castle_bedroom",
        "castle_kitchen",
        "castle_storage",
        "castle_armour_room",
        "castle_server_room"
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
//        "bells",
//        "del_erad",
        "nyan_cat_on_piano",
//        "nyan_cat_original",
//        "pink_and_lively",
        "random_and_cheap",
        "sm_beware_the_forest_mushrooms",
        "sm_still_the_road_is_full_of_danger",
        "sm_the_dungeon",
//        "sm_weapons_factory",
        "sm_where_am_i_going",
//        "time_to_run_finale_dex_britain",
//        "zelda_house",
        "zelda_lokiri_forest",
        "zelda_theme",
        "zelda_windmill"
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
                "A long time ago (1963), in a land far, far away (Japan) ...",
                "A guy called Tadashi-kun decided to start his business venture in clothes."
            ]
        },
        {
            "image" : null,
            "messages" : [
                "Ogori Shoji, the original company, only sold men clothes. In 1984,",
                "Tadashi-kun decided to expand the business by selling unisex casual wear.",
                "Thus, a new company under the name UNIQLO (Unique Clothing) was born,",
                "while the parent company was renamed to Fast Retailing in 1991.",
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
    "  It was all just a dream...",
    "",
    "",
    "",
    "  Upon waking up, Tadashi-kun applied the lessons he learned",
    "  in his dream and conquered the clothing market in 2021.",
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
    "Marketing Consulting Group Members :",
    "                                   ... Jeffrey Sadeli",
    "                                   ... Enkh-Uchral Uzmee",
    "                                   ... Laura Luo",
    "                                   ... Meng Wei Tsao",
    "                                   ... Dylan Jones",
    "",
    "",
    "",
    "Artwork :",
    "                                   ... Liberated Pixel Cup",
    "                                   ... Chris Bellanger",
    "                                   ... Guido Bos",
    "                                   ... Thane Brimhall",
    "                                   ... Pol Camara",
    "                                   ... Stephen Challener",
    "                                   ... Radomir Dopieralski",
    "                                   ... Daniel Eddeland",
    "                                   ... Jetrel",
    "                                   ... Juan Rodriguez",
    "                                   ... Matthew Nash",
    "                                   ... Casper Nilsson",
    "                                   ... Lanea Zimmerman",
    "                                   ... Jason Oster",
    "                                   ... Daniel Armstrong",
    "                                   ... Jeffrey Sadeli",
    "                                   ... Tiffany Sadeli",
    "                                   ... tpasmall",
    "",
    "",
    "",
    "Game Design :",
    "                                   ... Jeffrey Sadeli",
    "                                   ... Dylan Jones",
    "                                   ... Enkh-Uchral Uzmee",
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
    "Audio :",
    "                                   ... Community Audio",
    "                                   ... Etherian",
    "                                   ... The Legend of Zelda",
    "",
    "",
    "",
    "Programming :",
    "",
    "",
    "  ZENIQLO",
    "                                   ... Jeffrey Sadeli",
    "    http://go.sadeli.com/zeniqlo",
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
    "  Neverwell Moor",
    "                                   ... Jason Oster",
    "    http://www.kodewerx.org/",
    "    *The MIT License",
    "    *GNU GPL 3.0 or later",
    "",
    "",
    "",
    "Supporting Casts :",
    "                                   ... Enkh-Uchral Uzmee",
    "                                   ... Laura Luo",
    "                                   ... Meng Wei Tsao",
    "                                   ... Dylan Jones",
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
