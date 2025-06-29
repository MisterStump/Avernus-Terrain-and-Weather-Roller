var rt_humidity = {
    "description" : "Avernus is similar to a desert in that it lacks fresh water. However, there are pockets of humidity after a large battle. Ichor and viscera evaporate in the hot atmosphere and collect in localized areas. They humidity is never comfortable.",
    "die_type" : 20,
    "rolls" :[
        {
            "start" : 1,
            "end"   : 1,
            "value" : "Arid",
            "effect": "Water consumption doubles."
        },
        {
            "start" : 2,
            "end"   : 10,
            "value" : "Dry"
        },
        {
            "start" : 11,
            "end"   : 19,
            "value" : "Moist"
        },
        {
            "start" : 20,
            "end"   : 20,
            "value" : "Sticky"
        }
    ]
};

var rt_precip = {
    "description" : "Precipitation refers to not only water falling from the sky in Avernus, it includes all supernatural phenomenon that falls.",
    "die_type" : 20,
    "rolls" :[
        {
            "start" : 1,
            "end"   : 1,
            "value" : "Clear sky"
        },
        {
            "start" : 2,
            "end"   : 14,
            "value" : "Smokey clouds"
        },
        {
            "start" : 15,
            "end"   : 16,
            "value" : "Acid rain"
        },
        {
            "start" : 17,
            "end"   : 17,
            "value" : "Rust fall"
        },
        {
            "start" : 18,
            "end"   : 18,
            "value" : "Ichor rain"
        },
        {
            "start" : 19,
            "end"   : 19,
            "value" : "Blood rain"
        },
        {
            "start" : 20,
            "end"   : 20,
            "value" : "Fiery clouds"
        }
    ]
};

var rt_wind = {
    "description" : "Rapid fluctuations in temperature forms strong winds in Avernus.",
    "die_type" : 4,
    "rolls" :[

        {
            "start" : 1,
            "end"   : 1,
            "value" : "No wind"
        },
        {
            "start" : 2,
            "end"   : 2,
            "value" : "Mild wind"
        },
        {
            "start" : 3,
            "end"   : 3,
            "value" : "Fast wind"
        },
        {
            "start" : 4,
            "end"   : 4,
            "value" : "Oppressive wind",
            "effect": "Wind pushes everything downwards."
        }
    ]
};