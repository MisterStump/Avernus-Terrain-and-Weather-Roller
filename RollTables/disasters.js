var rt_disaster = {
    "description" : "Avernus is a dangerous place. Even the inhabitants will all agree that the most frightening thing in this plane is its weather.",
    "die_type" : 100,
    "rolls" :[
        {
            "start" : 1,
            "end"   : 90,
            "value" : "No disaster"
        },
        {
            "start" : 91,
            "end"   : 91,
            "value" : "Meteor shower",
            "effect": "An all consuming black cloud threaten to swallow the world. From deep within this cloud balls of ash and fire collect and fall to the ground. For ever minute traveled in a meteor shower there is a 5% chance that a meteor falls near the party. Helm can make a vehicle handling check DC 14 to avoid the meteor. On a failure the vehicle takes 10d6 fire damage. A meteor shower lasts for 2d6 hours and moves in all direction at around 100mph."
        },
        {
            "start" : 92,
            "end"   : 92,
            "value" : "Locust swarm",
            "effect": "A large swarm of blood sucking insects scour the lands of Avernus to feed. Any creature not indoors or magically protected must make a constitution saving throw or take 2d4 damage for every minute they spend without protection."
        },
        {
            "start" : 93,
            "end"   : 93,
            "value" : "Fungus plague",
            "effect": "Spores of brown and green float in the air like dust. Any dead carcass instantly sprout vibrant colored mushrooms. A living creature that breathes the spores in will feel sleepy and sluggish, they must make a CON save DC 13 or become poisoned for the next hour."
        },
        {
            "start" : 94,
            "end"   : 94,
            "value" : "Stygian flood",
            "effect": "The river Styx swell in size due to influx of souls or by powerful magica cast in the lower planes. During a flood, the river swells in double, or even triple in it's width unexpectedly.<br>Creatures on foot must make a DC 17 DEX saving throw to out run the flood. Escaping in a vehicle requires a helm skill check DC 13. A failure does not mean full exposure to river styx.<br>On <b>the first failure</b>, creatures are splashed by small drops of the river, losing a piece of memory permanently. (the character or DM decides)<br>A <b>second failure</b> represents longer exposure to river styx, They forget the name of a loved one and all memories associated with them for the next 7 days.<br>A <b>third failure</b> time exposes the creature to the full effects of the river. (DC 20 feeblemind)<br>Success at any point allows the creature to succeed in escaping the sudden flood."
        },
        {
            "start" : 95,
            "end"   : 95,
            "value" : "Planar disturbance",
            "effect": "Portals connecting to other planes or teleportation spells cast on Avernus have a 10% chance of failing. In addition, portals appear randomly and take curious souls to somewhere else or to an adjacent plane.<br>When a creature steps into a portal, roll a d 20, on a 4 or higher the creature is taken to a random, location in Avernus.<br>On a 3 the creature is taken to the Wandering Emporium.<br>On a 2 the creature is taken to the frozen landscape of Cania, taking 4d8 cold damage and return to the original position after 1 minute.<br>On a 1 the creature is taken to a realm of slime and fungus. Make a WIS saving throw or become poisoned and see vision of death for the next 1d4 days."
        },
        {
            "start" : 96,
            "end"   : 96,
            "value" : "Arcane storm",
            "effect": "Slow moving blue and red streaks of hot lightning strikes the ground from the sky. Add a d8 to all lighting damage rolls. For each minute spent inside the disaster, roll a d20, on a 18 or higher, the party is struck by lightning, taking 3d8 lightning damage."
        },
        {
            "start" : 97,
            "end"   : 97,
            "value" : "Tornado",
            "effect": "A strong twister of red fiery embers tear across Avernus. Creatures not under total cover must make strength saving throw DC 16 to hold on to something. A creature that failed takes 2d6 fire damage and lifted up to 100 feet into the air. Vehicles like the demon grinder is heavy enough to stay grounded and can offer advantage to saving throws to its passengers."
        },
        {
            "start" : 98,
            "end"   : 98,
            "value" : "Earthquake",
            "effect": "The ground cracks and structures break and crumble. Each creature must make a Dexterity saving throw DC 16 to avoid falling debris. On a failure, they take 4d6 bludgeoning damage and are knocked prone, half damage and they are not knocked prone on a success. A creature makes the save every minute in the area of effect of an earthquake.<br>A creature with nothing above them does not need to make this save."
        },
        {
            "start" : 99,
            "end"   : 99,
            "value" : "Soulburn wildfire",
            "effect": "While some inhabitants are completely immune to the burning of fire, they are not immune to the corrupting effects of Avernus wildfire. This blue flames seem to scream as it consumes everything in its path.<br>Soulburn fire leaps across creature and objects alike to seek out souls. A creature caught in the blaze takes 4d6 necrotic damage at the beginning of each round. A creature that took this damage must make a DEX save DC 14 to put themselves out. Any creature in 10 feet radius must make the same save or take the damage themselves."
        },
        {
            "start" : 100,
            "end"   : 100,
            "value" : "Volcanic eruption",
            "effect": "The surface of Avernus is constantly changing supernaturally. Volcanoes appear suddenly and disappear just as fast. The trouble comes when an active volcano moves beside unsuspecting creatures. Make Helm check DC 14 to stir out of the way of exploding volcano or take 2d6 fire damage and 2d6 poison damage as volcanic ash rain down on surrounding creatures."
        }
    ]
};