const db = require('../config/connection');
const { User, CropReference } = require('../models');

db.once('open', async () => {
// * THIS FILE IS NOT COMPLETE! *

//Starter seed data 
const plantSeeds = await Planting.insertMany(
    [
        {
         "name": "Arugula",
         "dtm": 28,
         "harvestwindow": 14
        },
        {
         "name": "Baby kale",
         "dtm": 30,
         "harvestwindow": 14
        },
        {
         "name": "Baby Mustard",
         "dtm": 30,
         "harvestwindow": 14
        },
        {
         "name": "Basil",
         "dtm": 70,
         "harvestwindow": 14
        },
        {
         "name": "Beets",
         "dtm": 70,
         "harvestwindow": 20
        },
        {
         "name": "Beans",
         "dtm": 50,
         "harvestwindow": 21
        },
        {
         "name": "Beans (Pole)",
         "dtm": 60,
         "harvestwindow": 60
        },
        {
         "name": "Broccoli",
         "dtm": 85,
         "harvestwindow": 14
        },
        {
         "name": "Brussel Sprouts",
         "dtm": 120,
         "harvestwindow": 21
        },
        {
         "name": "Carrots (Fresh)",
         "dtm": 55,
         "harvestwindow": 20
        },
        {
         "name": "Cabbage - Chinese",
         "dtm": 80,
         "harvestwindow": 14
        },
        {
         "name": "Cabbage - Storage",
         "dtm": 95,
         "harvestwindow": 14
        },
        {
         "name": "Cabbage - Savoy",
         "dtm": 75,
         "harvestwindow": 14
        },
        {
         "name": "Cabbage - Summer",
         "dtm": 80,
         "harvestwindow": 14
        },
        {
         "name": "Cauliflower \/ Romanesco",
         "dtm": 110,
         "harvestwindow": 14
        },
        {
         "name": "Celery Root",
         "dtm": 120,
         "harvestwindow": 14
        },
        {
         "name": "Celery Root - Mini",
         "dtm": 80,
         "harvestwindow": 14
        },
        {
         "name": "Coriander",
         "dtm": 55,
         "harvestwindow": 14
        },
        {
         "name": "Cucumber - English (Greenhouse)",
         "dtm": 55,
         "harvestwindow": 45
        },
        {
         "name": "Cucumber - Libanese (Greenhouse)",
         "dtm": 55,
         "harvestwindow": 45
        },
        {
         "name": "Dill",
         "dtm": 50,
         "harvestwindow": 14
        },
        {
         "name": "Eggplant (Field)",
         "dtm": 90,
         "harvestwindow": 72
        },
        {
         "name": "Fennel - Mini",
         "dtm": 60,
         "harvestwindow": 14
        },
        {
         "name": "Frisée",
         "dtm": 67,
         "harvestwindow": 14
        },
        {
         "name": "Garlic",
         "dtm": 255,
         "harvestwindow": 14
        },
        {
         "name": "Green Onion",
         "dtm": 70,
         "harvestwindow": 14
        },
        {
         "name": "Kale",
         "dtm": 85,
         "harvestwindow": 98
        },
        {
         "name": "Kohlrabi",
         "dtm": 70,
         "harvestwindow": 14
        },
        {
         "name": "Leek Summer",
         "dtm": 130,
         "harvestwindow": 21
        },
        {
         "name": "Leek Storage",
         "dtm": 180,
         "harvestwindow": 21
        },
        {
         "name": "Lettuce",
         "dtm": 48,
         "harvestwindow": 14
        },
        {
         "name": "Melons - Cantalope",
         "dtm": 76,
         "harvestwindow": 21
        },
        {
         "name": "Melons - Watermelom",
         "dtm": 76,
         "harvestwindow": 21
        },
        {
         "name": "Mesclun (salanova)",
         "dtm": 60,
         "harvestwindow": 27
        },
        {
         "name": "Onion - Storage",
         "dtm": 118,
         "harvestwindow": 12
        },
        {
         "name": "Onion - Fresh",
         "dtm": 80,
         "harvestwindow": 14
        },
        {
         "name": "Pak Choi",
         "dtm": 50,
         "harvestwindow": 14
        },
        {
         "name": "Peas",
         "dtm": 60,
         "harvestwindow": 21
        },
        {
         "name": "Peppers - Bell (Field)",
         "dtm": 120,
         "harvestwindow": 60
        },
        {
         "name": "Peppers - Hot (Field)",
         "dtm": 100,
         "harvestwindow": 15
        },
        {
         "name": "Radish",
         "dtm": 30,
         "harvestwindow": 14
        },
        {
         "name": "Rapini",
         "dtm": 60,
         "harvestwindow": 14
        },
        {
         "name": "Rutabaga",
         "dtm": 95,
         "harvestwindow": 21
        },
        {
         "name": "Spinach TR",
         "dtm": 55,
         "harvestwindow": 28
        },
        {
         "name": "Spinach DS",
         "dtm": 55,
         "harvestwindow": 28
        },
        {
         "name": "Sucrine",
         "dtm": 50,
         "harvestwindow": 14
        },
        {
         "name": "Summer Squash",
         "dtm": 50,
         "harvestwindow": 42
        },
        {
         "name": "Swiss Chard",
         "dtm": 65,
         "harvestwindow": 84
        },
        {
         "name": "Tomato - Cherry (Greenhouse)",
         "dtm": 145,
         "harvestwindow": 180
        },
        {
         "name": "Tomato - Heirloom (Greenhouse)",
         "dtm": 145,
         "harvestwindow": 180
        },
        {
         "name": "Tomato - (Field)",
         "dtm": 115,
         "harvestwindow": 42
        },
        {
         "name": "Turnip - Hakurei",
         "dtm": 35,
         "harvestwindow": 14
        },
        {
         "name": "Winter Radish",
         "dtm": 70,
         "harvestwindow": 21
        },
        {
         "name": "Winter Squash",
         "dtm": 105,
         "harvestwindow": 21
        }
    ]
)

console.log('planting seeded');

let testvar = CropReference.insertMany(plantSeeds)
console.log("seedtest", testvar)


process.exit();
});