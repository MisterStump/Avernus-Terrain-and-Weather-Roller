var rt_elevation = {
    "name"        : "elevation",
    "description" : "The elevation, texture and material, and water level. The outcome of rolling on these tables is a prompt rather than exact terrain. Feel free to add or change based on your own game.",
    "die_type" : 20,
    "rolls" :[
        {
            "start"  : 1,
            "end"    : 3,
            "value"  : "Flat"
        },
        {
            "start" : 4,
            "end"   : 6,
            "value" : "Hills"
        },
        {
            "start" : 7,
            "end"   : 9,
            "value" : "Mountain"
        },
        {
            "start" : 10,
            "end"   : 11,
            "value" : "Canyon"
        },
        {
            "start" : 12,
            "end"   : 13,
            "value" : "Volcano"
        },
        {
            "start" : 14,
            "end"   : 15,
            "value" : "Vally"
        },
        {
            "start" : 16,
            "end"   : 17,
            "value" : "Mesa"
        },
        {
            "start" : 18,
            "end"   : 18,
            "value" : "Cliff"
        },
        {
            "start" : 19,
            "end"   : 19,
            "value" : "Basin"
        },
        {
            "start" : 20,
            "end"   : 20,
            "value" : "Mud"
        },
    ]
};

var rt_composition = {
    "name"        : "composition",
    "die_type" : 20,
    "rolls" :[
        {
            "start" : 1,
            "end"   : 5,
            "value" : "Dirt"
        },
        {
            "start" : 6,
            "end"   : 9,
            "value" : "Stone"
        },
        {
            "start" : 10,
            "end"   : 14,
            "value" : "Stone gravel"
        },
        {
            "start" : 15,
            "end"   : 16,
            "value" : "Red sand"
        },
        {
            "start" : 17,
            "end"   : 17,
            "value" : "Bone gravel"
        },
        {
            "start" : 18,
            "end"   : 18,
            "value" : "Iron sands"
        },
        {
            "start" : 19,
            "end"   : 19,
            "value" : "Blood sands"
        },
        {
            "start" : 20,
            "end"   : 20,
            "value" : "Mud"
        },
    ]
};

var rt_river = {
    "name"        : "river",
    "description" : "If there is a river, and if so, the appearance of river.",
    "die_type" : 6,
    "rolls" :[
        {
            "start" : 1,
            "end"   : 4,
            "value" : "No river"
        },
        {
            "start" : 5,
            "end"   : 5,
            "value" : "Styx",
            "subroll": "rt_river_appearance"
        },
        {
            "start" : 6,
            "end"   : 6,
            "value" : "Lava",
            "subroll": "rt_river_appearance"
        }
    ]
};

var rt_river_appearance = {
    "die_type" : 6,
    "rolls" :[
        {
            "start" : 1,
            "end"   : 4,
            "value" : "Narrow stream"
        },
        {
            "start" : 5,
            "end"   : 8,
            "value" : "Winding"
        },
        {
            "start" : 9,
            "end"   : 12,
            "value" : "Braided"
        },
        {
            "start" : 13,
            "end"   : 16,
            "value" : "Lake"
        },
        {
            "start" : 17,
            "end"   : 17,
            "value" : "Swamp"
        },
        {
            "start" : 18,
            "end"   : 18,
            "value" : "Delta"
        },
        {
            "start" : 19,
            "end"   : 19,
            "value" : "Waterfall"
        },
        {
            "start" : 20,
            "end"   : 20,
            "value" : "Pond"
        }
    ]
}
