const db = require('../config/connection');
const { CropReference } = require('../models');

db.once('open', async () => {

const plantSeeds = await CropReference.insertMany(
    [
        {
         "name": "Arugula",
         "DTM": 28,
         "harvestwindow": 14
        },
        {
         "name": "Baby kale",
         "DTM": 30,
         "harvestwindow": 14
        },
        {
         "name": "Baby Mustard",
         "DTM": 30,
         "harvestwindow": 14
        },
        {
         "name": "Basil",
         "DTM": 70,
         "harvestwindow": 14
        },
        {
         "name": "Beets",
         "DTM": 70,
         "harvestwindow": 20
        },
        {
         "name": "Beans",
         "DTM": 50,
         "harvestwindow": 21
        },
        {
         "name": "Beans (Pole)",
         "DTM": 60,
         "harvestwindow": 60
        },
        {
         "name": "Broccoli",
         "DTM": 85,
         "harvestwindow": 14
        },
        {
         "name": "Brussel Sprouts",
         "DTM": 120,
         "harvestwindow": 21
        },
        {
         "name": "Carrots (Fresh)",
         "DTM": 55,
         "harvestwindow": 20
        },
        {
         "name": "Cabbage - Chinese",
         "DTM": 80,
         "harvestwindow": 14
        },
        {
         "name": "Cabbage - Storage",
         "DTM": 95,
         "harvestwindow": 14
        },
        {
         "name": "Cabbage - Savoy",
         "DTM": 75,
         "harvestwindow": 14
        },
        {
         "name": "Cabbage - Summer",
         "DTM": 80,
         "harvestwindow": 14
        },
        {
         "name": "Cauliflower \/ Romanesco",
         "DTM": 110,
         "harvestwindow": 14
        },
        {
         "name": "Celery Root",
         "DTM": 120,
         "harvestwindow": 14
        },
        {
         "name": "Celery Root - Mini",
         "DTM": 80,
         "harvestwindow": 14
        },
        {
         "name": "Coriander",
         "DTM": 55,
         "harvestwindow": 14
        },
        {
         "name": "Cucumber - English (Greenhouse)",
         "DTM": 55,
         "harvestwindow": 45
        },
        {
         "name": "Cucumber - Libanese (Greenhouse)",
         "DTM": 55,
         "harvestwindow": 45
        },
        {
         "name": "Dill",
         "DTM": 50,
         "harvestwindow": 14
        },
        {
         "name": "Eggplant (Field)",
         "DTM": 90,
         "harvestwindow": 72
        },
        {
         "name": "Fennel - Mini",
         "DTM": 60,
         "harvestwindow": 14
        },
        {
         "name": "Frisée",
         "DTM": 67,
         "harvestwindow": 14
        },
        {
         "name": "Garlic",
         "DTM": 255,
         "harvestwindow": 14
        },
        {
         "name": "Green Onion",
         "DTM": 70,
         "harvestwindow": 14
        },
        {
         "name": "Kale",
         "DTM": 85,
         "harvestwindow": 98
        },
        {
         "name": "Kohlrabi",
         "DTM": 70,
         "harvestwindow": 14
        },
        {
         "name": "Leek Summer",
         "DTM": 130,
         "harvestwindow": 21
        },
        {
         "name": "Leek Storage",
         "DTM": 180,
         "harvestwindow": 21
        },
        {
         "name": "Lettuce",
         "DTM": 48,
         "harvestwindow": 14
        },
        {
         "name": "Melons - Cantalope",
         "DTM": 76,
         "harvestwindow": 21
        },
        {
         "name": "Melons - Watermelom",
         "DTM": 76,
         "harvestwindow": 21
        },
        {
         "name": "Mesclun (salanova)",
         "DTM": 60,
         "harvestwindow": 27
        },
        {
         "name": "Onion - Storage",
         "DTM": 118,
         "harvestwindow": 12
        },
        {
         "name": "Onion - Fresh",
         "DTM": 80,
         "harvestwindow": 14
        },
        {
         "name": "Pak Choi",
         "DTM": 50,
         "harvestwindow": 14
        },
        {
         "name": "Peas",
         "DTM": 60,
         "harvestwindow": 21
        },
        {
         "name": "Peppers - Bell (Field)",
         "DTM": 120,
         "harvestwindow": 60
        },
        {
         "name": "Peppers - Hot (Field)",
         "DTM": 100,
         "harvestwindow": 15
        },
        {
         "name": "Radish",
         "DTM": 30,
         "harvestwindow": 14
        },
        {
         "name": "Rapini",
         "DTM": 60,
         "harvestwindow": 14
        },
        {
         "name": "Rutabaga",
         "DTM": 95,
         "harvestwindow": 21
        },
        {
         "name": "Spinach TR",
         "DTM": 55,
         "harvestwindow": 28
        },
        {
         "name": "Spinach DS",
         "DTM": 55,
         "harvestwindow": 28
        },
        {
         "name": "Sucrine",
         "DTM": 50,
         "harvestwindow": 14
        },
        {
         "name": "Summer Squash",
         "DTM": 50,
         "harvestwindow": 42
        },
        {
         "name": "Swiss Chard",
         "DTM": 65,
         "harvestwindow": 84
        },
        {
         "name": "Tomato - Cherry (Greenhouse)",
         "DTM": 145,
         "harvestwindow": 180
        },
        {
         "name": "Tomato - Heirloom (Greenhouse)",
         "DTM": 145,
         "harvestwindow": 180
        },
        {
         "name": "Tomato - (Field)",
         "DTM": 115,
         "harvestwindow": 42
        },
        {
         "name": "Turnip - Hakurei",
         "DTM": 35,
         "harvestwindow": 14
        },
        {
         "name": "Winter Radish",
         "DTM": 70,
         "harvestwindow": 21
        },
        {
         "name": "Winter Squash",
         "DTM": 105,
         "harvestwindow": 21
        }
    ]
)
console.log('plantSeeds:', plantSeeds)

console.log('planting seeded');

process.exit();
});






